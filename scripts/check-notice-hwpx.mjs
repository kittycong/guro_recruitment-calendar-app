// 채용공고 HWPX 생성 검사. 실행: node scripts/check-notice-hwpx.mjs [출력.hwpx]
// 사무국장 공고에 주요직무 세부 줄과 응시자격이 모두 들어가는지, 표가 깨지지 않는지 본다.
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { loadApp } from "./load-app.mjs";

const require = createRequire(import.meta.url);
const JSZip = require("../outputs/recruitment_calendar_app/jszip.min.js");
const api = loadApp(
  "{ buildNoticePayload, applyNoticeTemplate, applyNoticeFieldTable, buildNotepadNoticeText, findFirstSectionPath, RECRUITMENT_FIELD_PRESETS }",
);

const director = api.RECRUITMENT_FIELD_PRESETS.director;
const candidate = {
  id: "notice-check",
  name: "사무국 사회복지사(사무국장) 채용",
  department: "사무국",
  noticeType: "normal",
  noticeDate: "2026-09-07",
  executionNo: "GR2026-P-418",
  hireCount: 1,
  workStartDate: "",
  recruitmentFields: [
    { id: "f1", preset: "director", department: "사무국", fieldName: "사무국장", count: 1, duty: director.duty, workStartDate: "" },
  ],
};

const notice = api.buildNoticePayload(candidate);
const zip = await JSZip.loadAsync(readFileSync(new URL("../outputs/recruitment_calendar_app/templates/sample_notice.hwpx", import.meta.url)));
const sectionPath = api.findFirstSectionPath(zip);
const before = await zip.file(sectionPath).async("string");
const after = api.applyNoticeTemplate(api.applyNoticeFieldTable(before, notice.recruitmentFields), notice);

const count = (xml, re) => (xml.match(re) || []).length;
assert.equal(count(after, /<hp:tbl\b/g), count(before, /<hp:tbl\b/g), "표 개수가 바뀜");
assert.equal(count(after, /<hp:tc\b/g), count(before, /<hp:tc\b/g), "셀 개수가 바뀜");
assert.equal((after.match(/<hp:sz [^>]*>/g) || []).join("|"), (before.match(/<hp:sz [^>]*>/g) || []).join("|"), "표/셀 크기가 바뀜");

// 주요직무 세부 줄
director.dutyDetails.forEach((line) => assert.ok(after.includes(line), `주요직무 누락: ${line}`));
assert.ok(after.includes("• 장애인자립생활센터 운영 관리 1명"), "주요직무 대표줄 누락");

// 응시자격 전체 + 기존 양식 문구 제거
director.qualifications.forEach((line) => {
  const head = line.slice(0, 20);
  assert.ok(after.includes(head), `응시자격 누락: ${head}…`);
});
["4호봉 이하만 지원", "만(60세)미만"].forEach((old) => assert.ok(!after.includes(old), `기존 응시자격이 남음: ${old}`));
assert.ok(after.includes("4.근무조건") || after.includes("4. 근무조건"), "근무조건 이후가 보존돼야 함");

// TXT 공고에도 같은 내용이 들어가야 한다.
// TXT는 홈페이지 게시용이라 가운뎃점 같은 특수문자를 공백으로 바꾸므로 같은 기준으로 비교한다.
const plain = (value) => value.replace(/[•·※★▶▷■□◆◇○●◎]/g, " ").replace(/[ \t]+/g, " ").trim();
const txt = plain(api.buildNotepadNoticeText(notice));
director.dutyDetails.forEach((line) => assert.ok(txt.includes(plain(line)), `TXT 주요직무 누락: ${line}`));
director.qualifications.forEach((line) => assert.ok(txt.includes(plain(line)), `TXT 응시자격 누락: ${line.slice(0, 20)}…`));

// 제목에서 부서명이 잘못 잘려나가면 안 된다
assert.ok(notice.mainTitle.includes("사무국장"), `제목이 잘림: ${notice.mainTitle}`);

const out = process.argv[2];
if (out) {
  zip.file(sectionPath, after);
  writeFileSync(out, await zip.generateAsync({ type: "nodebuffer" }));
  console.log("생성:", out);
}
console.log("사무국장 채용공고 HWPX 검사 통과");
