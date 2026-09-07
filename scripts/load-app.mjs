// app.js를 브라우저 없이 평가해 내부 함수를 꺼내 온다. 진입부(bindEvents/render)만 무력화한다.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

function stubEl() {
  return new Proxy(
    {
      value: "",
      textContent: "",
      innerHTML: "",
      files: [],
      checked: false,
      dataset: {},
      classList: new Proxy({}, { get: () => () => {} }),
      style: new Proxy({}, { get: () => () => {} }),
    },
    {
      get: (target, key) => (key in target ? target[key] : () => stubEl()),
      set: (target, key, value) => ((target[key] = value), true),
    },
  );
}

export function loadApp(returnExpression) {
  const src = readFileSync(new URL("../outputs/recruitment_calendar_app/app.js", import.meta.url), "utf8").replace(/\r\n/g, "\n");
  const initBlock = src.match(/\nbindEvents\(\);[\s\S]*?loadExecBusyDates\(\);\n/);
  assert.ok(initBlock, "진입부를 못 찾음");
  const body = src.replace(initBlock[0], "\n");
  const documentStub = {
    querySelector: () => stubEl(),
    getElementById: () => stubEl(),
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: () => stubEl(),
    body: stubEl(),
    documentElement: stubEl(),
  };
  return new Function(
    "document",
    "localStorage",
    "window",
    "JSZip",
    "crypto",
    "navigator",
    `${body}\nreturn ${returnExpression};`,
  )(
    documentStub,
    { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    { addEventListener: () => {}, location: { search: "" } },
    require("../outputs/recruitment_calendar_app/jszip.min.js"),
    { randomUUID: () => "test" },
    { userAgent: "node" },
  );
}
