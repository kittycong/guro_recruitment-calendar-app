// 실제 수습평가표 양식으로 HWPX 생성 파이프라인을 돌려 구조 무결성을 검사한다.
// 실행: node scripts/check-probation-hwpx.mjs "<양식.hwpx>" [출력.hwpx]
// 양식 파일은 개인정보가 들어 있어 저장소에 넣지 않는다.
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { loadApp } from "./load-app.mjs";

const require = createRequire(import.meta.url);
const api = loadApp(
  "{ buildProbationEvaluationPayload, applyProbationEvaluationTemplate, findFirstSectionPath, buildProbationPreviewText, setProbationEvaluator: (v) => { state.probationEvaluator = v; } }",
);

const JSZip = require("../outputs/recruitment_calendar_app/jszip.min.js");
const templatePath = process.argv[2];
assert.ok(templatePath, "사용법: node scripts/check-probation-hwpx.mjs <양식.hwpx> [출력.hwpx]");

const zip = await JSZip.loadAsync(readFileSync(templatePath));
const sectionPath = api.findFirstSectionPath(zip);
assert.ok(sectionPath, "본문 XML을 못 찾음");
const before = await zip.file(sectionPath).async("string");

const record = {
  name: "홍길동",
  department: "활동지원팀",
  duty: "활동지원",
  position: "간사",
  hireDate: "2026-06-08",
  result: "renew",
  note: "",
  scores: [8, 8, 8, 7, 9, 4, 5, 5, 5, 3, 7, 4, 6],
  totalScore: "",
  writtenDate: "",
  evaluationText: "",
};
api.setProbationEvaluator({ department: "사무국", position: "사무국장", name: "김평가" });
const payload = api.buildProbationEvaluationPayload(record);
const after = api.applyProbationEvaluationTemplate(before, payload);

const count = (xml, re) => (xml.match(re) || []).length;
const sizes = (xml) => (xml.match(/<hp:sz [^>]*>/g) || []).join("|");

// 표 구조가 그대로여야 한다
assert.equal(count(after, /<hp:tbl\b/g), count(before, /<hp:tbl\b/g), "표 개수가 바뀜");
assert.equal(count(after, /<hp:tr\b/g), count(before, /<hp:tr\b/g), "행 개수가 바뀜");
assert.equal(count(after, /<hp:tc\b/g), count(before, /<hp:tc\b/g), "셀 개수가 바뀜");
assert.equal(count(after, /<hp:subList\b/g), count(before, /<hp:subList\b/g), "셀 본문 개수가 바뀜");
assert.equal(sizes(after), sizes(before), "표/셀 크기 속성이 바뀜");

// 항목 라벨은 남아 있어야 한다
["2. 종합평가", "3. 최종평가", "평 가 자", "피평가자", "합    계"].forEach((label) => {
  assert.ok(after.includes(label.replace(/ /g, " ")) || after.includes(label), `라벨이 사라짐: ${label}`);
});

// 평가내용이 실제로 교체됐고, 겹치는 레이아웃 캐시가 없어야 한다
const zone = after.slice(after.indexOf("2. 종합평가"), after.indexOf("3. 최종평가"));
assert.ok(zone.includes("수습 기간 동안"), "평가내용이 들어가지 않음");
const oldZone = before.slice(before.indexOf("2. 종합평가"), before.indexOf("3. 최종평가"));
const oldLines = [...oldZone.matchAll(/<hp:t>([^<]{20,})<\/hp:t>/g)].map((m) => m[1]);
oldLines.forEach((line) => assert.ok(!zone.includes(line), `기존 평가내용이 남아 있음: ${line.slice(0, 25)}…`));
assert.ok(!/vertpos="\d+"[\s\S]{0,200}?수습 기간 동안/.test(zone), "생성 문단에 레이아웃 캐시가 붙음");

// 이름/부서 치환
assert.ok(after.includes("<hp:t>홍길동</hp:t>"), "피평가자 성명 치환 실패");
assert.ok(after.includes("<hp:t>활동지원팀</hp:t>"), "피평가자 소속 치환 실패");
assert.ok(!/<hp:t>강지나<\/hp:t>/.test(after), "양식에 있던 이름이 남아 있음");
assert.ok(after.includes("<hp:t>김평가</hp:t>"), "평가자 성명 치환 실패");
assert.equal((after.match(/\(인\)/g) || []).length, (before.match(/\(인\)/g) || []).length, "(인) 표시가 사라짐");
assert.ok(!/<hp:t>신건철/.test(after), "양식에 있던 평가자 이름이 남아 있음");

// 평가기간: 입사일 ~ 수습만료일
assert.ok(after.includes("2026. 6. 8."), "수습기간 시작일 치환 실패");
assert.ok(/<hp:t>[^<]*2026\. 9\. 7\.[^<]*<\/hp:t>/.test(after), "수습기간 종료일 치환 실패");

const out = process.argv[3];
if (out) {
  zip.file(sectionPath, after);
  if (zip.file("Preview/PrvText.txt")) zip.file("Preview/PrvText.txt", api.buildProbationPreviewText(payload));
  writeFileSync(out, await zip.generateAsync({ type: "nodebuffer" }));
  console.log("생성:", out);
}
console.log("수습평가표 HWPX 구조 검사 통과 (문단", count(after, /<hp:p /g), "개)");
