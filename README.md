# 채용 달력 관리 웹앱

구로장애인자립생활센터 채용 일정 관리용 정적 웹앱입니다. 프레임워크 없이 순수 HTML/CSS/JS로 만들어졌고, GitHub Pages로 배포됩니다.

## 배포 주소

```text
https://kittycong.github.io/guro_recruitment-calendar-app/
```

`main` 브랜치에 push되면 `.github/workflows/pages.yml`이 `outputs/recruitment_calendar_app` 디렉터리를 그대로 배포합니다.

## 로컬 실행

```powershell
cd outputs\recruitment_calendar_app
python -m http.server 4173 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:4173/`으로 접속합니다.

## 주요 기능

사이트 안에서도 **설명서** 탭에서 같은 내용을 확인할 수 있습니다.

- **채용 공고 등록** — 공고일 입력 시 서류마감·서류심사·2차 면접(예정)일 자동 계산(평일 기준, 공휴일 자동 보정). 채용부서 2개 이상 동시 등록 지원 (HWPX 공고문 생성 시 표로 자동 분리). 면접 예정일 자동계산은 임원 캘린더와 겹치는 날짜를 자동으로 피함.
- **달력** — 전체 일정 표시, 공휴일 연동, 날짜 클릭으로 바로 일정 추가.
- **면접관리** — 확정/예정 면접 목록 관리.
- **채용목록** — 전체 공고 검색/필터.
- **채용자 목록** — 최종 합격자 관리, 전력조회 발신공문 생성.
- **수습관리** — 수습기간 평가 일정 관리.
- **문서 생성** — 한글(HWPX) 공문서 자동 생성: 채용 공고문, 공고문 재발급, 인사위원회 소집공문, 전력조회 발신/회신공문, 인사회의록(공고 최대 2건 통합). 모든 양식이 기본 내장되어 있어 업로드 없이 바로 생성 가능.
- **칸반 / 타임라인** — 채용 진행 상태를 카드/시간축으로 시각화.
- **디자인 설정** — 주 색상 하나만 고르면 톤이 자동 계산되어 전체 UI에 실시간 반영.

## 임원 캘린더 연동 (CalDAV)

시놀로지 캘린더(`https://gurocil.kr/caldav/`)에 있는 임원 캘린더 일정을 매시간 자동으로 가져와 `outputs/recruitment_calendar_app/exec-busy.json`에 날짜 단위 "바쁨" 정보로 반영합니다. 면접 일정 자동계산이 이 정보를 참고해서 겹치는 날짜를 피합니다.

- 동기화 스크립트: `scripts/caldav-sync/sync.mjs` (Node, `tsdav` + `node-ical` 사용)
- 실행 워크플로우: `.github/workflows/sync-caldav.yml` (매시간 스케줄 + 수동 실행 가능)
- 인증정보는 GitHub Secrets(`GURO_CALDAV_USER`, `GURO_CALDAV_PASSWORD`)로 관리하며 값은 저장소 어디에도 평문으로 남지 않습니다.
- **개인정보 보호**: 일정 제목/내용은 저장하지 않고, 어느 날짜에 누가 바쁜지만 기록합니다 (이 저장소가 public이기 때문).
- 문제가 생기면 워크플로우를 수동 실행(`workflow_dispatch`)할 때 `debug` 옵션을 켜면 상세 로그(`tsdav:*`)가 출력됩니다.

## 디렉터리 구조

```text
outputs/recruitment_calendar_app/   실제 배포되는 웹앱 (index.html, app.js, styles.css, templates/, exec-busy.json)
scripts/caldav-sync/                임원 캘린더 동기화 스크립트
.github/workflows/pages.yml         GitHub Pages 배포
.github/workflows/sync-caldav.yml   임원 캘린더 동기화(매시간)
```
