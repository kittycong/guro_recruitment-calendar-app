// 수습평가표 생성 로직 자체 검증. 실행: node scripts/test-probation.mjs
// app.js는 브라우저 진입 시 DOM을 잡으므로, 필요한 함수/상수 소스만 뽑아 평가한다.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../outputs/recruitment_calendar_app/app.js", import.meta.url), "utf8").replace(/\r\n/g, "\n");

function grab(startMarker, endMarker) {
  const from = src.indexOf(startMarker);
  assert.ok(from >= 0, `못 찾음: ${startMarker}`);
  const to = src.indexOf(endMarker, from);
  assert.ok(to > from, `끝을 못 찾음: ${endMarker}`);
  return src.slice(from, to);
}

const pieces = [
  grab("const PUBLIC_HOLIDAYS = {", "\n};\n") + "\n};\n",
  "const minutesBodyStyle = { paraPrID: '9', charPrID: '9' };",
  ...[
    "function parseDate(",
    "function toDateKey(",
    "function addDays(",
    "function addMonths(",
    "function addYears(",
    "function getPublicHolidayName(",
    "function nextBusinessDay(",
    "function escapeXmlText(",
    "function buildProbationSummary(",
    "function buildHwpxTextParagraph(",
    "function readHwpxParagraphStyle(",
    "function centerCellOfParagraph(",
    "function replaceHwpxPlainText(",
    "function replaceProbationEvaluationParagraph(",
  ].map((name) => grab(name, "\n}\n") + "\n}\n"),
];

const api = new Function(`${pieces.join("\n")}\nreturn { buildProbationSummary, buildHwpxTextParagraph, replaceHwpxPlainText, replaceProbationEvaluationParagraph, nextBusinessDay, toDateKey, parseDate };`)();

// 1. 작성날짜 기본값 = 근무평가 작성일 + 1 평일
const summary = api.buildProbationSummary({ hireDate: "2026-01-12" });
const review = api.parseDate(summary.reviewDate);
const written = api.parseDate(summary.writtenDateDefault);
assert.ok(written > review, "작성날짜는 근무평가 작성일보다 뒤여야 함");
assert.ok(![0, 6].includes(written.getDay()), "작성날짜는 평일이어야 함");
assert.equal(summary.writtenDateDefault, api.toDateKey(api.nextBusinessDay(new Date(review.getFullYear(), review.getMonth(), review.getDate() + 1))));

// 금요일이 근무평가 작성일이면 작성날짜는 다음 월요일
assert.equal(api.toDateKey(api.nextBusinessDay(api.parseDate("2026-09-05"))), "2026-09-07");

// 2. 생성 문단에는 레이아웃 캐시(linesegarray)가 없어야 하고, 스타일은 복제돼야 한다
const para = api.buildHwpxTextParagraph("가나다", { paraPrID: "17", styleID: "3", charPrID: "22" });
assert.ok(!para.includes("linesegarray"), "linesegarray가 남으면 글이 겹친다");
assert.ok(para.includes('paraPrIDRef="17"') && para.includes('charPrIDRef="22"') && para.includes('styleIDRef="3"'));

// 3. 치환은 hp:t 안에서만. 속성값의 000을 건드리면 표가 틀어진다
const xml = '<hp:tc><hp:sz width="10000" height="3000"/><hp:t>000</hp:t></hp:tc>';
const replaced = api.replaceHwpxPlainText(xml, /000|박수빈/g, "홍민서");
assert.ok(replaced.includes('width="10000"') && replaced.includes('height="3000"'), "표 크기 속성은 그대로여야 함");
assert.ok(replaced.includes("<hp:t>홍민서</hp:t>"));

// 4. 종합평가 문단 교체: 줄마다 문단 1개, 겹치는 캐시 없음, 셀은 세로 가운데
const tpl =
  '<hp:subList vertAlign="TOP">' +
  '<hp:p id="0" paraPrIDRef="17" styleIDRef="3" pageBreak="0"><hp:run charPrIDRef="22"><hp:t>2. 종합평가</hp:t></hp:run><hp:linesegarray><hp:lineseg vertpos="0"/></hp:linesegarray></hp:p>' +
  '<hp:p id="0" paraPrIDRef="17" styleIDRef="3" pageBreak="0"><hp:run charPrIDRef="22"><hp:t>기존내용</hp:t></hp:run><hp:linesegarray><hp:lineseg vertpos="1100"/></hp:linesegarray></hp:p>' +
  "</hp:subList>" +
  '<hp:p id="0" paraPrIDRef="17" styleIDRef="3" pageBreak="0"><hp:run charPrIDRef="22"><hp:t>3. 최종평가</hp:t></hp:run></hp:p>';
const out = api.replaceProbationEvaluationParagraph(tpl, "첫째 줄\n둘째 줄");
assert.ok(!out.includes("기존내용"), "기존 평가내용은 교체돼야 함");
assert.ok(out.includes("<hp:t>첫째 줄</hp:t>") && out.includes("<hp:t>둘째 줄</hp:t>"));
assert.equal((out.match(/vertpos="0"/g) || []).length, 1, "생성 문단이 같은 vertpos를 공유하면 글이 겹친다");
assert.ok(out.includes('<hp:subList vertAlign="CENTER"'), "평가내용 셀은 세로 가운데 정렬");
assert.ok(out.includes("3. 최종평가"), "최종평가 이후 표는 보존돼야 함");

console.log("수습평가표 자체 검증 통과");
