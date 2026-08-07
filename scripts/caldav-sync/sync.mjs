// 시놀로지 캘린더(CalDAV)에서 임원 캘린더 일정을 읽어와 날짜 단위 "바쁨" 정보만 추출한다.
// 개인정보 보호: 이 저장소는 public이라 일정 제목/내용은 절대 저장하지 않고, 어느 날짜에 누가 바쁜지만 기록한다.
import { createDAVClient } from "tsdav";
import ical from "node-ical";
import { writeFile } from "node:fs/promises";

const CALDAV_SERVER_URL = "https://gurocil.kr/caldav/";
// ponytail: 이름 하드코딩. 임원 캘린더 구성 바뀌면 여기만 수정.
const EXEC_CALENDAR_NAMES = ["김은서", "gun's Calendar", "이세은", "이은희"];
const DAYS_BEHIND = 3;
const DAYS_AHEAD = 120;
const OUTPUT_PATH = new URL(
  "../../outputs/recruitment_calendar_app/exec-busy.json",
  import.meta.url,
);

function toDateKey(date) {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(date);
}

function addBusyRange(busyDates, person, start, end) {
  const cursor = new Date(start);
  cursor.setHours(0, 0, 0, 0);
  const stop = new Date(end);
  while (cursor < stop) {
    const key = toDateKey(cursor);
    if (!busyDates[key]) busyDates[key] = [];
    if (!busyDates[key].includes(person)) busyDates[key].push(person);
    cursor.setDate(cursor.getDate() + 1);
  }
}

function collectBusyFromIcs(icsText, person, windowStart, windowEnd, busyDates) {
  const parsed = ical.parseICS(icsText);
  for (const entry of Object.values(parsed)) {
    if (entry.type !== "VEVENT") continue;
    if (entry.status === "CANCELLED") continue;

    if (entry.rrule) {
      const occurrences = entry.rrule.between(windowStart, windowEnd, true);
      const durationMs = entry.end && entry.start ? entry.end.getTime() - entry.start.getTime() : 0;
      const exceptionDates = new Set((entry.exdate ? Object.keys(entry.exdate) : []));
      for (const occurrenceStart of occurrences) {
        if (exceptionDates.has(occurrenceStart.toISOString().slice(0, 10))) continue;
        const occurrenceEnd = new Date(occurrenceStart.getTime() + durationMs);
        addBusyRange(busyDates, person, occurrenceStart, occurrenceEnd || occurrenceStart);
      }
      continue;
    }

    if (!entry.start) continue;
    if (entry.end && entry.end < windowStart) continue;
    if (entry.start > windowEnd) continue;
    addBusyRange(busyDates, person, entry.start, entry.end || entry.start);
  }
}

async function main() {
  const username = process.env.GURO_CALDAV_USER;
  const password = process.env.GURO_CALDAV_PASSWORD;
  if (!username || !password) {
    throw new Error("GURO_CALDAV_USER / GURO_CALDAV_PASSWORD 환경변수가 필요합니다.");
  }

  const client = await createDAVClient({
    serverUrl: CALDAV_SERVER_URL,
    credentials: { username, password },
    authMethod: "Basic",
    defaultAccountType: "caldav",
  });

  const calendars = await client.fetchCalendars();
  const targetCalendars = calendars.filter((cal) => EXEC_CALENDAR_NAMES.includes(cal.displayName));

  const missing = EXEC_CALENDAR_NAMES.filter(
    (name) => !targetCalendars.some((cal) => cal.displayName === name),
  );
  if (missing.length) {
    console.warn(`경고: CalDAV에서 못 찾은 캘린더 - ${missing.join(", ")}`);
  }

  const now = new Date();
  const windowStart = new Date(now);
  windowStart.setDate(windowStart.getDate() - DAYS_BEHIND);
  windowStart.setHours(0, 0, 0, 0);
  const windowEnd = new Date(now);
  windowEnd.setDate(windowEnd.getDate() + DAYS_AHEAD);
  windowEnd.setHours(23, 59, 59, 999);

  const busyDates = {};

  for (const calendar of targetCalendars) {
    const objects = await client.fetchCalendarObjects({
      calendar,
      timeRange: { start: windowStart.toISOString(), end: windowEnd.toISOString() },
    });
    for (const obj of objects) {
      if (!obj.data) continue;
      collectBusyFromIcs(obj.data, calendar.displayName, windowStart, windowEnd, busyDates);
    }
  }

  const output = {
    generatedAt: now.toISOString(),
    people: EXEC_CALENDAR_NAMES,
    busyDates,
  };

  await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf-8");
  console.log(`exec-busy.json 갱신 완료. 바쁜 날짜 ${Object.keys(busyDates).length}건.`);
}

main().catch((error) => {
  console.error("CalDAV 동기화 실패:", error);
  process.exit(1);
});
