// 수습평가표 로직 자체 검증. 실행: node scripts/test-probation.mjs
import assert from "node:assert/strict";
import { loadApp } from "./load-app.mjs";

const api = loadApp(
  "{ buildProbationSummary, replaceHwpxPlainText, replaceProbationEvaluationParagraph, fillLabeledCell, nextBusinessDay, toDateKey, parseDate, addDays }",
);

// 1. 작성날짜 기본값 = 근무평가 작성일 + 1 평일
const summary = api.buildProbationSummary({ hireDate: "2026-01-12" });
const review = api.parseDate(summary.reviewDate);
const written = api.parseDate(summary.writtenDateDefault);
assert.ok(written > review, "작성날짜는 근무평가 작성일보다 뒤여야 함");
assert.ok(![0, 6].includes(written.getDay()), "작성날짜는 평일이어야 함");
assert.equal(summary.writtenDateDefault, api.toDateKey(api.nextBusinessDay(api.addDays(review, 1))));

// 금요일(2026-09-04)이 근무평가 작성일이면 작성날짜는 다음 월요일
assert.equal(api.toDateKey(api.nextBusinessDay(api.parseDate("2026-09-05"))), "2026-09-07");

// 2. 치환은 hp:t 안에서만. 속성값의 000을 건드리면 표가 틀어진다
const attrXml = '<hp:tc><hp:sz width="10000" height="3000"/><hp:t>000</hp:t></hp:tc>';
const replaced = api.replaceHwpxPlainText(attrXml, /000|박수빈/g, "홍민서");
assert.ok(replaced.includes('width="10000"') && replaced.includes('height="3000"'), "표 크기 속성은 그대로여야 함");
assert.ok(replaced.includes("<hp:t>홍민서</hp:t>"));

// 3. 라벨 다음 칸 채우기: 같은 라벨이라도 구역(평가자/피평가자)별로 구분한다
const cellXml =
  "<hp:t>평 가 자</hp:t><hp:t>성    명</hp:t><hp:t>신건철</hp:t>" +
  "<hp:t>피평가자</hp:t><hp:t>성    명</hp:t><hp:t>강지나</hp:t>";
const filled = api.fillLabeledCell(cellXml, /피평가자/, /성\s*명/, "홍길동");
assert.ok(filled.includes("<hp:t>홍길동</hp:t>"), "피평가자 성명이 채워져야 함");
assert.ok(filled.includes("<hp:t>신건철</hp:t>"), "평가자 성명까지 건드리면 안 됨");

// 4. 종합평가 문단 교체: 기존 문단을 재사용하고 어긋난 레이아웃 캐시는 제거
const para = (text, vertpos) =>
  `<hp:p id="0" paraPrIDRef="17" styleIDRef="3"><hp:run charPrIDRef="22"><hp:t>${text}</hp:t></hp:run>` +
  `<hp:linesegarray><hp:lineseg vertpos="${vertpos}"/></hp:linesegarray></hp:p>`;
const tpl = `<hp:subList vertAlign="TOP">${para("2. 종합평가 ", 0)}${para("기존내용", 1100)}</hp:subList>${para("3. 최종평가", 2200)}`;
const out = api.replaceProbationEvaluationParagraph(tpl, "첫째 줄\n둘째 줄");
assert.ok(!out.includes("기존내용"), "기존 평가내용은 교체돼야 함");
assert.ok(out.includes("<hp:t>첫째 줄</hp:t>") && out.includes("<hp:t>둘째 줄</hp:t>"));
assert.equal((out.match(/vertpos="1100"/g) || []).length, 0, "새 문단에 남은 캐시가 있으면 글이 겹친다");
assert.ok(out.includes('<hp:subList vertAlign="CENTER"'), "평가내용 셀은 세로 가운데 정렬");
assert.ok(out.includes("3. 최종평가"), "최종평가 이후 내용은 보존돼야 함");
assert.equal((out.match(/<hp:p /g) || []).length, 4, "문단 수는 라벨1 + 본문2 + 최종평가1");

console.log("수습평가표 자체 검증 통과");
