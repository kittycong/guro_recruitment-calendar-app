const STORAGE_KEY = "recruitment-calendar-recruitments-v2";
const PROBATION_STORAGE_KEY = "recruitment-calendar-probations-v1";
const HIRED_STORAGE_KEY = "recruitment-calendar-hired-details-v1";
const GOOGLE_CALENDAR_ID_STORAGE_KEY = "recruitment-google-calendar-id";
const GOOGLE_CALENDAR_CLIENT_ID = "899496040839-rmms2huumqecaqqpmnvuek7ul7vv1ha7.apps.googleusercontent.com";
const GOOGLE_CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.events";
const MINUTES_BODY_PARA_PR_ID = "8";
const MINUTES_BODY_CHAR_PR_ID = "4";
let minutesBodyStyle = {
  paraPrID: MINUTES_BODY_PARA_PR_ID,
  charPrID: MINUTES_BODY_CHAR_PR_ID,
};
const DEPARTMENTS = ["사무행정팀", "활동지원팀", "복지사업팀", "복지사업팀(주택)"];
const INTERVIEWEE_STATUSES = ["서류접수", "서류심사", "면접대기", "면접완료", "적격심사", "채용", "불합격"];
const EMPLOYMENT_TYPES = ["정규직", "계약직", "기간제", "기타"];
const CHECKLIST_ITEMS = ["공고 작성", "공고 게시", "홈페이지 등록", "서류심사", "면접 배정", "적격심사", "채용 통보"];
const PUBLIC_HOLIDAYS = {
  "2026-01-01": "신정",
  "2026-02-16": "설날 연휴",
  "2026-02-17": "설날",
  "2026-02-18": "설날 연휴",
  "2026-03-02": "삼일절 대체공휴일",
  "2026-05-05": "어린이날",
  "2026-05-25": "부처님오신날 대체공휴일",
  "2026-06-03": "전국동시지방선거일",
  "2026-06-06": "현충일",
  "2026-08-17": "광복절 대체공휴일",
  "2026-09-24": "추석 연휴",
  "2026-09-25": "추석",
  "2026-09-26": "추석 연휴",
  "2026-10-05": "개천절 대체공휴일",
  "2026-10-09": "한글날",
  "2026-12-25": "성탄절",
};
const REGISTERED_RECRUITMENTS = [
  {
    id: "site-gr2026-a-036",
    name: "복지사업팀 장애인자립생활주택 업무 담당 채용",
    department: "복지사업팀(주택)",
    hireCount: 1,
    source: "센터 홈페이지",
    noticeType: "normal",
    noticeDate: "2026-05-04",
    executionNo: "GR2026-A-036",
    confirmedInterviewDate: "2026-05-22",
    workStartDate: "2026-06-01",
    hireDate: "2026-05-26",
    probationMonths: 3,
    status: "채용",
    memo: "홈페이지 게시글 기준 등록: 1차 서류합격자 및 면접 일정 2026. 5. 22. 10:00, 최종합격자 홍*서(4285)",
    interviewees: [
      { id: "site-gr2026-a-036-1", name: "이*민", phone: "2023", status: "불합격" },
      { id: "site-gr2026-a-036-2", name: "홍*서", phone: "4285", status: "채용" },
    ],
    recruitmentFields: [
      {
        id: "field-gr2026-a-036-1",
        preset: "housing",
        department: "복지사업팀(주택)",
        fieldName: "복지사업팀 사회복지사",
        count: 1,
        duty: "장애인자립생활주택 업무 담당",
        workStartDate: "2026-06-01",
      },
    ],
  },
  {
    id: "site-gr2026-a-035",
    name: "복지사업팀 장애인복지사업 업무 담당 채용",
    department: "복지사업팀",
    hireCount: 1,
    source: "센터 홈페이지",
    noticeType: "urgent",
    noticeDate: "2026-05-04",
    executionNo: "GR2026-A-035",
    confirmedInterviewDate: "2026-05-18",
    workStartDate: "",
    hireDate: "",
    probationMonths: 3,
    status: "불합격",
    memo: "홈페이지 게시글 기준 등록: 면접일시 2026. 5. 18. 11:00, 최종합격자 없음",
    interviewees: [
      { id: "site-gr2026-a-035-1", name: "연*석", phone: "6741", status: "불합격" },
      { id: "site-gr2026-a-035-2", name: "이*주", phone: "4503", status: "불합격" },
      { id: "site-gr2026-a-035-3", name: "손*희", phone: "4704", status: "불합격" },
      { id: "site-gr2026-a-035-4", name: "최*은", phone: "0494", status: "불합격" },
    ],
    recruitmentFields: [
      {
        id: "field-gr2026-a-035-1",
        preset: "welfare",
        department: "복지사업팀",
        fieldName: "복지사업팀 사회복지사",
        count: 1,
        duty: "장애인복지사업 업무 담당",
        workStartDate: "",
      },
    ],
  },
  {
    id: "final-gr2026-a-042",
    name: "복지사업팀 사회복지사 채용",
    department: "복지사업팀",
    hireCount: 1,
    source: "고용24, 복지넷, 센터 홈페이지, 사람인, 한국사회복지사협회, 한국장애인자립생활센터총연합회",
    noticeType: "urgent",
    noticeDate: "2026-05-19",
    executionNo: "GR2026-A-042",
    confirmedInterviewDate: "2026-05-29",
    workStartDate: "",
    hireDate: "",
    probationMonths: 3,
    status: "진행중",
    memo: "서류합격자 및 면접대상자 등록: 유완정, 김은정. 서류접수 2026. 5. 19. ~ 2026. 5. 27., 서류심사 2026. 5. 28., 면접일 2026. 5. 29.",
    interviewees: [
      { id: "final-gr2026-a-042-1", name: "유완정", phone: "", status: "면접대기" },
      { id: "final-gr2026-a-042-2", name: "김은정", phone: "", status: "면접대기" },
    ],
    recruitmentFields: [
      {
        id: "field-gr2026-a-042-1",
        preset: "welfare",
        department: "복지사업팀",
        fieldName: "복지사업팀 간사",
        count: 1,
        duty: "장애인자립생활지원(복지사업) 사업 업무 담당",
        workStartDate: "",
      },
    ],
  },
  {
    id: "final-gr2026-a-048",
    name: "복지사업팀(주택) 사회복지사 채용",
    department: "복지사업팀(주택)",
    hireCount: 2,
    source: "고용24, 복지넷, 센터 홈페이지, 사람인, 한국사회복지사협회, 한국장애인자립생활센터총연합회",
    noticeType: "normal",
    noticeDate: "2026-05-26",
    executionNo: "GR2026-A-048",
    confirmedInterviewDate: "",
    workStartDate: "",
    hireDate: "",
    probationMonths: 3,
    status: "진행중",
    memo: "최종 공고 등록: 채용인원 2명 중 1명은 6월 중, 1명은 7월 중 근무 개시 예정",
    interviewees: [],
    recruitmentFields: [
      {
        id: "field-gr2026-a-048-1",
        preset: "housing",
        department: "복지사업팀(주택)",
        fieldName: "복지사업팀 간사",
        count: 1,
        duty: "장애인자립생활지원(장애인자립생활주택) 사업 업무 담당",
        workStartDate: "2026-06-01",
      },
      {
        id: "field-gr2026-a-048-2",
        preset: "housing",
        department: "복지사업팀(주택)",
        fieldName: "복지사업팀 간사",
        count: 1,
        duty: "장애인자립생활지원(장애인자립생활주택) 사업 업무 담당",
        workStartDate: "2026-07-01",
      },
    ],
  },
];
const RECRUITMENT_FIELD_PRESETS = {
  admin: {
    label: "사무행정",
    department: "사무행정팀",
    fieldName: "사무행정팀 사무원",
    duty: "사무행정 및 회계, 인사 관련 업무 담당",
  },
  activity: {
    label: "활동지원",
    department: "활동지원팀",
    fieldName: "활동지원팀 활동지원 전담인력",
    duty: "활동지원사업 행정 및 이용자·활동지원사 관리 업무 담당",
  },
  welfare: {
    label: "복지사업/주택",
    department: "복지사업팀",
    fieldName: "복지사업팀 사회복지사",
    duty: "장애인자립생활지원 및 복지사업 업무 담당",
  },
  housing: {
    label: "복지사업팀 주택",
    department: "복지사업팀(주택)",
    fieldName: "복지사업팀(주택) 사회복지사",
    duty: "장애인자립생활주택 업무 담당",
  },
};
const PERSONNEL_MINUTES_CASES = {
  hire_standard: {
    label: "직원채용의 건 - 최종 채용",
    agenda: "신규 직원 채용의 건",
    fileSuffix: "채용",
  },
  no_hire_ineligible: {
    label: "채용자 없음 - 부적합/미채용",
    agenda: "직원채용 부적합 건",
    fileSuffix: "채용자없음",
  },
  all_absent: {
    label: "채용자 없음 - 면접 전원 불참",
    agenda: "직원채용 부적합 건",
    fileSuffix: "전원불참",
  },
  hire_cancelled: {
    label: "채용취소 - 입사 전/당일 취소",
    agenda: "직원채용취소의 건",
    fileSuffix: "채용취소",
  },
  mixed: {
    label: "혼합 - 채용자 있음 + 일부 재공고",
    agenda: "신규 직원 채용의 건",
    fileSuffix: "혼합의결",
  },
};
const eventLabels = {
  notice: "공고",
  document: "접수",
  deadline: "서류마감",
  screening: "서류심사",
  interview: "면접",
  workStart: "채용시작",
  eligibility: "적격여부",
  hire: "채용",
  probation: "수습종료",
  probationStart: "입사일",
  probationReview: "수습평가작성",
  probationEnd: "수습종료",
};

const state = {
  currentMonth: startOfMonth(new Date()),
  selectedDate: toDateKey(new Date()),
  candidates: loadCandidates(),
  probations: loadProbations(),
  hiredDetails: loadHiredDetails(),
  filters: new Set(["notice", "deadline", "screening", "interview", "workStart", "hire", "probationStart", "probationReview", "probationEnd"]),
  search: "",
  employmentTypeFilter: localStorage.getItem("recruitment-employment-type-filter") || "all",
  calendarSize: ["compact", "normal"].includes(localStorage.getItem("recruitment-calendar-size")) ? localStorage.getItem("recruitment-calendar-size") : "normal",
  activeView: localStorage.getItem("recruitment-active-view") || "calendar",
  rightTab: "day",
};
const googleCalendarState = {
  tokenClient: null,
  accessToken: "",
  expiresAt: 0,
  pendingResolve: null,
  pendingReject: null,
};

const els = {
  form: document.querySelector("#candidateForm"),
  candidateId: document.querySelector("#candidateId"),
  name: document.querySelector("#nameInput"),
  department: document.querySelector("#departmentInput"),
  hireCount: document.querySelector("#hireCountInput"),
  source: document.querySelector("#sourceInput"),
  noticeType: document.querySelector("#noticeTypeInput"),
  noticeDate: document.querySelector("#noticeDateInput"),
  employmentType: document.querySelector("#employmentTypeInput"),
  executionNo: document.querySelector("#executionNoInput"),
  noticeRecruitment: document.querySelector("#noticeRecruitmentInput"),
  noticeTemplate: document.querySelector("#noticeTemplateInput"),
  confirmedInterviewDate: document.querySelector("#confirmedInterviewDateInput"),
  workStartDate: document.querySelector("#workStartDateInput"),
  hireDate: document.querySelector("#hireDateInput"),
  probationMonths: document.querySelector("#probationMonthsInput"),
  status: document.querySelector("#statusInput"),
  memo: document.querySelector("#memoInput"),
  interviewees: document.querySelector("#intervieweesInput"),
  intervieweeRows: document.querySelector("#intervieweeRows"),
  addIntervieweeButton: document.querySelector("#addIntervieweeButton"),
  recruitmentFieldRows: document.querySelector("#recruitmentFieldRows"),
  addRecruitmentFieldButton: document.querySelector("#addRecruitmentFieldButton"),
  schedulePreview: document.querySelector("#schedulePreview"),
  deleteButton: document.querySelector("#deleteButton"),
  resetFormButton: document.querySelector("#resetFormButton"),
  prevMonthButton: document.querySelector("#prevMonthButton"),
  nextMonthButton: document.querySelector("#nextMonthButton"),
  todayButton: document.querySelector("#todayButton"),
  exportButton: document.querySelector("#exportButton"),
  googleCalendarConnectButton: document.querySelector("#googleCalendarConnectButton"),
  googleCalendarId: document.querySelector("#googleCalendarIdInput"),
  googleCalendarStatus: document.querySelector("#googleCalendarStatus"),
  employmentTypeFilter: document.querySelector("#employmentTypeFilterInput"),
  downloadHwpxButton: document.querySelector("#downloadHwpxButton"),
  downloadTxtButton: document.querySelector("#downloadTxtButton"),
  reissueSource: document.querySelector("#reissueSourceInput"),
  reissueNoticeType: document.querySelector("#reissueNoticeTypeInput"),
  reissueNoticeDate: document.querySelector("#reissueNoticeDateInput"),
  reissueExecutionNo: document.querySelector("#reissueExecutionNoInput"),
  createReissueButton: document.querySelector("#createReissueButton"),
  minutesDate: document.querySelector("#minutesDateInput"),
  minutesRecruitment: document.querySelector("#minutesRecruitmentInput"),
  minutesHireStart: document.querySelector("#minutesHireStartInput"),
  minutesHiredName: document.querySelector("#minutesHiredNameInput"),
  minutesCase: document.querySelector("#minutesCaseInput"),
  minutesResult: document.querySelector("#minutesResultInput"),
  minutesTemplateFile: document.querySelector("#minutesTemplateFileInput"),
  evaluationFiles: document.querySelector("#evaluationFilesInput"),
  downloadMinutesButton: document.querySelector("#downloadMinutesButton"),
  minutesDownloadStatus: document.querySelector("#minutesDownloadStatus"),
  minutesTime: document.querySelector("#minutesTimeInput"),
  probationRows: document.querySelector("#probationRows"),
  addProbationButton: document.querySelector("#addProbationButton"),
  probationId: document.querySelector("#probationIdInput"),
  probationName: document.querySelector("#probationNameInput"),
  probationDepartment: document.querySelector("#probationDepartmentInput"),
  probationDuty: document.querySelector("#probationDutyInput"),
  probationPosition: document.querySelector("#probationPositionInput"),
  probationHireDate: document.querySelector("#probationHireDateInput"),
  probationResult: document.querySelector("#probationResultInput"),
  probationScores: document.querySelector("#probationScoresInput"),
  probationTotalScore: document.querySelector("#probationTotalScoreInput"),
  probationNote: document.querySelector("#probationNoteInput"),
  probationEvaluationText: document.querySelector("#probationEvaluationTextInput"),
  probationTemplateFile: document.querySelector("#probationTemplateFileInput"),
  probationWrittenDate: document.querySelector("#probationWrittenDateInput"),
  saveProbationButton: document.querySelector("#saveProbationButton"),
  downloadProbationHwpxButton: document.querySelector("#downloadProbationHwpxButton"),
  probationStatus: document.querySelector("#probationStatus"),
  hiredPeopleList: document.querySelector("#hiredPeopleList"),
  careerInquiryKey: document.querySelector("#careerInquiryKeyInput"),
  careerName: document.querySelector("#careerNameInput"),
  careerBirth: document.querySelector("#careerBirthInput"),
  careerDepartment: document.querySelector("#careerDepartmentInput"),
  careerPosition: document.querySelector("#careerPositionInput"),
  careerOrg: document.querySelector("#careerOrgInput"),
  careerRecipient: document.querySelector("#careerRecipientInput"),
  careerExecutionNo: document.querySelector("#careerExecutionNoInput"),
  careerRequestDate: document.querySelector("#careerRequestDateInput"),
  careerMemo: document.querySelector("#careerMemoInput"),
  careerTemplateFile: document.querySelector("#careerTemplateFileInput"),
  saveCareerInquiryButton: document.querySelector("#saveCareerInquiryButton"),
  downloadCareerInquiryButton: document.querySelector("#downloadCareerInquiryButton"),
  careerInquiryStatus: document.querySelector("#careerInquiryStatus"),
  searchInput: document.querySelector("#searchInput"),
  monthTitle: document.querySelector("#monthTitle"),
  selectedDateTitle: document.querySelector("#selectedDateTitle"),
  calendarGrid: document.querySelector("#calendarGrid"),
  selectedEvents: document.querySelector("#selectedEvents"),
  addSelectedInterviewButton: document.querySelector("#addSelectedInterviewButton"),
  addSelectedDeadlineButton: document.querySelector("#addSelectedDeadlineButton"),
  candidateList: document.querySelector("#candidateList"),
  fullCandidateList: document.querySelector("#fullCandidateList"),
  addListRecruitmentButton: document.querySelector("#addListRecruitmentButton"),
  addInterviewScheduleButton: document.querySelector("#addInterviewScheduleButton"),
  confirmedInterviewList: document.querySelector("#confirmedInterviewList"),
  plannedInterviewList: document.querySelector("#plannedInterviewList"),
  confirmedInterviewCount: document.querySelector("#confirmedInterviewCount"),
  plannedInterviewCount: document.querySelector("#plannedInterviewCount"),
  searchResults: document.querySelector("#searchResults"),
  calendarPanel: document.querySelector(".calendar-panel"),
  deadlineBanner: document.querySelector("#deadlineBanner"),
  todayTaskList: document.querySelector("#todayTaskList"),
  todayTaskCount: document.querySelector("#todayTaskCount"),
  viewTabs: document.querySelectorAll(".view-tab"),
  viewPanels: document.querySelectorAll(".view-panel"),
  sideTabs: document.querySelectorAll(".side-tab"),
  sidePanes: document.querySelectorAll(".side-pane"),
  kanbanBoard: document.querySelector("#kanbanBoard"),
  timelineBoard: document.querySelector("#timelineBoard"),
  totalCount: document.querySelector("#totalCount"),
  activeCount: document.querySelector("#activeCount"),
  hiredCount: document.querySelector("#hiredCount"),
  probationCount: document.querySelector("#probationCount"),
  soonCount: document.querySelector("#soonCount"),
};

bindEvents();
renderIntervieweeRows([]);
renderRecruitmentFieldRows([]);
render();
updateGoogleCalendarStatus("Google 미연결");

function bindEvents() {
  els.googleCalendarId.value = localStorage.getItem(GOOGLE_CALENDAR_ID_STORAGE_KEY) || "primary";
  els.googleCalendarId.addEventListener("change", () => {
    const value = normalizeGoogleCalendarId(els.googleCalendarId.value);
    els.googleCalendarId.value = value;
    localStorage.setItem(GOOGLE_CALENDAR_ID_STORAGE_KEY, value);
    updateGoogleCalendarStatus(value === "primary" ? "Google 기본 캘린더" : "Google 공유 캘린더");
  });
  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCandidateFromForm();
  });

  els.deleteButton.addEventListener("click", () => {
    const id = els.candidateId.value;
    if (!id) return;
    state.candidates = state.candidates.filter((candidate) => candidate.id !== id);
    persist();
    resetForm();
    render();
  });

  els.resetFormButton.addEventListener("click", resetForm);

  els.prevMonthButton.addEventListener("click", () => {
    state.currentMonth = addMonths(state.currentMonth, -1);
    render();
  });

  els.nextMonthButton.addEventListener("click", () => {
    state.currentMonth = addMonths(state.currentMonth, 1);
    render();
  });

  els.todayButton.addEventListener("click", () => {
    const today = new Date();
    state.currentMonth = startOfMonth(today);
    state.selectedDate = toDateKey(today);
    render();
  });

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    if (state.search) state.rightTab = "search";
    render();
  });
  els.employmentTypeFilter.value = state.employmentTypeFilter;
  els.employmentTypeFilter.addEventListener("change", (event) => {
    state.employmentTypeFilter = event.target.value || "all";
    localStorage.setItem("recruitment-employment-type-filter", state.employmentTypeFilter);
    render();
  });

  els.exportButton.addEventListener("click", exportCsv);
  els.googleCalendarConnectButton.addEventListener("click", async () => {
    try {
      await authorizeGoogleCalendar({ prompt: "consent" });
      updateGoogleCalendarStatus("Google 연결됨");
    } catch (error) {
      console.error("Google Calendar authorization failed", error);
      updateGoogleCalendarStatus("Google 연결 실패");
      alert("Google Calendar 권한 승인에 실패했습니다. OAuth 설정과 테스트 사용자 등록을 확인해 주세요.");
    }
  });
  els.downloadHwpxButton.addEventListener("click", downloadHwpxNotice);
  els.downloadTxtButton.addEventListener("click", downloadTxtNotice);
  els.noticeRecruitment.addEventListener("change", () => {
    const candidate = state.candidates.find((item) => item.id === els.noticeRecruitment.value);
    if (candidate) fillForm(candidate);
  });
  els.createReissueButton.addEventListener("click", createReissueRecruitment);
  els.downloadMinutesButton.addEventListener("click", downloadPersonnelMinutes);
  els.addProbationButton?.addEventListener("click", resetProbationForm);
  els.saveProbationButton?.addEventListener("click", saveProbationFromForm);
  els.downloadProbationHwpxButton?.addEventListener("click", downloadProbationHwpx);
  els.saveCareerInquiryButton?.addEventListener("click", saveCareerInquiryDetails);
  els.downloadCareerInquiryButton?.addEventListener("click", downloadCareerInquiryDocument);
  els.careerExecutionNo?.addEventListener("input", () => {
    els.careerExecutionNo.value = els.careerExecutionNo.value.replace(/\D/g, "").slice(0, 3);
  });
  [els.probationHireDate, els.probationScores, els.probationTotalScore, els.probationResult].forEach((input) => {
    input?.addEventListener("input", updateProbationComputedFields);
    input?.addEventListener("change", updateProbationComputedFields);
  });
  els.minutesRecruitment.addEventListener("change", () => {
    const candidate = state.candidates.find((item) => item.id === els.minutesRecruitment.value);
    if (candidate) fillMinutesDefaults(candidate);
  });
  els.minutesCase.addEventListener("change", () => {
    if (["no_hire_ineligible", "all_absent", "hire_cancelled"].includes(els.minutesCase.value)) {
      els.minutesResult.value = "no_hire";
    }
    if (["hire_standard", "mixed"].includes(els.minutesCase.value) && els.minutesHiredName.value.trim()) {
      els.minutesResult.value = "hire";
    }
  });
  els.addSelectedInterviewButton.addEventListener("click", addInterviewForSelectedDate);
  els.addSelectedDeadlineButton.addEventListener("click", addDeadlineForSelectedDate);
  els.addListRecruitmentButton.addEventListener("click", addRecruitmentFromList);
  els.addInterviewScheduleButton.addEventListener("click", addInterviewFromManagement);
  els.addIntervieweeButton.addEventListener("click", () => addIntervieweeRow());
  els.addRecruitmentFieldButton.addEventListener("click", () => addRecruitmentFieldRow());
  els.intervieweeRows.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-interviewee]");
    if (!removeButton) return;
    removeButton.closest(".interviewee-row")?.remove();
    syncIntervieweeTextarea();
  });
  els.intervieweeRows.addEventListener("input", syncIntervieweeTextarea);
  els.intervieweeRows.addEventListener("change", syncIntervieweeTextarea);
  els.recruitmentFieldRows.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-field]");
    if (!removeButton) return;
    removeButton.closest(".recruitment-field-row")?.remove();
  });
  els.recruitmentFieldRows.addEventListener("change", (event) => {
    const presetSelect = event.target.closest('[data-field-setting="preset"]');
    if (presetSelect) applyRecruitmentPreset(presetSelect.closest(".recruitment-field-row"), presetSelect.value);
  });
  els.executionNo.addEventListener("input", () => {
    els.executionNo.value = els.executionNo.value.replace(/\D/g, "").slice(0, 3);
  });
  els.reissueExecutionNo.addEventListener("input", () => {
    els.reissueExecutionNo.value = els.reissueExecutionNo.value.replace(/\D/g, "").slice(0, 3);
  });
  document.querySelectorAll(".size-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.calendarSize = button.dataset.calendarSize || "normal";
      localStorage.setItem("recruitment-calendar-size", state.calendarSize);
      renderCalendarSize();
    });
  });
  els.viewTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = button.dataset.view || "calendar";
      localStorage.setItem("recruitment-active-view", state.activeView);
      render();
    });
  });
  els.sideTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.rightTab = button.dataset.rightTab || "day";
      renderRightPanelTabs();
    });
  });
  els.kanbanBoard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-person-status]");
    if (!button) return;
    updateIntervieweeStatus(button.dataset.candidateId, button.dataset.personId, button.dataset.personStatus);
  });

  [els.noticeType, els.noticeDate, els.employmentType, els.confirmedInterviewDate, els.hireDate, els.probationMonths].forEach((input) => {
    input.addEventListener("input", renderSchedulePreview);
    input.addEventListener("change", renderSchedulePreview);
  });
}

async function saveCandidateFromForm() {
  const id = els.candidateId.value || crypto.randomUUID();
  const previousCandidate = state.candidates.find((item) => item.id === id);
  const candidate = {
    id,
    name: els.name.value.trim(),
    department: els.department.value.trim(),
    hireCount: Number(els.hireCount.value || 1),
    source: els.source.value,
    noticeType: els.noticeType.value,
    noticeDate: els.noticeDate.value,
    employmentType: els.employmentType.value,
    executionNo: getExecutionNoFromInput(),
    confirmedInterviewDate: els.confirmedInterviewDate.value,
    workStartDate: els.workStartDate.value,
    hireDate: els.hireDate.value,
    probationMonths: Number(els.probationMonths.value || 0),
    status: els.status.value,
    memo: els.memo.value.trim(),
    interviewees: getIntervieweesFromRows(),
    recruitmentFields: getRecruitmentFieldsFromRows(),
    googleCalendarEventId: previousCandidate?.googleCalendarEventId || "",
    googleCalendarHtmlLink: previousCandidate?.googleCalendarHtmlLink || "",
    updatedAt: new Date().toISOString(),
  };

  const existingIndex = state.candidates.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    state.candidates[existingIndex] = candidate;
  } else {
    state.candidates.unshift(candidate);
  }

  persist();
  const shouldOpenGoogleCalendar =
    candidate.confirmedInterviewDate &&
    candidate.confirmedInterviewDate !== previousCandidate?.confirmedInterviewDate;
  resetForm();
  render();
  if (shouldOpenGoogleCalendar) {
    await createGoogleCalendarInterviewEvent(candidate, { allowFallbackLink: true });
  }
}

function createReissueRecruitment() {
  const source = state.candidates.find((candidate) => candidate.id === els.reissueSource.value) || (els.candidateId.value ? state.candidates.find((candidate) => candidate.id === els.candidateId.value) : null);
  if (!source) {
    alert("재공고할 기존 공고를 선택하세요.");
    return;
  }
  const noticeDate = els.reissueNoticeDate.value;
  if (!noticeDate) {
    alert("새 공고/접수일을 입력하세요.");
    return;
  }
  const executionDigitsValue = els.reissueExecutionNo.value.replace(/\D/g, "").slice(0, 3);
  if (!executionDigitsValue) {
    alert("새 시행번호 뒤 3자리를 입력하세요.");
    return;
  }

  const year = parseDate(noticeDate).getFullYear();
  const executionNo = normalizeExecutionNo(`GR${year}-A-${executionDigitsValue}`, year);
  if (state.candidates.some((candidate) => candidate.executionNo === executionNo)) {
    alert(`${executionNo} 시행번호가 이미 등록되어 있습니다. 다른 번호를 입력하세요.`);
    return;
  }
  const sourceSerial = source.executionNo || displayExecutionNo(source);
  const reissue = normalizeCandidates([{
    ...source,
    id: crypto.randomUUID(),
    name: source.name,
    noticeType: els.reissueNoticeType.value || source.noticeType || "urgent",
    noticeDate,
    executionNo,
    confirmedInterviewDate: "",
    hireDate: "",
    status: "진행중",
    memo: `${sourceSerial} 공고 마감 후 적격자 없음으로 재공고 등록. 기존 공고를 기준으로 새 시행번호와 접수일자를 변경함.`,
    interviewees: [],
    recruitmentFields: normalizeRecruitmentFields(source.recruitmentFields, source).map((field) => ({
      ...field,
      id: crypto.randomUUID(),
    })),
    updatedAt: new Date().toISOString(),
  }])[0];

  state.candidates.unshift(reissue);
  persist();
  fillForm(reissue);
  state.activeView = "documents";
  localStorage.setItem("recruitment-active-view", state.activeView);
  render();
  alert(`${executionNo} 재공고 일정이 등록되었습니다. 공고파일 생성에서 바로 다운로드할 수 있습니다.`);
}

function render() {
  renderViewTabs();
  renderDeadlineBanner();
  renderSchedulePreview();
  renderReissueSourceOptions();
  renderNoticeRecruitmentOptions();
  renderMinutesRecruitmentOptions();
  renderSummary();
  renderCalendarSize();
  renderCalendar();
  renderTodayTaskList();
  renderRightPanelTabs();
  renderSelectedDay();
  renderCandidateList();
  renderFullCandidateList();
  renderHiredPeopleList();
  renderInterviewManagement();
  renderProbationList();
  renderSearchResults();
  renderKanban();
  renderTimeline();
}

function renderCalendarSize() {
  els.calendarPanel.classList.toggle("compact", state.calendarSize === "compact");
  document.querySelectorAll(".size-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.calendarSize === state.calendarSize);
  });
}

function renderViewTabs() {
  els.viewTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.activeView);
  });
  els.viewPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${state.activeView}View`);
  });
}

function renderRightPanelTabs() {
  els.sideTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.rightTab === state.rightTab);
  });
  els.sidePanes.forEach((pane) => {
    pane.classList.toggle("active", pane.dataset.rightPane === state.rightTab);
  });
}

function renderDeadlineBanner() {
  const today = stripTime(new Date());
  const notices = getAllEvents()
    .filter((event) => ["deadline", "interview"].includes(event.type))
    .map((event) => ({
      ...event,
      days: daysBetween(today, parseDate(event.date)),
    }))
    .filter((event) => event.days >= 0 && event.days <= 7)
    .sort((a, b) => a.days - b.days || eventOrder(a.type) - eventOrder(b.type))
    .slice(0, 4);

  if (!notices.length) {
    els.deadlineBanner.innerHTML = `<strong>마감 알림</strong><span>7일 안에 예정된 서류마감 또는 면접 일정이 없습니다.</span>`;
    return;
  }

  els.deadlineBanner.innerHTML = `
    <strong>마감 알림</strong>
    <div>
      ${notices
        .map((event) => {
          const dDay = event.days === 0 ? "오늘" : `D-${event.days}`;
          return `<button type="button" data-deadline-date="${event.date}">${escapeHtml(eventLabels[event.type])} ${escapeHtml(event.candidate.department)} · ${escapeHtml(dDay)}</button>`;
        })
        .join("")}
    </div>
  `;
  els.deadlineBanner.querySelectorAll("[data-deadline-date]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDate = button.dataset.deadlineDate;
      state.currentMonth = startOfMonth(parseDate(state.selectedDate));
      state.activeView = "calendar";
      state.rightTab = "day";
      render();
    });
  });
}

function renderSummary() {
  const today = stripTime(new Date());
  els.totalCount.textContent = state.candidates.length;
  els.activeCount.textContent = state.candidates.filter((item) => getInterviewDate(item) && item.status === "진행중").length;
  els.hiredCount.textContent = state.candidates.filter((item) => item.status === "채용").length;
  els.probationCount.textContent = state.candidates.filter((item) => {
    const probationEnd = getProbationEnd(item);
    return item.hireDate && probationEnd && stripTime(parseDate(item.hireDate)) <= today && today <= stripTime(probationEnd);
  }).length;
  els.soonCount.textContent = state.candidates.filter((item) => {
    const probationEnd = getProbationEnd(item);
    if (!probationEnd) return false;
    const days = daysBetween(today, probationEnd);
    return days >= 0 && days <= 14;
  }).length;
}

function renderSchedulePreview() {
  const draft = {
    noticeType: els.noticeType.value,
    noticeDate: els.noticeDate.value,
    executionNo: getExecutionNoFromInput(),
    confirmedInterviewDate: els.confirmedInterviewDate.value,
    workStartDate: els.workStartDate.value,
    hireDate: els.hireDate.value,
    probationMonths: Number(els.probationMonths.value || 0),
  };
  const schedule = buildSchedule(draft);
  if (!schedule) {
    els.schedulePreview.innerHTML = `<dt>대기</dt><dd>공고일을 입력하면 자동 일정이 표시됩니다.</dd>`;
    return;
  }
  const interviewText = draft.confirmedInterviewDate
    ? `확정 ${formatShortDate(parseDate(draft.confirmedInterviewDate))}`
    : `(예정) ${formatShortDate(schedule.plannedInterviewDate)}`;
  const holidayAdjustmentText = schedule.holidayAdjustmentDays
    ? `평일 공휴일 ${schedule.holidayAdjustmentDays}일 반영: ${schedule.holidayAdjustmentDates.map((item) => `${formatShortDate(item.date)} ${item.name}`).join(", ")}`
    : "없음";
  els.schedulePreview.innerHTML = `
    <dt>1차 접수</dt><dd>${formatShortDate(schedule.documentStartDate)} ~ ${formatShortDate(schedule.documentEndDate)}</dd>
    <dt>공휴일 보정</dt><dd>${escapeHtml(holidayAdjustmentText)}</dd>
    <dt>서류심사</dt><dd>${formatShortDate(schedule.screeningDate)}</dd>
    <dt>2차 면접</dt><dd>${interviewText}</dd>
    <dt>적격여부</dt><dd>${formatShortDate(schedule.eligibilityStartDate)} ~ ${formatShortDate(schedule.eligibilityEndDate)}</dd>
    <dt>근무개시</dt><dd>${draft.workStartDate ? formatShortDate(parseDate(draft.workStartDate)) : "추후 협의"}</dd>
  `;
}

function renderReissueSourceOptions() {
  if (!els.reissueSource) return;
  const selectedValue = els.reissueSource.value || els.candidateId.value || "";
  els.reissueSource.innerHTML = [
    `<option value="">기존 공고 선택</option>`,
    ...state.candidates.map((candidate) => `<option value="${escapeHtml(candidate.id)}">${escapeHtml(displayRecruitmentListTitle(candidate))}</option>`),
  ].join("");
  els.reissueSource.value = state.candidates.some((candidate) => candidate.id === selectedValue) ? selectedValue : "";
}

function renderNoticeRecruitmentOptions() {
  if (!els.noticeRecruitment) return;
  const selectedValue = els.noticeRecruitment.value || els.candidateId.value || "";
  els.noticeRecruitment.innerHTML = [
    `<option value="">현재 입력 중인 공고</option>`,
    ...state.candidates.map((candidate) => `<option value="${escapeHtml(candidate.id)}">${escapeHtml(displayRecruitmentListTitle(candidate))}</option>`),
  ].join("");
  els.noticeRecruitment.value = state.candidates.some((candidate) => candidate.id === selectedValue) ? selectedValue : "";
}

function renderMinutesRecruitmentOptions() {
  if (!els.minutesRecruitment) return;
  const selectedValue = els.minutesRecruitment.value || els.candidateId.value || "";
  els.minutesRecruitment.innerHTML = [
    `<option value="">현재 입력 중인 공고</option>`,
    ...state.candidates.map((candidate) => `<option value="${escapeHtml(candidate.id)}">${escapeHtml(displayRecruitmentListTitle(candidate))}</option>`),
  ].join("");
  els.minutesRecruitment.value = state.candidates.some((candidate) => candidate.id === selectedValue) ? selectedValue : "";
}

function renderCalendar() {
  const months = [startOfMonth(state.currentMonth), addMonths(startOfMonth(state.currentMonth), 1)];
  els.monthTitle.textContent = `${formatMonth(months[0])} - ${formatMonth(months[1])}`;
  els.calendarGrid.innerHTML = "";
  els.calendarGrid.classList.add("dual-month-calendar");
  const events = safeGetFilteredEvents();

  months.forEach((month) => {
    els.calendarGrid.append(createMonthCalendar(month, events));
  });
}

function renderTodayTaskList() {
  if (!els.todayTaskList || !els.todayTaskCount) return;
  const todayKey = toDateKey(new Date());
  const todayEvents = safeGetFilteredEvents()
    .filter((event) => event.date === todayKey)
    .sort((a, b) => eventOrder(a.type) - eventOrder(b.type) || displayRecruitmentListTitle(a.candidate).localeCompare(displayRecruitmentListTitle(b.candidate), "ko"));
  els.todayTaskCount.textContent = `${todayEvents.length}건`;
  if (!todayEvents.length) {
    els.todayTaskList.innerHTML = `<div class="empty-state">오늘 처리할 채용 일정이 없습니다.</div>`;
    return;
  }
  els.todayTaskList.innerHTML = todayEvents
    .map(
      (event) => `
        <button type="button" class="today-task-item ${event.type}" data-today-task-date="${escapeHtml(event.date)}">
          <strong>${escapeHtml(eventLabels[event.type] || "일정")}</strong>
          <span>${escapeHtml(displayRecruitmentListTitle(event.candidate))}</span>
        </button>
      `,
    )
    .join("");
  els.todayTaskList.querySelectorAll("[data-today-task-date]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDate = button.dataset.todayTaskDate;
      state.currentMonth = startOfMonth(parseDate(state.selectedDate));
      state.rightTab = "day";
      render();
    });
  });
}

function createMonthCalendar(month, events) {
  const monthBlock = document.createElement("section");
  monthBlock.className = "month-calendar";
  monthBlock.setAttribute("aria-label", `${formatMonth(month)} 채용 일정`);

  const monthHeading = document.createElement("h3");
  monthHeading.className = "month-calendar-title";
  monthHeading.textContent = formatMonth(month);
  monthBlock.append(monthHeading);

  const weekdayRow = document.createElement("div");
  weekdayRow.className = "weekday-row";
  weekdayRow.setAttribute("aria-hidden", "true");
  weekdayRow.innerHTML = "<span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span>";
  monthBlock.append(weekdayRow);

  const monthGrid = document.createElement("div");
  monthGrid.className = "month-grid";
  const first = startOfMonth(month);
  const calendarStart = addDays(first, -first.getDay());
  for (let index = 0; index < 42; index += 1) {
    const date = addDays(calendarStart, index);
    const dateKey = toDateKey(date);
    const dayEvents = events.filter((event) => event.date === dateKey);
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "day-cell",
      date.getMonth() !== month.getMonth() ? "other-month" : "",
      dateKey === toDateKey(new Date()) ? "today" : "",
      dateKey === state.selectedDate ? "selected" : "",
    ]
      .filter(Boolean)
      .join(" ");
    button.setAttribute("aria-label", `${formatDateLong(date)} 일정 ${dayEvents.length}건`);
    button.dataset.date = dateKey;
    button.addEventListener("click", () => {
      state.selectedDate = dateKey;
      state.currentMonth = startOfMonth(date);
      render();
    });
    button.addEventListener("dragover", (event) => {
      event.preventDefault();
      button.classList.add("drop-target");
    });
    button.addEventListener("dragleave", () => {
      button.classList.remove("drop-target");
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      button.classList.remove("drop-target");
      moveCalendarEvent(event.dataTransfer.getData("text/plain"), dateKey);
    });

    const number = document.createElement("div");
    number.className = "day-number";
    number.innerHTML = `<span>${date.getDate()}</span>`;
    button.append(number);

    const todayKey = toDateKey(new Date());
    dayEvents.slice(0, 3).forEach((event) => {
      const chip = document.createElement("span");
      chip.className = `event-chip ${event.type} ${event.period || ""} ${event.date < todayKey ? "past-event" : ""} dept-${departmentKey(event.candidate.department)}`.trim();
      chip.draggable = ["interview", "deadline", "workStart"].includes(event.type);
      chip.title = chip.draggable ? "끌어서 다른 날짜로 이동" : calendarEventLabel(event);
      chip.addEventListener("click", (clickEvent) => {
        clickEvent.stopPropagation();
        state.selectedDate = event.date;
        state.currentMonth = startOfMonth(parseDate(event.date));
        state.rightTab = "day";
        render();
      });
      chip.addEventListener("dragstart", (dragEvent) => {
        dragEvent.dataTransfer.setData(
          "text/plain",
          JSON.stringify({ candidateId: event.candidate.id, type: event.type, date: event.date, fieldId: event.field?.id || "" }),
        );
        dragEvent.dataTransfer.effectAllowed = "move";
        chip.classList.add("dragging");
      });
      chip.addEventListener("dragend", () => chip.classList.remove("dragging"));
      chip.textContent = calendarEventLabel(event);
      button.append(chip);
    });

    if (dayEvents.length > 3) {
      const more = document.createElement("span");
      more.className = "more-events";
      more.textContent = `+${dayEvents.length - 3}건`;
      button.append(more);
    }

    monthGrid.append(button);
  }
  monthBlock.append(monthGrid);
  return monthBlock;
}

function renderSelectedDay() {
  const date = parseDate(state.selectedDate);
  els.selectedDateTitle.textContent = formatDateLong(date);
  const events = safeGetFilteredEvents().filter((event) => event.date === state.selectedDate);

  if (events.length === 0) {
    els.selectedEvents.innerHTML = `<div class="empty-state">선택한 날짜에 표시할 일정이 없습니다.</div>`;
    return;
  }

  els.selectedEvents.innerHTML = "";
  events.forEach((event) => {
    const item = document.createElement("article");
    item.className = "notice-detail";
    item.innerHTML = renderNoticeDetail(event);
    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.dataset.action = "copy-event";
    copyButton.textContent = "복사";
    item.querySelector(".event-actions")?.prepend(copyButton);
    item.querySelector('[data-action="copy-event"]')?.addEventListener("click", () => copyEventSummary(event));
    if (event.type === "interview" && event.candidate.confirmedInterviewDate) {
      const icsButton = document.createElement("button");
      icsButton.type = "button";
      icsButton.dataset.action = "download-ics";
      icsButton.textContent = "ICS";
      item.querySelector(".event-actions")?.prepend(icsButton);
      item.querySelector('[data-action="download-ics"]')?.addEventListener("click", () => downloadInterviewIcs(event.candidate));
      const googleLink = document.createElement("a");
      googleLink.href = buildGoogleCalendarInterviewUrl(event.candidate);
      googleLink.target = "_blank";
      googleLink.rel = "noopener noreferrer";
      googleLink.dataset.action = "google-calendar";
      googleLink.textContent = "구글캘린더";
      item.querySelector(".event-actions")?.prepend(googleLink);
    }
    item.querySelector('[data-action="edit-event"]').addEventListener("click", () => fillForm(event.candidate));
    item.querySelector('[data-action="delete-event"]').addEventListener("click", () => deleteSelectedEvent(event));
    els.selectedEvents.append(item);
  });
}

function renderNoticeDetail(event) {
  const candidate = event.candidate;
  const schedule = buildSchedule(candidate);
  const interviewDate = getInterviewDate(candidate);
  const isConfirmed = Boolean(candidate.confirmedInterviewDate);
  if (event.type === "notice") {
    return `
      <div>
        <h3>공고시작 · ${escapeHtml(displayRecruitmentName(candidate))}</h3>
        <div class="notice-meta">
          <span>${escapeHtml(displayExecutionNo(candidate))}</span>
          <span>${escapeHtml(candidate.department || "부서 미입력")}</span>
          <span>${escapeHtml(noticeTypeLabel(candidate))}</span>
          <span>${escapeHtml(inferEmploymentType(candidate))}</span>
          <span>${Number(candidate.hireCount || 1)}명 채용</span>
        </div>
      </div>
      <div class="notice-text">
        <p><strong>공고 시작일:</strong> ${candidate.noticeDate ? escapeHtml(formatShortDate(parseDate(candidate.noticeDate))) : "미입력"}</p>
        <p><strong>접수기간:</strong> ${schedule ? `${escapeHtml(formatShortDate(schedule.documentStartDate))} ~ ${escapeHtml(formatShortDate(schedule.documentEndDate))}` : "미정"}</p>
        <p><strong>서류심사/면접:</strong> ${schedule ? `${escapeHtml(formatShortDate(schedule.screeningDate))} / ${escapeHtml(formatShortDate(schedule.plannedInterviewDate))}` : "미정"}</p>
      </div>
      <div class="event-actions">
        <button type="button" data-action="edit-event">수정</button>
        <button type="button" data-action="delete-event">삭제</button>
      </div>
    `;
  }
  if (event.type === "deadline") {
    return `
      <div>
        <h3>서류마감 · ${escapeHtml(displayRecruitmentName(candidate))}</h3>
        <div class="notice-meta">
          <span>${escapeHtml(displayExecutionNo(candidate))}</span>
          <span>${escapeHtml(candidate.department || "부서 미입력")}</span>
          <span>${escapeHtml(noticeTypeLabel(candidate))}</span>
          <span>${Number(candidate.hireCount || 1)}명 채용</span>
        </div>
      </div>
      <div class="notice-text">
        <p><strong>서류마감일:</strong> ${schedule ? escapeHtml(formatShortDate(schedule.documentEndDate)) : "미정"}</p>
        <p><strong>공고기간:</strong> ${schedule ? `${escapeHtml(formatShortDate(schedule.documentStartDate))} ~ ${escapeHtml(formatShortDate(schedule.documentEndDate))}` : "미정"}</p>
        ${
          schedule?.holidayAdjustmentDays
            ? `<p><strong>공휴일 보정:</strong> ${schedule.holidayAdjustmentDays}일 연장 (${escapeHtml(schedule.holidayAdjustmentDates.map((item) => `${formatShortDate(item.date)} ${item.name}`).join(", "))})</p>`
            : ""
        }
        <p><strong>다음 일정:</strong> ${schedule ? `서류심사 ${escapeHtml(formatShortDate(schedule.screeningDate))}, 면접 예정 ${escapeHtml(formatShortDate(schedule.plannedInterviewDate))}` : "미정"}</p>
      </div>
      <div class="event-actions">
        <button type="button" data-action="edit-event">수정</button>
        <button type="button" data-action="delete-event">삭제</button>
      </div>
    `;
  }
  if (event.type === "screening") {
    return `
      <div>
        <h3>서류심사 · ${escapeHtml(displayRecruitmentName(candidate))}</h3>
        <div class="notice-meta">
          <span>${escapeHtml(displayExecutionNo(candidate))}</span>
          <span>${escapeHtml(candidate.department || "부서 미입력")}</span>
          <span>${escapeHtml(noticeTypeLabel(candidate))}</span>
          <span>${Number(candidate.hireCount || 1)}명 채용</span>
        </div>
      </div>
      <div class="notice-text">
        <p><strong>서류심사일:</strong> ${schedule ? escapeHtml(formatShortDate(schedule.screeningDate)) : "미정"}</p>
        <p><strong>면접 예정일:</strong> ${schedule ? escapeHtml(formatShortDate(schedule.plannedInterviewDate)) : "미정"}</p>
        <p><strong>참고:</strong> 1차 합격자 개별 및 홈페이지 공지 일정입니다.</p>
      </div>
      <div class="event-actions">
        <button type="button" data-action="edit-event">수정</button>
        <button type="button" data-action="delete-event">삭제</button>
      </div>
    `;
  }
  if (event.type === "hire") {
    return `
      <div>
        <h3>발표/채용 · ${escapeHtml(displayRecruitmentName(candidate))}</h3>
        <div class="notice-meta">
          <span>${escapeHtml(displayExecutionNo(candidate))}</span>
          <span>${escapeHtml(candidate.department || "부서 미입력")}</span>
          <span>${escapeHtml(candidate.status || "상태 미입력")}</span>
          <span>${Number(candidate.hireCount || 1)}명 채용</span>
        </div>
      </div>
      <div class="notice-text">
        <p><strong>합격/채용일:</strong> ${escapeHtml(formatShortDate(parseDate(event.date)))}</p>
        <p><strong>최종합격자:</strong> ${escapeHtml(getFinalHires(candidate).join(", ") || "미입력")}</p>
        ${candidate.memo ? `<p><strong>메모:</strong> ${escapeHtml(candidate.memo)}</p>` : ""}
      </div>
      <div class="event-actions">
        <button type="button" data-action="edit-event">수정</button>
        <button type="button" data-action="delete-event">삭제</button>
      </div>
    `;
  }
  if (event.type === "workStart") {
    return `
      <div>
        <h3>채용시작 · ${escapeHtml(displayRecruitmentName(candidate))}</h3>
        <div class="notice-meta">
          <span>${escapeHtml(displayExecutionNo(candidate))}</span>
          <span>${escapeHtml(candidate.department || "부서 미입력")}</span>
          <span>${Number(event.field?.count || candidate.hireCount || 1)}명 시작</span>
          <span>${escapeHtml(event.field?.fieldName || "채용분야")}</span>
        </div>
      </div>
      <div class="notice-text">
        <p><strong>채용시작일:</strong> ${escapeHtml(formatShortDate(parseDate(event.date)))}</p>
        <p><strong>직무내용:</strong> ${escapeHtml(event.field?.duty || candidate.memo || "미입력")}</p>
        <p><strong>부서:</strong> ${escapeHtml(candidate.department || "부서 미입력")}</p>
      </div>
      <div class="event-actions">
        <button type="button" data-action="edit-event">수정</button>
        <button type="button" data-action="delete-event">삭제</button>
      </div>
    `;
  }
  return `
    <div>
      <h3>${escapeHtml(displayRecruitmentName(candidate))}</h3>
      <div class="notice-meta">
        <span>${escapeHtml(displayExecutionNo(candidate))}</span>
        <span>${escapeHtml(candidate.department || "부서 미입력")}</span>
        <span>${escapeHtml(noticeTypeLabel(candidate))}</span>
        <span>${Number(candidate.hireCount || 1)}명 채용</span>
        <span>${escapeHtml(interviewPeriodLabel(event.period))}</span>
        <span>${isConfirmed ? "면접 확정" : "면접 예정"}</span>
      </div>
    </div>
    <div class="notice-text">
      <p><strong>면접일:</strong> ${escapeHtml(interviewDate ? formatShortDate(parseDate(interviewDate)) : "미정")}</p>
      <p><strong>공고일:</strong> ${candidate.noticeDate ? escapeHtml(formatShortDate(parseDate(candidate.noticeDate))) : "미입력"}${schedule ? ` / <strong>자동 예정일:</strong> ${escapeHtml(formatShortDate(schedule.plannedInterviewDate))}` : ""}</p>
      <p><strong>면접 대상자:</strong> 아래 명단의 이름과 연락처를 확인하세요.</p>
      ${candidate.memo ? `<p><strong>메모:</strong> ${escapeHtml(candidate.memo)}</p>` : ""}
    </div>
    ${renderIntervieweesHtml(candidate.interviewees || [])}
    <div class="event-actions">
      <button type="button" data-action="edit-event">수정</button>
      <button type="button" data-action="delete-event">삭제</button>
    </div>
  `;
}

function addInterviewForSelectedDate() {
  resetForm();
  els.confirmedInterviewDate.value = state.selectedDate;
  els.noticeDate.value = toDateKey(addDays(parseDate(state.selectedDate), -8));
  els.name.value = `${els.department.value} 직원 채용`;
  state.rightTab = "day";
  renderSchedulePreview();
  els.name.focus();
}

function addDeadlineForSelectedDate() {
  resetForm();
  els.noticeDate.value = toDateKey(addDays(parseDate(state.selectedDate), els.noticeType.value === "normal" ? -15 : -8));
  els.name.value = `${els.department.value} 직원 채용`;
  state.rightTab = "day";
  renderSchedulePreview();
  els.name.focus();
}

function moveCalendarEvent(payload, targetDate) {
  if (!payload || !targetDate) return;
  let data;
  try {
    data = JSON.parse(payload);
  } catch {
    return;
  }
  const candidate = state.candidates.find((item) => item.id === data.candidateId);
  if (!candidate) return;

  if (data.type === "interview") {
    candidate.confirmedInterviewDate = targetDate;
  } else if (data.type === "deadline") {
    const offset = candidate.noticeType === "normal" ? 15 : 8;
    candidate.noticeDate = toDateKey(addDays(parseDate(targetDate), -offset));
  } else if (data.type === "workStart") {
    if (data.fieldId) {
      candidate.recruitmentFields = normalizeRecruitmentFields(candidate.recruitmentFields, candidate).map((field) =>
        field.id === data.fieldId ? { ...field, workStartDate: targetDate } : field,
      );
    } else {
      candidate.workStartDate = targetDate;
    }
  } else {
    return;
  }
  candidate.updatedAt = new Date().toISOString();
  persist();
  state.selectedDate = targetDate;
  state.currentMonth = startOfMonth(parseDate(targetDate));
  state.rightTab = "day";
  render();
}

function deleteSelectedEvent(event) {
  const candidate = event.candidate;
  const label = `${displayRecruitmentListTitle(candidate)} ${eventLabels[event.type]}`;
  const confirmedInterviewDateMatches = event.type === "interview" && candidate.confirmedInterviewDate === event.date;
  const isWorkStartEvent = event.type === "workStart";
  const message = confirmedInterviewDateMatches
    ? `${label} 일정을 삭제할까요?\n면접 확정일만 비우고 채용건은 유지합니다.`
    : isWorkStartEvent
      ? `${label} 일정을 삭제할까요?\n근무예정일만 비우고 채용건은 유지합니다.`
    : `${label}을 삭제할까요?\n자동 생성 일정이라 채용건 전체가 삭제됩니다.`;
  if (!confirm(message)) return;

  if (confirmedInterviewDateMatches) {
    candidate.confirmedInterviewDate = "";
    candidate.updatedAt = new Date().toISOString();
  } else if (isWorkStartEvent) {
    if (event.field?.id) {
      candidate.recruitmentFields = normalizeRecruitmentFields(candidate.recruitmentFields, candidate).map((field) =>
        field.id === event.field.id ? { ...field, workStartDate: "" } : field,
      );
    } else {
      candidate.workStartDate = "";
    }
    candidate.updatedAt = new Date().toISOString();
  } else {
    state.candidates = state.candidates.filter((item) => item.id !== candidate.id);
    if (els.candidateId.value === candidate.id) resetForm();
  }
  persist();
  render();
}

async function copyEventSummary(event) {
  const text = buildEventCopyText(event);
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
  } catch (error) {
    console.error("복사 실패", error);
    alert("복사에 실패했습니다. 내용을 직접 선택해 복사해 주세요.");
  }
}

function buildEventCopyText(event) {
  const candidate = event.candidate;
  const schedule = buildSchedule(candidate);
  const lines = [
    `[${eventLabels[event.type] || "일정"}] ${displayRecruitmentListTitle(candidate)}`,
    `시행번호: ${displayExecutionNo(candidate)}`,
    `부서: ${candidate.department || "부서 미입력"}`,
    `일자: ${formatShortDate(parseDate(event.date))}`,
  ];
  if (event.type === "deadline" && schedule) {
    lines.push(`접수기간: ${formatShortDate(schedule.documentStartDate)} ~ ${formatShortDate(schedule.documentEndDate)}`);
  }
  if (event.type === "interview") {
    lines.push(`면접구분: ${interviewPeriodLabel(event.period)}`);
    const people = normalizeInterviewees(candidate.interviewees);
    if (people.length) {
      lines.push(`면접대상자: ${people.map((person) => `${person.name}${person.phone ? `(${person.phone})` : ""}`).join(", ")}`);
    }
  }
  if (event.type === "workStart") {
    lines.push(`채용분야: ${event.field?.fieldName || candidate.role || candidate.department || "미입력"}`);
    lines.push(`직무내용: ${event.field?.duty || candidate.memo || "미입력"}`);
  }
  if (candidate.memo) lines.push(`메모: ${candidate.memo}`);
  return lines.join("\n");
}

function openGoogleCalendarForInterview(candidate) {
  const url = buildGoogleCalendarInterviewUrl(candidate);
  if (!url) return;
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) {
    alert("팝업이 차단되어 구글 캘린더 등록창을 열지 못했습니다. 브라우저 팝업 허용 후 다시 시도해 주세요.");
  }
}

async function createGoogleCalendarInterviewEvent(candidate, { allowFallbackLink = false } = {}) {
  if (!candidate.confirmedInterviewDate) return null;
  updateGoogleCalendarStatus("Google 등록 중...");
  try {
    const accessToken = await authorizeGoogleCalendar({ prompt: googleCalendarState.accessToken ? "" : "consent" });
    const calendarId = getGoogleCalendarId();
    const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buildGoogleCalendarEventResource(candidate)),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Google Calendar API error ${response.status}`);
    }
    const createdEvent = await response.json();
    candidate.googleCalendarEventId = createdEvent.id || "";
    candidate.googleCalendarHtmlLink = createdEvent.htmlLink || "";
    const storedCandidate = state.candidates.find((item) => item.id === candidate.id);
    if (storedCandidate) {
      storedCandidate.googleCalendarEventId = candidate.googleCalendarEventId;
      storedCandidate.googleCalendarHtmlLink = candidate.googleCalendarHtmlLink;
      storedCandidate.updatedAt = new Date().toISOString();
      persist();
      render();
    }
    updateGoogleCalendarStatus(`${calendarId === "primary" ? "기본" : "공유"} 캘린더 등록완료`);
    return createdEvent;
  } catch (error) {
    console.error("Google Calendar insert failed", error);
    updateGoogleCalendarStatus("Google 등록 실패");
    if (allowFallbackLink) {
      openGoogleCalendarForInterview(candidate);
    }
    return null;
  }
}

async function authorizeGoogleCalendar({ prompt = "" } = {}) {
  if (googleCalendarState.accessToken && googleCalendarState.expiresAt > Date.now() + 60000) {
    return googleCalendarState.accessToken;
  }
  await waitForGoogleIdentity();
  if (!googleCalendarState.tokenClient) {
    googleCalendarState.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CALENDAR_CLIENT_ID,
      scope: GOOGLE_CALENDAR_SCOPE,
      callback: (tokenResponse) => {
        if (tokenResponse.error) {
          googleCalendarState.pendingReject?.(new Error(tokenResponse.error));
          return;
        }
        googleCalendarState.accessToken = tokenResponse.access_token;
        googleCalendarState.expiresAt = Date.now() + Number(tokenResponse.expires_in || 3600) * 1000;
        googleCalendarState.pendingResolve?.(googleCalendarState.accessToken);
      },
    });
  }
  return new Promise((resolve, reject) => {
    googleCalendarState.pendingResolve = resolve;
    googleCalendarState.pendingReject = reject;
    googleCalendarState.tokenClient.requestAccessToken({ prompt });
  });
}

function waitForGoogleIdentity(timeoutMs = 8000) {
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const timer = setInterval(() => {
      if (window.google?.accounts?.oauth2) {
        clearInterval(timer);
        resolve();
      } else if (Date.now() - started > timeoutMs) {
        clearInterval(timer);
        reject(new Error("Google Identity Services script was not loaded."));
      }
    }, 100);
  });
}

function updateGoogleCalendarStatus(message) {
  if (!els.googleCalendarStatus) return;
  els.googleCalendarStatus.textContent = message;
  els.googleCalendarStatus.dataset.status = message.includes("완료") || message.includes("연결됨") ? "connected" : message.includes("실패") ? "error" : "idle";
}

function getGoogleCalendarId() {
  const value = normalizeGoogleCalendarId(els.googleCalendarId?.value || localStorage.getItem(GOOGLE_CALENDAR_ID_STORAGE_KEY) || "primary");
  localStorage.setItem(GOOGLE_CALENDAR_ID_STORAGE_KEY, value);
  return value;
}

function normalizeGoogleCalendarId(value) {
  const trimmed = String(value || "").trim();
  return trimmed || "primary";
}

function buildGoogleCalendarEventResource(candidate) {
  const eventDate = parseDate(candidate.confirmedInterviewDate);
  const timeRange = buildInterviewTimeRange(candidate, eventDate);
  const resource = {
    summary: `[면접확정] ${displayRecruitmentName(candidate)}`,
    location: "서울 구로구 가마산로27길 14, 신원빌딩 8층",
    description: buildGoogleCalendarDescription(candidate),
  };
  if (timeRange.allDay) {
    resource.start = { date: formatGoogleAllDayDate(timeRange.start) };
    resource.end = { date: formatGoogleAllDayDate(timeRange.end) };
  } else {
    resource.start = { dateTime: formatGoogleApiDateTime(timeRange.start), timeZone: "Asia/Seoul" };
    resource.end = { dateTime: formatGoogleApiDateTime(timeRange.end), timeZone: "Asia/Seoul" };
  }
  return resource;
}

function buildGoogleCalendarDescription(candidate) {
  const people = normalizeInterviewees(candidate.interviewees);
  return [
    `시행번호: ${displayExecutionNo(candidate)}`,
    `부서: ${candidate.department || "부서 미입력"}`,
    `채용인원: ${Number(candidate.hireCount || 1)}명`,
    people.length ? `면접대상자: ${people.map((person) => `${person.name}${person.phone ? `(${person.phone})` : ""}`).join(", ")}` : "면접대상자: 미입력",
    candidate.memo ? `메모: ${candidate.memo}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildGoogleCalendarInterviewUrl(candidate) {
  if (!candidate.confirmedInterviewDate) return "";
  const eventDate = parseDate(candidate.confirmedInterviewDate);
  const title = `[면접확정] ${displayRecruitmentName(candidate)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: buildGoogleCalendarDateRange(candidate, eventDate),
    details: buildGoogleCalendarDescription(candidate),
    location: "서울 구로구 가마산로27길 14, 신원빌딩 8층",
    ctz: "Asia/Seoul",
  });
  return `https://calendar.google.com/calendar/r/eventedit?${params.toString()}`;
}

function buildGoogleCalendarDateRange(candidate, eventDate) {
  const { start, end, allDay } = buildInterviewTimeRange(candidate, eventDate);
  if (allDay) return `${formatGoogleAllDayDate(start)}/${formatGoogleAllDayDate(end)}`;
  return `${formatGoogleDateTime(start)}/${formatGoogleDateTime(end)}`;
}

function buildInterviewTimeRange(candidate, eventDate) {
  const hour = getInterviewHour(candidate);
  if (hour === null) {
    return { start: eventDate, end: addDays(eventDate, 1), allDay: true };
  }
  const source = [candidate.memo, candidate.note].filter(Boolean).join(" ");
  const minuteMatch = source.match(/(?:오전|오후)?\s*\d{1,2}\s*[:시]\s*(\d{1,2})/);
  const minute = minuteMatch ? Number(minuteMatch[1]) : 0;
  const start = new Date(eventDate);
  start.setHours(hour, Number.isFinite(minute) ? minute : 0, 0, 0);
  const end = new Date(start);
  end.setHours(start.getHours() + 1);
  return { start, end, allDay: false };
}

function formatGoogleAllDayDate(date) {
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
}

function formatGoogleDateTime(date) {
  return `${formatGoogleAllDayDate(date)}T${String(date.getHours()).padStart(2, "0")}${String(date.getMinutes()).padStart(2, "0")}${String(date.getSeconds()).padStart(2, "0")}`;
}

function formatGoogleApiDateTime(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

function downloadInterviewIcs(candidate) {
  if (!candidate.confirmedInterviewDate) return;
  const blob = new Blob([buildInterviewIcs(candidate)], { type: "text/calendar;charset=utf-8" });
  downloadBlob(blob, `${safeFileName(displayExecutionNo(candidate))}_${safeFileName(displayRecruitmentName(candidate))}_면접.ics`);
}

function buildInterviewIcs(candidate) {
  const eventDate = parseDate(candidate.confirmedInterviewDate);
  const timeRange = buildInterviewTimeRange(candidate, eventDate);
  const start = timeRange.allDay ? formatGoogleAllDayDate(timeRange.start) : `${formatGoogleDateTime(timeRange.start)}`;
  const end = timeRange.allDay ? formatGoogleAllDayDate(timeRange.end) : `${formatGoogleDateTime(timeRange.end)}`;
  const dateType = timeRange.allDay ? ";VALUE=DATE" : "";
  const uid = `${candidate.id || crypto.randomUUID()}-${candidate.confirmedInterviewDate}@guro-recruitment-calendar`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Guro CIL//Recruitment Calendar//KO",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${escapeIcsText(uid)}`,
    `DTSTAMP:${formatIcsUtcDateTime(new Date())}`,
    `DTSTART${dateType}:${start}`,
    `DTEND${dateType}:${end}`,
    `SUMMARY:${escapeIcsText(`[면접확정] ${displayRecruitmentName(candidate)}`)}`,
    `DESCRIPTION:${escapeIcsText(buildGoogleCalendarDescription(candidate))}`,
    `LOCATION:${escapeIcsText("서울 구로구 가마산로27길 14, 신원빌딩 8층")}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}

function formatIcsUtcDateTime(date) {
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}T${String(date.getUTCHours()).padStart(2, "0")}${String(date.getUTCMinutes()).padStart(2, "0")}${String(date.getUTCSeconds()).padStart(2, "0")}Z`;
}

function escapeIcsText(value) {
  return String(value || "")
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replace(/\r?\n/g, "\\n");
}

function renderCandidateList() {
  const candidates = getVisibleCandidates();
  renderCandidateCollection(els.candidateList, candidates, "조건에 맞는 채용건이 없습니다.");
}

function renderFullCandidateList() {
  const candidates = getVisibleCandidates();
  if (!candidates.length) {
    els.fullCandidateList.innerHTML = `<div class="empty-state">등록된 채용 공고가 없습니다.</div>`;
    return;
  }

  els.fullCandidateList.innerHTML = candidates
    .map((candidate) => {
      const schedule = buildSchedule(candidate);
      const progress = getCandidateProgress(candidate);
      const people = normalizeInterviewees(candidate.interviewees);
      return `
        <article class="full-candidate-row dept-${departmentKey(candidate.department)}" data-candidate-id="${candidate.id}">
          <div class="full-candidate-main">
            <strong>${escapeHtml(displayRecruitmentListTitle(candidate))}</strong>
            <span>${escapeHtml(candidate.department || "부서 미입력")} · ${escapeHtml(noticeTypeLabel(candidate))} · ${escapeHtml(inferEmploymentType(candidate))} · ${Number(candidate.hireCount || 1)}명 채용 · ${escapeHtml(candidate.source || "경로 미입력")}</span>
          </div>
          <div class="full-candidate-dates">
            <span>공고일 ${candidate.noticeDate || "미입력"}</span>
            <span>서류마감 ${schedule ? toDateKey(schedule.documentEndDate) : "미정"}</span>
            <span>면접 ${getInterviewDate(candidate) || "미정"}</span>
            <span>대상자 ${people.length}명</span>
          </div>
          <div class="full-candidate-status">
            <span class="${getStatusClass(candidate.status)}">${escapeHtml(candidate.status || "진행중")}</span>
            <div class="progress-line" aria-label="진행률 ${progress}%"><span style="width: ${progress}%"></span></div>
          </div>
          <div class="full-candidate-actions">
            <button type="button" data-list-action="edit">수정</button>
            <button type="button" data-list-action="calendar">달력보기</button>
            <button type="button" data-list-action="delete" class="danger-action">삭제</button>
          </div>
        </article>
      `;
    })
    .join("");

  els.fullCandidateList.querySelectorAll(".full-candidate-row").forEach((row) => {
    const candidate = state.candidates.find((item) => item.id === row.dataset.candidateId);
    if (!candidate) return;
    row.querySelector('[data-list-action="edit"]').addEventListener("click", () => fillForm(candidate));
    row.querySelector('[data-list-action="calendar"]').addEventListener("click", () => selectBestDate(candidate));
    row.querySelector('[data-list-action="delete"]').addEventListener("click", () => deleteCandidate(candidate));
  });
}

function renderHiredPeopleList() {
  if (!els.hiredPeopleList) return;
  const hires = getHiredPeople();
  if (!hires.length) {
    els.hiredPeopleList.innerHTML = `<div class="empty-state">채용자로 표시된 대상자가 없습니다. 면접대상자 상태를 '채용'으로 변경하면 여기에 표시됩니다.</div>`;
    return;
  }
  els.hiredPeopleList.innerHTML = hires
    .map((hire, index) => {
      const detail = state.hiredDetails[hire.key] || {};
      return `
        <article class="hired-person-card" data-hired-key="${escapeHtml(hire.key)}">
          <div class="hired-person-main">
            <strong>${index + 1}. ${escapeHtml(hire.name)}</strong>
            <span>${escapeHtml(hire.department)} · ${escapeHtml(hire.position)} · ${escapeHtml(hire.recruitmentTitle)}</span>
          </div>
          <div class="hired-person-meta">
            <span>입사일 ${escapeHtml(hire.workStartDate || hire.hireDate || "미입력")}</span>
            <span>생년월일 ${escapeHtml(detail.birth || "미입력")}</span>
            <span>경력기관 ${escapeHtml(detail.org || "미입력")}</span>
            <span>전력조회 ${detail.executionNo ? escapeHtml(detail.executionNo) : "미작성"}</span>
          </div>
          <div class="full-candidate-actions">
            <button type="button" data-hired-action="edit">정보입력</button>
            <button type="button" data-hired-action="document">공문생성</button>
          </div>
        </article>
      `;
    })
    .join("");
  els.hiredPeopleList.querySelectorAll(".hired-person-card").forEach((card) => {
    const hire = hires.find((item) => item.key === card.dataset.hiredKey);
    if (!hire) return;
    card.querySelector('[data-hired-action="edit"]').addEventListener("click", () => fillCareerInquiryForm(hire));
    card.querySelector('[data-hired-action="document"]').addEventListener("click", () => {
      fillCareerInquiryForm(hire);
      els.careerTemplateFile?.focus();
    });
  });
}

function getHiredPeople() {
  return state.candidates.flatMap((candidate) => {
    const fields = normalizeRecruitmentFields(candidate.recruitmentFields, candidate);
    const primaryField = fields[0] || {};
    return normalizeInterviewees(candidate.interviewees)
      .filter((person) => person.status === "채용")
      .map((person) => ({
        key: `${candidate.id}:${person.id || person.name}`,
        candidateId: candidate.id,
        personId: person.id || "",
        name: person.name,
        phone: person.phone || "",
        department: candidate.department || primaryField.department || "",
        duty: primaryField.duty || primaryField.fieldName || candidate.name || "",
        position: inferPositionFromField(primaryField, candidate),
        recruitmentTitle: displayRecruitmentListTitle(candidate),
        hireDate: candidate.hireDate || "",
        workStartDate: primaryField.workStartDate || candidate.workStartDate || candidate.hireDate || "",
        executionNo: candidate.executionNo || "",
      }));
  });
}

function inferPositionFromField(field, candidate) {
  const text = [field?.fieldName, candidate.name, field?.duty].filter(Boolean).join(" ");
  if (/사무국장/.test(text)) return "사무국장";
  if (/팀장/.test(text)) return "팀장";
  return "간사";
}

function fillCareerInquiryForm(hire) {
  const detail = state.hiredDetails[hire.key] || {};
  els.careerInquiryKey.value = hire.key;
  els.careerName.value = detail.name || hire.name || "";
  els.careerBirth.value = detail.birth || "";
  els.careerDepartment.value = detail.department || hire.department || "";
  els.careerPosition.value = detail.position || hire.position || "";
  els.careerOrg.value = detail.org || "";
  els.careerRecipient.value = detail.recipient || detail.org || "";
  els.careerExecutionNo.value = executionDigits(detail.executionNo || hire.executionNo || "");
  els.careerRequestDate.value = detail.requestDate || toDateKey(new Date());
  els.careerMemo.value = detail.memo || "";
  setCareerInquiryStatus(`${hire.name} 채용자 정보를 불러왔습니다.`);
}

function readCareerInquiryForm() {
  const key = els.careerInquiryKey.value || `manual:${els.careerName.value.trim() || crypto.randomUUID()}`;
  const executionNo = els.careerExecutionNo.value ? `GR2026-${executionDigits(els.careerExecutionNo.value)}` : "";
  return {
    key,
    name: els.careerName.value.trim(),
    birth: normalizeBirthText(els.careerBirth.value),
    department: els.careerDepartment.value.trim(),
    position: els.careerPosition.value.trim(),
    org: els.careerOrg.value.trim(),
    recipient: els.careerRecipient.value.trim() || els.careerOrg.value.trim(),
    executionNo,
    requestDate: els.careerRequestDate.value || toDateKey(new Date()),
    memo: els.careerMemo.value.trim(),
  };
}

function saveCareerInquiryDetails() {
  const detail = readCareerInquiryForm();
  if (!detail.name) {
    alert("채용자 성명을 입력하세요.");
    return;
  }
  state.hiredDetails[detail.key] = detail;
  persistHiredDetails();
  renderHiredPeopleList();
  setCareerInquiryStatus(`${detail.name} 채용자 정보를 저장했습니다.`);
}

function normalizeBirthText(value) {
  const raw = String(value || "").trim();
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 6) return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4, 6)}`;
  if (digits.length === 8) return `${digits.slice(2, 4)}.${digits.slice(4, 6)}.${digits.slice(6, 8)}`;
  return raw;
}

function setCareerInquiryStatus(message) {
  if (els.careerInquiryStatus) els.careerInquiryStatus.textContent = message;
}

async function downloadCareerInquiryDocument() {
  try {
    const detail = readCareerInquiryForm();
    if (!detail.name || !detail.birth) {
      alert("채용자 성명과 생년월일을 입력하세요.");
      return;
    }
    const templateFile = els.careerTemplateFile.files?.[0];
    assertHwpxPackageUpload(templateFile, "전력조회 공문 양식");
    if (!window.JSZip) {
      alert("문서 생성 모듈을 불러오지 못했습니다.");
      return;
    }
    state.hiredDetails[detail.key] = detail;
    persistHiredDetails();
    const zip = await JSZip.loadAsync(await templateFile.arrayBuffer());
    const sectionPath = findFirstSectionPath(zip);
    if (!sectionPath) {
      alert("전력조회 공문 양식에서 본문 XML을 찾지 못했습니다.");
      return;
    }
    let sectionXml = await zip.file(sectionPath).async("string");
    sectionXml = applyCareerInquiryTemplate(sectionXml, detail);
    zip.file(sectionPath, sectionXml);
    if (zip.file("Preview/PrvText.txt")) zip.file("Preview/PrvText.txt", buildCareerInquiryPreviewText(detail));
    const ext = /\.hwtx$/i.test(templateFile.name) ? "hwtx" : "hwpx";
    const fileName = `${safeFileName(`${detail.executionNo || "GR2026-000"} 구로장애인자립생활센터 종사자 전력조회 요청(${detail.name})`)}.${ext}`;
    const blob = await zip.generateAsync({ type: "blob", mimeType: "application/hwpml-package" });
    downloadBlob(blob, fileName);
    renderHiredPeopleList();
    setCareerInquiryStatus(`${fileName} 다운로드를 시작했습니다.`);
  } catch (error) {
    console.error("전력조회 공문 생성 오류", error);
    alert(`전력조회 공문 생성 오류: ${error.message || "양식 또는 입력값을 확인하세요."}`);
    setCareerInquiryStatus("전력조회 공문 생성 오류가 발생했습니다.");
  }
}

function assertHwpxPackageUpload(file, label) {
  if (!file) throw new Error(`${label} 파일을 선택하세요.`);
  if (!/\.(hwpx|hwtx)$/i.test(file.name)) {
    throw new Error(`${label}는 HWPX 또는 HWTX 파일만 사용할 수 있습니다. 현재 파일: ${file.name}`);
  }
}

function applyCareerInquiryTemplate(xml, detail) {
  const requestDateText = formatNoticeDate(parseDate(detail.requestDate));
  const executionNo = detail.executionNo || "GR2026-000";
  const recipient = detail.recipient || detail.org || "수신처 미입력";
  let next = xml;
  next = replaceNextTextAfterLabel(next, "수신자", recipient);
  next = replaceHwpxTextNode(next, "구로장애인자립생활센터 종사자 전력조회 요청", "구로장애인자립생활센터 종사자 전력조회 요청");
  next = replaceHwpxTextNode(next, /[가-힣]{2,5}\(\d{2}\.\d{2}\.\d{2}\)/g, `${detail.name}(${detail.birth})`);
  next = replaceHwpxTextNode(next, /구로센터\s*GR\d{4}-\d{3}/g, `구로센터 ${executionNo}`);
  next = replaceHwpxTextNode(next, /GR\d{4}-\d{3}/g, executionNo);
  next = replaceHwpxTextNode(next, /\d{4}\.\s*\d{1,2}\.\s*\d{1,2}\./g, requestDateText);
  return next;
}

function replaceHwpxTextNode(xml, pattern, replacement) {
  if (pattern instanceof RegExp) {
    return xml.replace(/<hp:t>([\s\S]*?)<\/hp:t>/g, (match, text) => {
      const decoded = decodeXmlText(text);
      pattern.lastIndex = 0;
      if (!pattern.test(decoded)) return match;
      pattern.lastIndex = 0;
      return `<hp:t>${escapeXmlText(decoded.replace(pattern, replacement))}</hp:t>`;
    });
  }
  return xml.replace(/<hp:t>([\s\S]*?)<\/hp:t>/g, (match, text) => {
    const decoded = decodeXmlText(text);
    if (decoded !== pattern) return match;
    return `<hp:t>${escapeXmlText(replacement)}</hp:t>`;
  });
}

function replaceNextTextAfterLabel(xml, label, replacement) {
  let foundLabel = false;
  let replaced = false;
  return xml.replace(/<hp:t>([\s\S]*?)<\/hp:t>/g, (match, text) => {
    const decoded = decodeXmlText(text).trim();
    if (replaced) return match;
    if (!foundLabel && decoded === label) {
      foundLabel = true;
      return match;
    }
    if (foundLabel && decoded) {
      replaced = true;
      return `<hp:t>${escapeXmlText(replacement)}</hp:t>`;
    }
    return match;
  });
}

function buildCareerInquiryPreviewText(detail) {
  return [
    "구로장애인자립생활센터 종사자 전력조회 요청",
    `수신자: ${detail.recipient || detail.org || ""}`,
    `대상자: ${detail.name}(${detail.birth})`,
    `시행: 구로센터 ${detail.executionNo || ""}`,
    `접수일: ${formatNoticeDate(parseDate(detail.requestDate))}`,
    `경력증명서 기관: ${detail.org || ""}`,
    detail.memo ? `메모: ${detail.memo}` : "",
  ].filter(Boolean).join("\n");
}

function renderInterviewManagement() {
  if (!els.confirmedInterviewList || !els.plannedInterviewList) return;
  const interviewEvents = getVisibleCandidates()
    .map((candidate) => {
      const schedule = buildSchedule(candidate);
      const date = candidate.confirmedInterviewDate || (schedule ? toDateKey(schedule.plannedInterviewDate) : "");
      if (!date) return null;
      return {
        candidate,
        date,
        confirmed: Boolean(candidate.confirmedInterviewDate),
        period: getInterviewPeriod(candidate),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.date.localeCompare(b.date) || displayRecruitmentListTitle(a.candidate).localeCompare(displayRecruitmentListTitle(b.candidate), "ko"));
  const confirmed = interviewEvents.filter((event) => event.confirmed);
  const planned = interviewEvents.filter((event) => !event.confirmed);
  els.confirmedInterviewCount.textContent = `${confirmed.length}건`;
  els.plannedInterviewCount.textContent = `${planned.length}건`;
  renderInterviewManagementList(els.confirmedInterviewList, confirmed, "확정된 면접 일정이 없습니다.");
  renderInterviewManagementList(els.plannedInterviewList, planned, "예정 면접 일정이 없습니다.");
}

function renderInterviewManagementList(container, events, emptyMessage) {
  if (!events.length) {
    container.innerHTML = `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
    return;
  }
  container.innerHTML = events
    .map(({ candidate, date, confirmed, period }) => {
      const people = normalizeInterviewees(candidate.interviewees);
      return `
        <article class="interview-management-card dept-${departmentKey(candidate.department)}" data-candidate-id="${candidate.id}" data-interview-date="${date}">
          <div class="interview-management-main">
            <div>
              <strong>${escapeHtml(displayRecruitmentListTitle(candidate))}</strong>
              <span>${escapeHtml(displayExecutionNo(candidate))} · ${escapeHtml(candidate.department || "부서 미입력")} · ${Number(candidate.hireCount || 1)}명 채용</span>
            </div>
            <span class="status-badge ${confirmed ? "hired" : ""}">${confirmed ? "확정" : "예정"}</span>
          </div>
          <div class="interview-management-date">
            <strong>${escapeHtml(formatShortDate(parseDate(date)))}</strong>
            <span>${escapeHtml(interviewPeriodLabel(period))}</span>
            <span>대상자 ${people.length}명</span>
          </div>
          <div class="interview-management-people">${escapeHtml(formatInterviewManagementPeople(people))}</div>
          <div class="full-candidate-actions">
            <button type="button" data-interview-action="edit">수정</button>
            <button type="button" data-interview-action="calendar">달력보기</button>
            ${confirmed ? `<button type="button" data-interview-action="ics">ICS</button><a href="${escapeHtml(buildGoogleCalendarInterviewUrl(candidate))}" target="_blank" rel="noopener noreferrer" data-interview-action="google">구글캘린더</a>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
  container.querySelectorAll(".interview-management-card").forEach((row) => {
    const candidate = state.candidates.find((item) => item.id === row.dataset.candidateId);
    if (!candidate) return;
    row.querySelector('[data-interview-action="edit"]')?.addEventListener("click", () => fillForm(candidate));
    row.querySelector('[data-interview-action="calendar"]')?.addEventListener("click", () => {
      state.activeView = "calendar";
      state.rightTab = "day";
      state.selectedDate = row.dataset.interviewDate;
      state.currentMonth = startOfMonth(parseDate(state.selectedDate));
      render();
    });
    row.querySelector('[data-interview-action="ics"]')?.addEventListener("click", () => downloadInterviewIcs(candidate));
  });
}

function formatInterviewManagementPeople(people) {
  if (!people.length) return "면접 대상자 미입력";
  return people.map((person) => `${person.name}${person.phone ? `(${person.phone})` : ""}`).join(", ");
}

function renderSearchResults() {
  const candidates = state.search ? getVisibleCandidates() : [];
  renderCandidateCollection(els.searchResults, candidates, state.search ? "검색 결과가 없습니다." : "검색어를 입력하면 결과가 표시됩니다.");
}

function addInterviewFromManagement() {
  resetForm();
  state.activeView = "interviews";
  localStorage.setItem("recruitment-active-view", state.activeView);
  els.confirmedInterviewDate.value = state.selectedDate || toDateKey(new Date());
  els.name.value = `${els.department.value} 직원 채용`;
  renderSchedulePreview();
  render();
  els.name.focus();
}

function addRecruitmentFromList() {
  resetForm();
  state.activeView = "list";
  localStorage.setItem("recruitment-active-view", state.activeView);
  render();
  els.name.focus();
}

function deleteCandidate(candidate) {
  if (!confirm(`${displayRecruitmentListTitle(candidate)} 채용건을 삭제할까요?`)) return;
  state.candidates = state.candidates.filter((item) => item.id !== candidate.id);
  if (els.candidateId.value === candidate.id) resetForm();
  persist();
  render();
}

function renderCandidateCollection(container, candidates, emptyMessage) {
  if (candidates.length === 0) {
    container.innerHTML = `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
    return;
  }

  container.innerHTML = "";
  candidates.forEach((candidate) => {
    const item = document.createElement("article");
    item.className = `candidate-item dept-${departmentKey(candidate.department)}`;
    const progress = getCandidateProgress(candidate);
    item.innerHTML = `
      <div class="candidate-top">
        <div>
          <strong>${escapeHtml(displayRecruitmentListTitle(candidate))}</strong>
          <span>${escapeHtml(candidate.department || "부서 미입력")} · ${escapeHtml(noticeTypeLabel(candidate))} · ${escapeHtml(inferEmploymentType(candidate))} · ${Number(candidate.hireCount || 1)}명 채용</span>
        </div>
        <span class="${getStatusClass(candidate.status)}">${escapeHtml(candidate.status)}</span>
      </div>
      <div class="progress-line" aria-label="진행률 ${progress}%"><span style="width: ${progress}%"></span></div>
      <span>${buildCandidateDateSummary(candidate)}</span>
      <div class="candidate-actions">
        <button type="button" data-action="edit">수정</button>
        <button type="button" data-action="select">일정 보기</button>
      </div>
    `;
    item.querySelector('[data-action="edit"]').addEventListener("click", () => fillForm(candidate));
    item.querySelector('[data-action="select"]').addEventListener("click", () => selectBestDate(candidate));
    container.append(item);
  });
}

function fillForm(candidate) {
  els.candidateId.value = candidate.id;
  els.name.value = candidate.name;
  els.department.value = candidate.department || candidate.role || "";
  els.hireCount.value = candidate.hireCount || 1;
  els.source.value = candidate.source;
  els.noticeType.value = candidate.noticeType || "urgent";
  els.noticeDate.value = candidate.noticeDate || candidate.documentDate || "";
  els.employmentType.value = EMPLOYMENT_TYPES.includes(candidate.employmentType) ? candidate.employmentType : inferEmploymentType(candidate);
  els.executionNo.value = executionDigits(candidate.executionNo || "");
  els.confirmedInterviewDate.value = candidate.confirmedInterviewDate || "";
  els.workStartDate.value = candidate.workStartDate || "";
  els.hireDate.value = candidate.hireDate;
  els.probationMonths.value = candidate.probationMonths;
  els.status.value = candidate.status;
  els.memo.value = candidate.memo;
  renderIntervieweeRows(candidate.interviewees || []);
  renderRecruitmentFieldRows(candidate.recruitmentFields || defaultRecruitmentFields(candidate));
  if (els.noticeRecruitment) els.noticeRecruitment.value = candidate.id;
  if (els.reissueSource) els.reissueSource.value = candidate.id;
  if (els.minutesRecruitment) els.minutesRecruitment.value = candidate.id;
  fillMinutesDefaults(candidate);
  els.deleteButton.disabled = false;
  renderSchedulePreview();
  els.name.focus();
}

function resetForm() {
  els.form.reset();
  els.candidateId.value = "";
  els.noticeType.value = "urgent";
  els.employmentType.value = "정규직";
  els.executionNo.value = "";
  els.hireCount.value = 1;
  els.probationMonths.value = 3;
  renderIntervieweeRows([]);
  renderRecruitmentFieldRows([]);
  if (els.noticeRecruitment) els.noticeRecruitment.value = "";
  if (els.reissueSource) els.reissueSource.value = "";
  if (els.minutesRecruitment) els.minutesRecruitment.value = "";
  fillMinutesDefaults(getDraftRecruitment());
  els.deleteButton.disabled = true;
  renderSchedulePreview();
}

function fillMinutesDefaults(candidate) {
  if (!els.minutesDate || !candidate) return;
  const meetingDate = candidate.confirmedInterviewDate || candidate.hireDate || toDateKey(new Date());
  const hiredPerson = normalizeInterviewees(candidate.interviewees || []).find((person) => person.status === "채용");
  els.minutesDate.value = meetingDate || "";
  if (els.minutesTime && !els.minutesTime.value) els.minutesTime.value = "14:00";
  els.minutesHireStart.value = candidate.workStartDate || candidate.hireDate || "";
  els.minutesHiredName.value = hiredPerson?.name || "";
  els.minutesResult.value = hiredPerson ? "hire" : "no_hire";
  if (els.minutesCase) {
    els.minutesCase.value = hiredPerson ? "hire_standard" : "no_hire_ineligible";
  }
}

function selectBestDate(candidate) {
  const schedule = buildSchedule(candidate);
  const date = candidate.confirmedInterviewDate || (schedule ? toDateKey(schedule.plannedInterviewDate) : "") || candidate.noticeDate || candidate.hireDate || toDateKey(new Date());
  state.selectedDate = date;
  state.currentMonth = startOfMonth(parseDate(date));
  state.activeView = "calendar";
  state.rightTab = "day";
  render();
}

function renderKanban() {
  const cards = state.candidates.flatMap((candidate) =>
    normalizeInterviewees(candidate.interviewees).map((person) => ({ candidate, person })),
  );
  els.kanbanBoard.innerHTML = INTERVIEWEE_STATUSES.map((status) => {
    const statusCards = cards.filter(({ person }) => person.status === status);
    return `
      <section class="kanban-column">
        <header>
          <strong>${escapeHtml(status)}</strong>
          <span>${statusCards.length}명</span>
        </header>
        <div class="kanban-cards">
          ${
            statusCards.length
              ? statusCards.map(({ candidate, person }) => renderKanbanCard(candidate, person)).join("")
              : `<div class="empty-column">대상자 없음</div>`
          }
        </div>
      </section>
    `;
  }).join("");
}

function renderKanbanCard(candidate, person) {
  const currentIndex = INTERVIEWEE_STATUSES.indexOf(person.status);
  const nextStatus = INTERVIEWEE_STATUSES[Math.min(currentIndex + 1, INTERVIEWEE_STATUSES.length - 1)];
  const prevStatus = INTERVIEWEE_STATUSES[Math.max(currentIndex - 1, 0)];
  return `
    <article class="kanban-card dept-${departmentKey(candidate.department)}">
      <strong>${escapeHtml(person.name || "이름 미입력")}</strong>
      <span>${escapeHtml(stripNoticePrefix(candidate.name || ""))}</span>
      <em>${escapeHtml(person.phone || "연락처 미입력")}</em>
      <div>
        ${prevStatus !== person.status ? `<button type="button" data-candidate-id="${candidate.id}" data-person-id="${person.id}" data-person-status="${prevStatus}">이전</button>` : ""}
        ${nextStatus !== person.status ? `<button type="button" data-candidate-id="${candidate.id}" data-person-id="${person.id}" data-person-status="${nextStatus}">다음</button>` : ""}
      </div>
    </article>
  `;
}

function renderTimeline() {
  const candidates = getVisibleCandidates();
  if (!candidates.length) {
    els.timelineBoard.innerHTML = `<div class="empty-state">표시할 채용건이 없습니다.</div>`;
    return;
  }
  els.timelineBoard.innerHTML = candidates
    .map((candidate) => {
      const schedule = buildSchedule(candidate);
      if (!schedule) return "";
      const interviewDate = parseDate(getInterviewDate(candidate));
      const probationEnd = getProbationEnd(candidate);
      return `
        <article class="timeline-row dept-${departmentKey(candidate.department)}" role="button" tabindex="0" data-candidate-id="${candidate.id}">
          <div class="timeline-title">
            <strong>${escapeHtml(displayRecruitmentListTitle(candidate))}</strong>
            <span>${escapeHtml(candidate.department)} · ${Number(candidate.hireCount || 1)}명</span>
          </div>
          <div class="timeline-track">
            <span class="timeline-segment notice-segment" style="left: 0%; width: 38%;" title="공고 ${formatShortDate(schedule.documentStartDate)} ~ ${formatShortDate(schedule.documentEndDate)}">공고</span>
            <span class="timeline-segment interview-segment" style="left: 42%; width: 18%;" title="면접 ${formatShortDate(interviewDate)}">면접</span>
            <span class="timeline-segment probation-segment" style="left: 64%; width: 32%;" title="수습 ${candidate.hireDate ? candidate.hireDate : "미정"} ~ ${probationEnd ? toDateKey(probationEnd) : "미정"}">수습</span>
          </div>
          <div class="timeline-dates">
            <span>서류마감 ${toDateKey(schedule.documentEndDate)}</span>
            <span>면접 ${toDateKey(interviewDate)}</span>
            <span>수습종료 ${probationEnd ? toDateKey(probationEnd) : "미정"}</span>
          </div>
        </article>
      `;
    })
    .join("");
  els.timelineBoard.querySelectorAll("[data-candidate-id]").forEach((row) => {
    row.addEventListener("click", () => {
      const candidate = state.candidates.find((item) => item.id === row.dataset.candidateId);
      if (candidate) fillForm(candidate);
    });
  });
}

function updateIntervieweeStatus(candidateId, personId, status) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate) return;
  candidate.interviewees = normalizeInterviewees(candidate.interviewees).map((person) =>
    person.id === personId ? { ...person, status, updatedAt: new Date().toISOString() } : person,
  );
  candidate.updatedAt = new Date().toISOString();
  persist();
  render();
}

function getFilteredEvents() {
  return getAllEvents()
    .filter((event) => state.filters.has(event.type))
    .filter((event) => matchesEmploymentType(event.candidate))
    .filter((event) => matchesSearch(event.candidate))
    .sort((a, b) => eventOrder(a.type) - eventOrder(b.type) || (a.candidate.name || "").localeCompare(b.candidate.name || "", "ko"));
}

function safeGetFilteredEvents() {
  try {
    return getFilteredEvents();
  } catch (error) {
    console.error("일정 생성 오류", error);
    return [];
  }
}

function getAllEvents() {
  const recruitmentEvents = state.candidates.flatMap((candidate) => {
    const events = [];
    const schedule = buildSchedule(candidate);
    const interviewDate = getInterviewDate(candidate);
    if (schedule) {
      events.push({
        type: "notice",
        date: toDateKey(schedule.documentStartDate),
        candidate,
        detail: "공고시작",
      });
      events.push({
        type: "deadline",
        date: toDateKey(schedule.documentEndDate),
        candidate,
        detail: "서류마감",
      });
      events.push({
        type: "screening",
        date: toDateKey(schedule.screeningDate),
        candidate,
        detail: "서류심사",
      });
    }
    if (interviewDate) {
      events.push({
        type: "interview",
        date: interviewDate,
        candidate,
        detail: candidate.confirmedInterviewDate ? "면접 확정" : "면접 예정",
        period: getInterviewPeriod(candidate),
      });
    }
    const workStartEvents = getWorkStartEvents(candidate);
    workStartEvents.forEach((event) => events.push(event));
    if (candidate.hireDate) {
      events.push({
        type: "hire",
        date: candidate.hireDate,
        candidate,
        detail: "합격발표/채용",
      });
    }
    return events;
  });
  const probationEvents = state.probations.flatMap((record) => {
    const summary = buildProbationSummary(record);
    const candidate = probationRecordAsCandidate(record);
    return [
      record.hireDate
        ? {
            type: "probationStart",
            date: record.hireDate,
            candidate,
            probation: record,
            detail: "입사일",
          }
        : null,
      summary.reviewDate
        ? {
            type: "probationReview",
            date: summary.reviewDate,
            candidate,
            probation: record,
            detail: "수습평가 작성일",
          }
        : null,
      summary.endDate
        ? {
            type: "probationEnd",
            date: summary.endDate,
            candidate,
            probation: record,
            detail: probationResultLabel(record.result),
          }
        : null,
    ].filter(Boolean);
  });
  return [...recruitmentEvents, ...probationEvents];
}

function probationRecordAsCandidate(record) {
  return {
    id: record.id,
    name: `${record.name} 수습평가`,
    department: record.department,
    employmentType: "정규직",
    status: "수습중",
    memo: record.note || "",
    hireDate: record.hireDate,
  };
}

function formatProbationCalendarName(record) {
  if (!record) return "";
  const work = [record.department, record.duty].filter(Boolean).join("-");
  return `(${record.name || "이름미정"})/${work ? `(${work})` : "(부서-업무)"}`;
}

function getWorkStartEvents(candidate) {
  const events = [];
  const seen = new Set();
  if (candidate.workStartDate) {
    seen.add(candidate.workStartDate);
    events.push({
      type: "workStart",
      date: candidate.workStartDate,
      candidate,
      detail: "채용시작",
    });
  }
  normalizeRecruitmentFields(candidate.recruitmentFields, candidate).forEach((field) => {
    if (!field.workStartDate || seen.has(field.workStartDate)) return;
    seen.add(field.workStartDate);
    events.push({
      type: "workStart",
      date: field.workStartDate,
      candidate,
      field,
      detail: `${field.fieldName || candidate.department} 채용시작`,
    });
  });
  return events;
}

function getInterviewPeriod(candidate) {
  const hour = getInterviewHour(candidate);
  if (hour === null) return "interview-unset";
  return hour < 12 ? "interview-morning" : "interview-afternoon";
}

function getInterviewHour(candidate) {
  const source = [candidate.interviewTime, candidate.memo, candidate.note].filter(Boolean).join(" ");
  const match = source.match(/(오전|오후)?\s*(\d{1,2})\s*[:시]\s*(\d{1,2})?/);
  if (!match) return null;
  let hour = Number(match[2]);
  if (match[1] === "오후" && hour < 12) hour += 12;
  if (match[1] === "오전" && hour === 12) hour = 0;
  return hour >= 0 && hour <= 23 ? hour : null;
}

function interviewPeriodLabel(period) {
  if (period === "interview-morning") return "면접(오전)";
  if (period === "interview-afternoon") return "면접(오후)";
  return "면접(시간미정)";
}

function calendarEventLabel(event) {
  const department = event.candidate.department || "부서미정";
  if (event.type === "notice") return `공고 · ${department}`;
  if (event.type === "deadline") return `서류마감 · ${department}`;
  if (event.type === "screening") return `서류심사 · ${department}`;
  if (event.type === "interview") return `${interviewPeriodLabel(event.period)} · ${department}`;
  if (event.type === "hire") return `발표/채용 · ${department}`;
  if (event.type === "probationStart") return `입사일 · ${formatProbationCalendarName(event.probation)}`;
  if (event.type === "probationReview") return `수습평가작성 · ${department} · ${event.probation?.name || ""}`;
  if (event.type === "probationEnd") return `수습종료 · ${department} · ${event.probation?.name || ""}`;
  if (event.type === "workStart") {
    const count = event.field?.count || event.candidate.hireCount || 1;
    return `채용시작 · ${department} · ${count}명`;
  }
  return `${eventLabels[event.type] || "일정"} · ${department}`;
}

function getVisibleCandidates() {
  return state.candidates.filter(matchesEmploymentType).filter(matchesSearch).sort((a, b) => {
    const scheduleA = buildSchedule(a);
    const scheduleB = buildSchedule(b);
    const dateA = a.confirmedInterviewDate || (scheduleA ? toDateKey(scheduleA.plannedInterviewDate) : "") || a.noticeDate || a.hireDate || "9999-12-31";
    const dateB = b.confirmedInterviewDate || (scheduleB ? toDateKey(scheduleB.plannedInterviewDate) : "") || b.noticeDate || b.hireDate || "9999-12-31";
    return dateA.localeCompare(dateB) || (a.name || "").localeCompare(b.name || "", "ko");
  });
}

function matchesEmploymentType(candidate) {
  if (state.employmentTypeFilter === "all") return true;
  return inferEmploymentType(candidate) === state.employmentTypeFilter;
}

function matchesSearch(candidate) {
  if (!state.search) return true;
  const interviewees = Array.isArray(candidate.interviewees) ? candidate.interviewees : [];
  return [
    candidate.name,
    candidate.department,
    candidate.role,
    candidate.source,
    candidate.status,
    inferEmploymentType(candidate),
    candidate.memo,
    ...interviewees.flatMap((person) => [person.name, person.phone, person.email, person.status]),
  ]
    .join(" ")
    .toLowerCase()
    .includes(state.search);
}

function getProbationEnd(candidate) {
  if (!candidate.hireDate || !candidate.probationMonths) return null;
  return addMonths(parseDate(candidate.hireDate), Number(candidate.probationMonths));
}

function buildCandidateDateSummary(candidate) {
  const parts = [];
  const schedule = buildSchedule(candidate);
  if (schedule) {
    parts.push(`서류마감 ${toDateKey(schedule.documentEndDate)}`);
    parts.push(candidate.confirmedInterviewDate ? `면접확정 ${candidate.confirmedInterviewDate}` : `면접예정 ${toDateKey(schedule.plannedInterviewDate)}`);
  }
  const people = candidate.interviewees || [];
  if (people.length) parts.push(`대상자 ${people.map((person) => `${person.name}${person.phone ? ` ${person.phone}` : ""}`).join(", ")}`);
  return parts.length ? parts.join(" · ") : "등록된 일정 없음";
}

function getStatusClass(status) {
  if (status === "채용") return "status-badge hired";
  if (status === "불합격" || status === "포기") return "status-badge rejected";
  return "status-badge";
}

function getCandidateProgress(candidate) {
  const people = normalizeInterviewees(candidate.interviewees);
  if (!people.length) return candidate.status === "채용" ? 100 : 20;
  const maxIndex = INTERVIEWEE_STATUSES.length - 1;
  const total = people.reduce((sum, person) => sum + Math.max(INTERVIEWEE_STATUSES.indexOf(person.status), 0), 0);
  return Math.round((total / (people.length * maxIndex)) * 100);
}

function getFinalHires(candidate) {
  return normalizeInterviewees(candidate.interviewees)
    .filter((person) => person.status === "채용")
    .map((person) => `${person.name}${person.phone ? `(${person.phone})` : ""}`);
}

function departmentKey(department) {
  return {
    사무행정팀: "admin",
    활동지원팀: "activity",
    복지사업팀: "welfare",
    "복지사업팀(주택)": "housing",
  }[department] || "admin";
}

function eventOrder(type) {
  return { notice: 1, deadline: 2, screening: 3, interview: 4, workStart: 5, hire: 6, eligibility: 7, probationStart: 8, probationReview: 9, probationEnd: 10, probation: 11, document: 12 }[type] || 13;
}

function exportCsv() {
  const headers = ["채용건명", "부서", "채용명수", "공고유형", "채용유형", "시행번호", "공고일", "2차면접예정일", "면접확정일", "면접대상자", "최종상태", "메모"];
  const rows = state.candidates.map((candidate) => [
    ...buildCsvRow(candidate),
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `채용달력_${toDateKey(new Date())}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function buildCsvRow(candidate) {
  const schedule = buildSchedule(candidate);
  return [
    candidate.name,
    candidate.department || candidate.role || "",
    candidate.hireCount || 1,
    candidate.noticeType === "normal" ? "일반 공고" : "긴급 공고",
    inferEmploymentType(candidate),
    candidate.executionNo || "",
    candidate.noticeDate,
    schedule ? toDateKey(schedule.plannedInterviewDate) : "",
    candidate.confirmedInterviewDate,
    formatInterviewees(candidate.interviewees || []).replaceAll("\n", " / "),
    candidate.status,
    candidate.memo,
  ];
}

function renderProbationList() {
  if (!els.probationRows) return;
  const rows = state.probations
    .slice()
    .sort((a, b) => (a.hireDate || "").localeCompare(b.hireDate || "") || a.name.localeCompare(b.name, "ko"));
  els.probationRows.innerHTML = rows
    .map((record, index) => {
      const summary = buildProbationSummary(record);
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${summary.year}년</td>
          <td>${escapeHtml(record.name)}</td>
          <td>${escapeHtml(record.department)}</td>
          <td>${escapeHtml(record.duty)}</td>
          <td>${escapeHtml(record.position)}</td>
          <td>${escapeHtml(record.hireDate)}</td>
          <td class="strong-date">${escapeHtml(summary.endDate)}</td>
          <td>${escapeHtml(summary.renewalDate)}</td>
          <td>${escapeHtml(summary.reviewDate)}</td>
          <td>${escapeHtml(record.writtenDate || "")}</td>
          <td>${escapeHtml(probationResultLabel(record.result))}</td>
          <td class="danger-note">${escapeHtml(record.note || "")}</td>
          <td class="table-actions">
            <button type="button" data-probation-edit="${escapeHtml(record.id)}">수정</button>
            <button type="button" data-probation-calendar="${escapeHtml(summary.reviewDate)}">달력</button>
            <button type="button" data-probation-delete="${escapeHtml(record.id)}">삭제</button>
          </td>
        </tr>
      `;
    })
    .join("");
  els.probationRows.querySelectorAll("[data-probation-edit]").forEach((button) => {
    button.addEventListener("click", () => fillProbationForm(state.probations.find((record) => record.id === button.dataset.probationEdit)));
  });
  els.probationRows.querySelectorAll("[data-probation-calendar]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDate = button.dataset.probationCalendar;
      state.currentMonth = startOfMonth(parseDate(state.selectedDate));
      state.activeView = "calendar";
      render();
    });
  });
  els.probationRows.querySelectorAll("[data-probation-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      state.probations = state.probations.filter((record) => record.id !== button.dataset.probationDelete);
      persistProbations();
      resetProbationForm();
      render();
    });
  });
}

function resetProbationForm() {
  if (!els.probationId) return;
  els.probationId.value = "";
  els.probationName.value = "";
  els.probationDepartment.value = "";
  els.probationDuty.value = "";
  els.probationPosition.value = "간사";
  els.probationHireDate.value = "";
  els.probationResult.value = "renew";
  els.probationScores.value = "";
  els.probationTotalScore.value = "";
  els.probationNote.value = "";
  els.probationEvaluationText.value = "";
  els.probationWrittenDate.value = "";
  setProbationStatus("수습자는 입사일 기준으로 수습끝과 평가작성일이 자동 계산됩니다.");
}

function fillProbationForm(record) {
  if (!record || !els.probationId) return;
  const summary = buildProbationSummary(record);
  els.probationId.value = record.id;
  els.probationName.value = record.name || "";
  els.probationDepartment.value = record.department || "";
  els.probationDuty.value = record.duty || "";
  els.probationPosition.value = record.position || "";
  els.probationHireDate.value = record.hireDate || "";
  els.probationResult.value = record.result || "renew";
  els.probationScores.value = (record.scores || []).join(",");
  els.probationTotalScore.value = record.totalScore || "";
  els.probationNote.value = record.note || "";
  els.probationEvaluationText.value = record.evaluationText || defaultProbationEvaluationText(record);
  els.probationWrittenDate.value = record.writtenDate || summary.reviewDate || "";
  setProbationStatus(`${record.name} 수습끝 ${summary.endDate}, 평가작성일 ${summary.reviewDate}`);
}

function saveProbationFromForm() {
  const record = readProbationForm();
  if (!record.name || !record.hireDate) {
    alert("이름과 입사일을 입력하세요.");
    return;
  }
  const index = state.probations.findIndex((item) => item.id === record.id);
  if (index >= 0) state.probations[index] = record;
  else state.probations.push(record);
  persistProbations();
  fillProbationForm(record);
  render();
}

function readProbationForm() {
  const scores = normalizeProbationScores(els.probationScores.value);
  const calculatedTotal = scores.length ? scores.reduce((sum, score) => sum + score, 0) : "";
  return {
    id: els.probationId.value || crypto.randomUUID(),
    name: els.probationName.value.trim(),
    department: els.probationDepartment.value.trim(),
    duty: els.probationDuty.value.trim(),
    position: els.probationPosition.value.trim() || "간사",
    hireDate: els.probationHireDate.value,
    result: els.probationResult.value || "renew",
    note: els.probationNote.value.trim(),
    scores,
    totalScore: els.probationTotalScore.value ? Number(els.probationTotalScore.value) : calculatedTotal,
    writtenDate: els.probationWrittenDate.value,
    evaluationText: els.probationEvaluationText.value.trim(),
  };
}

function updateProbationComputedFields() {
  if (!els.probationHireDate?.value) return;
  const record = readProbationForm();
  const summary = buildProbationSummary(record);
  if (!els.probationWrittenDate.value) els.probationWrittenDate.value = summary.reviewDate;
  if (!els.probationTotalScore.value && record.scores.length) els.probationTotalScore.value = record.totalScore;
  setProbationStatus(`수습끝 ${summary.endDate}, 평가작성일 ${summary.reviewDate}, 등급 ${probationGrade(record.totalScore || 0)}`);
}

function buildProbationSummary(record) {
  const hireDate = record.hireDate ? parseDate(record.hireDate) : null;
  const end = hireDate ? addDays(addMonths(hireDate, 3), -1) : null;
  const review = end ? addDays(end, -31) : null;
  const renewal = end ? addDays(addYears(end, 1), -1) : null;
  return {
    year: hireDate ? hireDate.getFullYear() : "",
    endDate: end ? toDateKey(end) : "",
    reviewDate: review ? toDateKey(review) : "",
    renewalDate: renewal ? toDateKey(renewal) : "",
  };
}

function normalizeProbationScores(value) {
  if (Array.isArray(value)) return value.map(Number).filter((score) => Number.isFinite(score));
  return String(value || "")
    .split(/[,\s/]+/)
    .map((item) => Number(item.trim()))
    .filter((score) => Number.isFinite(score));
}

function probationGrade(score) {
  const total = Number(score || 0);
  if (total >= 91) return "S";
  if (total >= 81) return "A";
  if (total >= 71) return "B";
  if (total >= 61) return "C";
  return "D";
}

function probationResultLabel(value) {
  return {
    renew: "수습종료 및 정규직 재계약",
    end: "수습종료",
    leave: "수습종료(퇴사)",
  }[value] || value || "";
}

function setProbationStatus(message) {
  if (els.probationStatus) els.probationStatus.textContent = message;
}

async function downloadProbationHwpx() {
  try {
    const record = readProbationForm();
    if (!record.name || !record.department || !record.hireDate) {
      alert("수습평가 대상자의 이름, 부서, 입사일을 입력하세요.");
      return;
    }
    const templateFile = els.probationTemplateFile.files?.[0];
    assertHwpxUpload(templateFile, "수습평가표 양식");
    if (!window.JSZip) {
      alert("문서 생성 모듈을 불러오지 못했습니다.");
      return;
    }
    const zip = await JSZip.loadAsync(await templateFile.arrayBuffer());
    const sectionPath = findFirstSectionPath(zip);
    if (!sectionPath) {
      alert("수습평가표 양식에서 본문 XML을 찾지 못했습니다.");
      return;
    }
    const payload = buildProbationEvaluationPayload(record);
    let sectionXml = await zip.file(sectionPath).async("string");
    sectionXml = applyProbationEvaluationTemplate(sectionXml, payload);
    zip.file(sectionPath, sectionXml);
    if (zip.file("Preview/PrvText.txt")) zip.file("Preview/PrvText.txt", buildProbationPreviewText(payload));
    const blob = await zip.generateAsync({ type: "blob", mimeType: "application/hwpml-package" });
    const fileName = `${safeFileName(`수습직원 근무평가표_${payload.name}_${payload.resultLabel}`)}.hwpx`;
    downloadBlob(blob, fileName);
    setProbationStatus(`${fileName} 다운로드를 시작했습니다.`);
  } catch (error) {
    console.error("수습평가표 생성 오류", error);
    alert(`수습평가표 생성 오류: ${error.message || "양식 또는 입력값을 확인하세요."}`);
    setProbationStatus("수습평가표 생성 오류가 발생했습니다.");
  }
}

function buildProbationEvaluationPayload(record) {
  const summary = buildProbationSummary(record);
  const scores = normalizeProbationScores(record.scores);
  const totalScore = Number(record.totalScore || scores.reduce((sum, score) => sum + score, 0) || 0);
  return {
    ...record,
    scores,
    totalScore,
    grade: probationGrade(totalScore),
    resultLabel: probationResultLabel(record.result),
    periodText: `${formatNoticeDate(parseDate(record.hireDate))}\n~ ${formatNoticeDate(parseDate(summary.endDate))}`,
    writtenDateText: formatNoticeDate(parseDate(record.writtenDate || summary.reviewDate)),
    evaluationText: record.evaluationText || defaultProbationEvaluationText({ ...record, totalScore }),
    summary,
  };
}

function applyProbationEvaluationTemplate(xml, payload) {
  let next = xml;
  next = replaceProbationDateTexts(next, payload);
  next = replaceKnownProbationTexts(next, payload);
  next = replaceProbationScoreRows(next, payload.scores, payload.totalScore);
  next = replaceProbationEvaluationParagraph(next, payload.evaluationText);
  next = replaceFinalEvaluationRow(next, payload);
  return next;
}

function replaceProbationDateTexts(xml, payload) {
  const dates = [payload.writtenDateText, formatNoticeDate(parseDate(payload.hireDate)), formatNoticeDate(parseDate(payload.summary.endDate))];
  let index = 0;
  return xml.replace(/<hp:t>(\d{4}\.\s*\d{1,2}\.\s*\d{1,2}\.)<\/hp:t>/g, (match) => {
    const replacement = dates[index] || dates.at(-1);
    index += 1;
    return `<hp:t>${escapeXmlText(replacement)}</hp:t>`;
  });
}

function replaceKnownProbationTexts(xml, payload) {
  let next = xml;
  ["000", "박수빈"].forEach((name) => {
    next = replaceHwpxPlainText(next, new RegExp(escapeRegExp(name), "g"), payload.name);
  });
  ["복지사업팀"].forEach((department) => {
    next = replaceHwpxPlainText(next, new RegExp(escapeRegExp(department), "g"), payload.department);
  });
  next = replaceHwpxPlainText(next, /간사/g, payload.position);
  return next;
}

function replaceProbationScoreRows(xml, scores, totalScore) {
  let scoreIndex = 0;
  return xml.replace(/<hp:tr\b[\s\S]*?<\/hp:tr>/g, (rowXml) => {
    if (/합\s*계/.test(rowXml)) return replaceLastNumericText(rowXml, totalScore);
    const hasQuestion = /담당직무|업무추진|문제나 상황|자기역할|규율|용모|동료 및 관련|명예|새로운 업무|자기개발|체력|아이디어/.test(rowXml);
    if (!hasQuestion || scoreIndex >= scores.length) return rowXml;
    const next = replaceLastNumericText(rowXml, scores[scoreIndex]);
    scoreIndex += 1;
    return next;
  });
}

function replaceLastNumericText(xml, value) {
  const matches = Array.from(xml.matchAll(/<hp:t>(\d+)<\/hp:t>/g));
  const last = matches.at(-1);
  if (!last) return xml;
  return `${xml.slice(0, last.index)}<hp:t>${escapeXmlText(value)}</hp:t>${xml.slice(last.index + last[0].length)}`;
}

function replaceProbationEvaluationParagraph(xml, evaluationText) {
  const paragraphs = String(evaluationText || "")
    .split(/\r?\n/)
    .map((line) => buildHwpxTextParagraph(line))
    .join("");
  return xml.replace(/(<hp:p\b[\s\S]*?<hp:t>2\.\s*종합평가<\/hp:t>[\s\S]*?<\/hp:p>)[\s\S]*?(?=<hp:p\b[\s\S]*?<hp:t>3\.\s*최종평가<\/hp:t>)/, `$1${paragraphs}`);
}

function replaceFinalEvaluationRow(xml, payload) {
  let finalSectionStarted = false;
  return xml.replace(/<hp:tr\b[\s\S]*?<\/hp:tr>/g, (rowXml) => {
    if (/3\.\s*최종평가/.test(rowXml)) finalSectionStarted = true;
    if (!finalSectionStarted || !/평가등급|점\s*수|성\s*명|소\s*속|직\s*위/.test(rowXml)) return rowXml;
    let next = rowXml;
    next = replaceHwpxPlainText(next, new RegExp(escapeRegExp(payload.department), "g"), payload.department);
    next = replaceHwpxPlainText(next, /<hp:t>(?:000|박수빈)<\/hp:t>/g, payload.name);
    next = replaceLastNumericText(next, payload.totalScore);
    next = next.replace(/<hp:t>[SABCD]<\/hp:t>/, `<hp:t>${payload.grade}</hp:t>`);
    return next;
  });
}

function replaceHwpxPlainText(xml, pattern, replacement) {
  return xml.replace(pattern, (match) => {
    if (String(match).startsWith("<hp:t>")) return `<hp:t>${escapeXmlText(replacement)}</hp:t>`;
    return escapeXmlText(replacement);
  });
}

function defaultProbationEvaluationText(record) {
  const result = record.result || "renew";
  if (result === "leave" || probationGrade(record.totalScore || 0) === "D") {
    return `수습 기간 동안 ${record.department || "해당 부서"} 직무 수행에 요구되는 핵심 역량 측면에서 부족한 수준이 확인됨.\n업무 지식의 이해 및 적용, 업무 흐름 파악, 지시사항 이행 과정에서 보완이 필요한 사항이 확인됨.\n종합적으로 볼 때 해당 업무를 독립적으로 수행하기 위한 기본 역량이 충분히 확보되지 않은 것으로 평가됨.`;
  }
  return `수습 기간 동안 ${record.department || "해당 부서"} 직무 수행에 필요한 기본적인 업무 이해와 수행 능력은 전반적으로 양호한 수준을 보임.\n주어진 역할을 안정적으로 수행하고 있으며, 의사소통 및 문제 해결 과정에서 기본적인 대응 능력을 갖추고 있는 것으로 확인됨.\n현재 단계에서는 실무 수행이 가능한 수준으로 판단되며, 향후 경험 축적과 피드백을 통해 업무 완성도를 높일 수 있을 것으로 기대됨.`;
}

function buildProbationPreviewText(payload) {
  return [
    "수습직원 근무평가표",
    `성명: ${payload.name}`,
    `부서: ${payload.department}`,
    `직위: ${payload.position}`,
    `평가기간: ${payload.periodText.replace("\n", " ")}`,
    `점수: ${payload.totalScore}`,
    `평가등급: ${payload.grade}`,
    `최종구분: ${payload.resultLabel}`,
    "",
    payload.evaluationText,
  ].join("\n");
}

async function downloadHwpxNotice() {
  const draft = getDraftRecruitment();
  if (!validateNoticeDraft(draft)) {
    return;
  }
  if (!window.JSZip) {
    alert("문서 생성 모듈을 불러오지 못했습니다. jszip.min.js 파일을 확인하세요.");
    return;
  }

  const templateName = els.noticeTemplate?.value || "sample_notice";
  const templateBuffer = await loadHwpxTemplateBuffer(templateName);
  if (!templateBuffer) {
    alert("샘플 HWPX 템플릿을 찾지 못했습니다.");
    return;
  }

  const zip = await JSZip.loadAsync(templateBuffer);
  const sectionPath = "Contents/section0.xml";
  const previewPath = "Preview/PrvText.txt";
  let sectionXml = await zip.file(sectionPath).async("string");
  const previewText = zip.file(previewPath) ? await zip.file(previewPath).async("string") : "";
  const notice = buildNoticePayload(draft);

  sectionXml = applyNoticeTemplate(sectionXml, notice);
  zip.file(sectionPath, sectionXml);
  if (previewText) {
    zip.file(previewPath, buildPlainNoticeText(notice));
  }

  const blob = await zip.generateAsync({ type: "blob", mimeType: "application/hwpml-package" });
  downloadBlob(blob, `${safeFileName(notice.fileTitle)}.hwpx`);
}

function downloadTxtNotice() {
  const draft = getDraftRecruitment();
  if (!validateNoticeDraft(draft)) {
    return;
  }
  const notice = buildNoticePayload(draft);
  const blob = new Blob([buildNotepadNoticeText(notice)], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, `${safeFileName(notice.fileTitle)}_메모장용.txt`);
}

async function downloadPersonnelMinutes() {
  try {
    setMinutesDownloadStatus("인사회의록 생성 중입니다...");
    const draft = getMinutesCandidate();
    if (!validateMinutesDraft(draft)) {
      setMinutesDownloadStatus("설정값을 확인한 뒤 다시 다운로드하세요.");
      return;
    }
    if (!window.JSZip) {
      alert("문서 생성 모듈을 불러오지 못했습니다. jszip.min.js 파일을 확인하세요.");
      setMinutesDownloadStatus("문서 생성 모듈 오류로 다운로드하지 못했습니다.");
      return;
    }

    const templateFile = els.minutesTemplateFile.files?.[0];
    const evaluationFiles = Array.from(els.evaluationFiles.files || []);
    assertHwpxUpload(templateFile, "인사회의록 양식");
    evaluationFiles.forEach((file) => assertHwpxUpload(file, "면접평가표"));
    const templateBuffer = await templateFile.arrayBuffer();
    const evaluationDocs = await Promise.all(evaluationFiles.map(readEvaluationHwpx));
    const minutes = buildPersonnelMinutesPayload(draft, evaluationDocs);
    const zip = await JSZip.loadAsync(templateBuffer);
    await configureMinutesBodyStyle(zip);
    const sectionPath = findFirstSectionPath(zip);
    if (!sectionPath) {
      alert("회의록 양식에서 본문 XML을 찾지 못했습니다. HWPX 파일인지 확인하세요.");
      return;
    }

    let sectionXml = await zip.file(sectionPath).async("string");
    sectionXml = applyPersonnelMinutesTemplate(sectionXml, minutes);
    zip.file(sectionPath, sectionXml);
    if (zip.file("Preview/PrvText.txt")) {
      zip.file("Preview/PrvText.txt", minutes.previewText);
    }

    const blob = await zip.generateAsync({ type: "blob", mimeType: "application/hwpml-package" });
    const fileName = `${safeFileName(minutes.fileTitle)}.hwpx`;
    downloadBlob(blob, fileName);
    setMinutesDownloadStatus(`${fileName} 다운로드를 시작했습니다.`);
  } catch (error) {
    console.error("인사회의록 생성 오류", error);
    setMinutesDownloadStatus("인사회의록 생성 오류가 발생했습니다.");
    alert(`인사회의록 생성 오류: ${error.message || "파일 양식 또는 첨부파일을 확인하세요."}`);
  }
}

function setMinutesDownloadStatus(message) {
  if (!els.minutesDownloadStatus) return;
  els.minutesDownloadStatus.textContent = message;
}

function getMinutesCandidate() {
  const selectedId = els.minutesRecruitment?.value || "";
  return state.candidates.find((candidate) => candidate.id === selectedId) || getDraftRecruitment();
}

function validateMinutesDraft(draft) {
  if (!draft.name || !draft.department) {
    alert("대상 공고를 선택하세요.");
    return false;
  }
  if (!draft.confirmedInterviewDate) {
    alert("면접일정을 먼저 확정 입력하세요.");
    return false;
  }
  if (!els.minutesTemplateFile.files?.length) {
    alert("인사회의록 양식 HWPX 파일을 선택하세요.");
    return false;
  }
  if (!normalizeInterviewees(draft.interviewees || []).length) {
    alert("면접 대상자를 1명 이상 등록하세요.");
    return false;
  }
  const intervieweeCount = normalizeInterviewees(draft.interviewees || []).length;
  const evaluationCount = els.evaluationFiles.files?.length || 0;
  if (evaluationCount > intervieweeCount) {
    alert(`면접평가표가 면접대상자 수보다 많습니다. 면접대상자 ${intervieweeCount}명 기준으로 평가표를 확인하세요.`);
    return false;
  }
  return true;
}

async function readEvaluationHwpx(file) {
  assertHwpxUpload(file, "면접평가표");
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  const text = await extractHwpxText(zip);
  return {
    fileName: file.name,
    text,
    name: inferEvaluationName(file.name, text),
  };
}

function assertHwpxUpload(file, label) {
  if (!file) throw new Error(`${label} 파일을 선택하세요.`);
  if (!/\.hwpx$/i.test(file.name)) {
    throw new Error(`${label}는 HWPX 파일만 사용할 수 있습니다. 현재 파일: ${file.name}`);
  }
}

async function extractHwpxText(zip) {
  const sectionFiles = Object.keys(zip.files)
    .filter((path) => /^Contents\/section\d+\.xml$/i.test(path))
    .sort();
  const parts = [];
  for (const path of sectionFiles) {
    const xml = await zip.file(path).async("string");
    parts.push(extractXmlText(xml));
  }
  return parts.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function extractXmlText(xml) {
  return Array.from(xml.matchAll(/<hp:t[^>]*>([\s\S]*?)<\/hp:t>|<hp:t\s*\/>/g))
    .map((match) => cleanExtractedDocumentText(decodeXmlText(match[1] || ""), { keepLines: true }))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cleanExtractedDocumentText(value, options = {}) {
  const lineBreak = options.keepLines ? "\n" : " ";
  return String(value || "")
    .replace(/<\/?h[ps]:[^>]*>/gi, lineBreak)
    .replace(/<[^>]+>/g, lineBreak)
    .replace(/\b(?:textpos|vertpos|vertsize|textheight|baseline|spacing|horzpos|horzsize|flags)="[^"]*"/gi, " ")
    .replace(/\b(?:hp|hs):[a-zA-Z0-9_-]+\b/gi, " ")
    .replace(/[<>]/g, " ")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

function inferEvaluationName(fileName, text) {
  const normalizedName = fileName.replace(/\.hwpx$/i, "");
  const hyphenName = normalizedName.match(/-([가-힣]{2,5})\s*$/)?.[1];
  if (hyphenName) return hyphenName;
  const nameLabel = text.match(/(?:성명|이름|지원자)\s*[:：]?\s*([가-힣]{2,5})/)?.[1];
  return nameLabel || normalizedName.replace(/^.*?([가-힣]{2,5}).*$/, "$1");
}

function buildPersonnelMinutesPayload(candidate, evaluationDocs) {
  const interviewees = normalizeInterviewees(candidate.interviewees || []);
  const evaluationDocsByPerson = new Map(interviewees.map((person) => [person.name, findEvaluationDocForPerson(person, evaluationDocs)]));
  const present = interviewees.filter((person) => evaluationDocsByPerson.get(person.name));
  const absent = interviewees.filter((person) => !evaluationDocsByPerson.get(person.name));
  const caseKey = PERSONNEL_MINUTES_CASES[els.minutesCase?.value] ? els.minutesCase.value : "hire_standard";
  const minutesCase = PERSONNEL_MINUTES_CASES[caseKey];
  const allowsHire = ["hire_standard", "mixed"].includes(caseKey);
  const hiredName = els.minutesResult.value === "hire" && allowsHire ? (els.minutesHiredName.value.trim() || present.find((person) => person.status === "채용")?.name || "") : "";
  const cancelledName = caseKey === "hire_cancelled" ? (els.minutesHiredName.value.trim() || interviewees[0]?.name || "해당") : "";
  const hiredPeople = hiredName ? present.filter((person) => person.name === hiredName) : [];
  const rejected = present.filter((person) => person.name !== hiredName);
  const minutesDate = els.minutesDate.value || candidate.hireDate || candidate.confirmedInterviewDate;
  const minutesTime = normalizeMinutesTime(els.minutesTime?.value || "14:00");
  const hireStartDate = els.minutesHireStart.value || candidate.workStartDate || candidate.hireDate || "";
  const primaryField = normalizeRecruitmentFields(candidate.recruitmentFields, candidate)[0] || defaultRecruitmentFields(candidate)[0];
  const serial = normalizeExecutionNo(candidate.executionNo, parseDate(candidate.noticeDate || minutesDate).getFullYear());
  const evaluationSummary = evaluationDocs.length
    ? evaluationDocs.map((doc, index) => `${index + 1}. ${doc.name}: ${summarizeEvaluationText(doc.text)}`).join("\n")
    : "첨부된 면접평가표 없음";
  const evaluationReasonByName = buildEvaluationReasonMap(evaluationDocsByPerson);
  const attendanceLines = buildMinutesAttendanceLines({ candidate, hiredPeople, rejected, absent, caseKey });
  const contentLines = buildMinutesContentLines({
    candidate,
    serial,
    caseKey,
    attendanceLines,
    evaluationSummary,
    evaluationReasonByName,
    interviewees,
    hiredPeople,
    rejected,
    absent,
    cancelledName,
  });
  const decisionLines = buildMinutesDecisionLines({ candidate, caseKey, hiredName, cancelledName, rejected, absent, hireStartDate, evaluationReasonByName });
  const resultLine = decisionLines[0] || "";
  const resultDetailLines = decisionLines.slice(1);
  const agenda = minutesCase.agenda;
  const previewLines = [
    "인사위원회 회의록",
    "",
    `회의일시: ${formatMinutesMeetingDateTime(minutesDate, minutesTime)}`,
    `안건: ${agenda} (${candidate.name})`,
    `시행번호: ${serial}`,
    `채용부서: ${candidate.department}`,
    `채용분야: ${primaryField.fieldName}`,
    `채용인원: ${candidate.hireCount || primaryField.count || 1}명`,
    `면접일자: ${formatNoticeDateWithWeekday(parseDate(candidate.confirmedInterviewDate))}`,
    "",
    "심의내용",
    ...contentLines,
    "",
    "의결사항",
    ...decisionLines,
  ];
  return {
    candidate,
    serial,
    caseKey,
    agenda,
    minutesDate,
    minutesTime,
    hireStartDate,
    hiredName,
    cancelledName,
    resultLine,
    resultDetailLines,
    attendanceLines,
    contentLines,
    decisionLines,
    evaluationSummary,
    evaluationReasonByName,
    previewText: previewLines.join("\n"),
    fileTitle: `인사위원회 회의록_${minutesCase.agenda}(${formatCompactDate(parseDate(minutesDate))})_${hiredName || cancelledName || minutesCase.fileSuffix}`,
  };
}

function findEvaluationDocForPerson(person, evaluationDocs) {
  return evaluationDocs.find((doc) => namesReferToSamePerson(person.name, doc.name) || personNameAppearsInText(person.name, doc.text));
}

function buildEvaluationReasonMap(evaluationDocsByPerson) {
  return new Map(
    Array.from(evaluationDocsByPerson.entries())
      .filter(([, doc]) => doc)
      .map(([personName, doc]) => [personName, summarizeEvaluationText(doc.text)]),
  );
}

function normalizeMinutesTime(value) {
  const match = String(value || "").match(/(\d{1,2}):?(\d{2})?/);
  if (!match) return "14:00";
  const hour = Math.min(23, Math.max(0, Number(match[1]))).toString().padStart(2, "0");
  const minute = Math.min(59, Math.max(0, Number(match[2] || 0))).toString().padStart(2, "0");
  return `${hour}:${minute}`;
}

function formatMinutesMeetingDateTime(dateKey, timeValue) {
  const date = parseDate(dateKey);
  const [hour, minute] = normalizeMinutesTime(timeValue).split(":");
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${Number(hour)}시 ${minute}분`;
}

function personNameAppearsInText(personName, text) {
  const normalizedText = normalizePersonName(text);
  const normalizedName = normalizePersonName(personName);
  if (!normalizedName) return false;
  if (!normalizedName.includes("*")) return normalizedText.includes(normalizedName);
  const pattern = new RegExp(normalizedName.split("*").map(escapeRegExp).join("[가-힣A-Za-z0-9]*"));
  return pattern.test(normalizedText);
}

function namesReferToSamePerson(left, right) {
  const a = normalizePersonName(left);
  const b = normalizePersonName(right);
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.length === b.length) {
    return [...a].every((char, index) => char === "*" || b[index] === "*" || char === b[index]);
  }
  return personNameAppearsInText(a, b) || personNameAppearsInText(b, a);
}

function normalizePersonName(value) {
  return String(value || "").replace(/\s+/g, "").replace(/[()（）\[\]{}]/g, "");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildMinutesAttendanceLines({ hiredPeople, rejected, absent, caseKey }) {
  if (caseKey === "all_absent") {
    return absent.map((person) => `지원자 ${person.name}은 면접 당일에 불참하였다.`);
  }
  if (caseKey === "hire_cancelled") {
    return absent.map((person) => `지원자 ${person.name}은 면접 당일에 불참하였다.`);
  }
  return [
    ...hiredPeople.map((person) => `지원자 ${person.name}은 면접 과정에서 직무 이해도와 태도가 확인되어 해당 업무에 적합하다고 판단하였다.`),
    ...rejected.map((person) => `지원자 ${person.name}은 면접평가표를 바탕으로 심의하였으나 업무 수행 적합성이 미흡하여 미채용하기로 하였다.`),
    ...absent.map((person) => `지원자 ${person.name}은 면접 당일에 불참하였다.`),
  ];
}

function buildMinutesContentLines({
  candidate,
  serial,
  caseKey,
  attendanceLines,
  evaluationSummary,
  evaluationReasonByName,
  interviewees,
  hiredPeople,
  rejected,
  absent,
  cancelledName,
}) {
  const intervieweeNames = interviewees.map((person) => person.name).filter(Boolean).join(", ");
  if (caseKey === "all_absent") {
    return [
      `<${candidate.department}>`,
      `${candidate.department} 면접 대상자 ${intervieweeNames || "전원"}은 당일 면접에 참석하지 않았음.`,
      `- [공고 ${serial}호] ${candidate.name} 1차 서류전형 합격 및 2차 면접 과정에서 면접 대상자 전원이 불참하여 채용이 진행되지 않았음.`,
      ...attendanceLines,
    ];
  }
  if (caseKey === "no_hire_ineligible") {
    return [
      `<${candidate.department}>`,
      `- [공고 ${serial}호] ${candidate.name} 공고에 따라 서류전형 합격자를 대상으로 면접을 진행하였음.`,
      ...rejected.map((person) => buildEvaluatedContentLine(person, evaluationReasonByName, false)),
      ...absent.map((person) => `지원자 ${person.name}은 면접 당일에 불참하여 채용 심의 대상에서 제외하였다.`),
      "면접평가표 및 면접 결과를 검토한 결과 채용 기준에 적합한 대상자가 없어 채용하지 못함.",
      `이에 ${candidate.department} 공석 충원을 위해 재공고 및 재채용 절차를 신속히 진행하기로 검토하였다.`,
    ];
  }
  if (caseKey === "hire_cancelled") {
    return [
      `<${candidate.department}>`,
      `${candidate.department}에 지원한 ${cancelledName}은 면접 결과 해당 업무에 적합해 보여 채용 진행하기로 하였으나, 입사 전 또는 입사 당일 채용 거절 의사를 밝힘.`,
      `이에, 추후 ${candidate.department} 채용공고를 신속히 진행하여 공석인 ${candidate.department}에 대한 추가 채용을 진행하기로 함.`,
      ...attendanceLines,
    ];
  }
  const baseLines = [
    `<${candidate.department}>`,
    `- [공고 ${serial}호] ${candidate.name} 공고를 진행하였음.`,
    ...hiredPeople.map((person) => buildEvaluatedContentLine(person, evaluationReasonByName, true)),
    ...rejected.map((person) => buildEvaluatedContentLine(person, evaluationReasonByName, false)),
    ...absent.map((person) => `지원자 ${person.name}은 면접 당일에 불참하여 채용 심의 대상에서 제외하였다.`),
    "면접평가표 및 면접 결과를 바탕으로 채용 적합성을 심의하였다.",
  ];
  if (caseKey === "mixed") {
    baseLines.push(`일부 채용 분야는 채용자를 선정하고, 미충원 분야는 추후 ${candidate.department} 채용공고를 진행하기로 검토하였다.`);
  }
  baseLines.push(evaluationSummary);
  if (caseKey === "no_hire_ineligible" && absent.length && absent.length === interviewees.length) {
    baseLines.splice(1, 0, `${candidate.department} 면접 대상자 전원이 면접 당일 불참하여 채용 심의를 진행하지 못하였다.`);
  }
  return baseLines;
}

function buildEvaluatedContentLine(person, evaluationReasonByName, isHired) {
  const reason = evaluationReasonByName.get(person.name);
  if (isHired) {
    return reason
      ? `지원자 ${person.name}은 면접평가표 검토 결과 ${reason} 해당 업무에 적합하다고 판단하였다.`
      : `지원자 ${person.name}은 면접 결과 해당 업무에 적합하다고 판단하였다.`;
  }
  return reason
    ? `지원자 ${person.name}은 면접평가표 검토 결과 ${reason} 채용 기준에 적합하지 않은 것으로 판단하였다.`
    : `지원자 ${person.name}은 면접 결과 채용 기준에 적합하지 않은 것으로 판단하였다.`;
}

function buildMinutesDecisionLines({ candidate, caseKey, hiredName, cancelledName, rejected, absent, hireStartDate }) {
  const followUp = `추후 ${candidate.department} 채용공고를 신속히 진행하여 공석인 ${candidate.department}에 대한 재공고 및 재채용 절차를 진행하기로 함.`;
  if (caseKey === "all_absent") {
    return ["채용자 없음", followUp];
  }
  if (caseKey === "hire_cancelled") {
    return [`${cancelledName} 지원자는 채용 거부로 인한 미채용 처리하기로 의결하였다.`, followUp];
  }
  if (!hiredName) {
    return [
      ...rejected.map((person) => `${person.name} 지원자: 면접평가표 및 면접 결과 채용 기준에 부적합하여 미채용.`),
      ...absent.map((person) => `${person.name} 지원자: 면접 당일 불참으로 미채용.`),
      "채용자 없음",
      "면접평가 결과 적합자가 없어 해당 채용은 미채용으로 종결함.",
      followUp,
    ];
  }
  const lines = [
    `채용자: ${hiredName} (${candidate.department})`,
    `입사일: ${hireStartDate ? formatNoticeDateWithWeekday(parseDate(hireStartDate)) : "추후 협의"}`,
    "고용형태: 3개월 수습 후, 정규직 전환",
    "임금: 서울시 기준 사회복지시설 종사자 인건비 기준에 따름",
  ];
  if (rejected.length) {
    lines.unshift(...rejected.map((person) => `${person.name} 지원자: 평가결과 미채용.`));
  }
  if (absent.length) {
    lines.unshift(...absent.map((person) => `${person.name} 지원자: 면접 당일 불참으로 미채용.`));
  }
  if (caseKey === "mixed") {
    lines.push(followUp);
  }
  return lines;
}

function summarizeEvaluationText(text) {
  const cleaned = cleanExtractedDocumentText(text);
  const opinion = extractEvaluationOpinion(cleaned);
  return (opinion || cleaned)
    .replace(/문서서식포탈비즈폼/g, " ")
    .replace(/※?\s*면접평가표\s*작성방법\s*및\s*유의사항[\s\S]*?(?=1\.\s*인적사항|성\s*명|3\.\s*종합평가|심사의견|$)/g, " ")
    .replace(/‣\s*면접방법[\s\S]*?(?=‣\s*주의사항|1\.\s*인적사항|성\s*명|$)/g, " ")
    .replace(/‣\s*주의사항[\s\S]*?(?=1\.\s*인적사항|성\s*명|$)/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[•·※★▶▷■□◆◇○●◎]/g, " ")
    .trim()
    .slice(0, 180) || "평가 내용 확인";
}

function extractEvaluationOpinion(text) {
  const normalized = String(text || "").replace(/\r/g, "\n");
  const opinionMatch = normalized.match(/심사의견\s*\n?([\s\S]*?)(?=\n?\s*평\s*가\s*(?:\n|$)|\n?\s*평가자\s*(?:\n|$)|\n?\s*평가기준\s*(?:\n|$)|$)/);
  if (opinionMatch?.[1]) return opinionMatch[1].trim();
  const summaryMatch = normalized.match(/3\.\s*종합평가[\s\S]*?심사의견\s*\n?([\s\S]*?)(?=\n?\s*평\s*가\s*(?:\n|$)|\n?\s*평가자\s*(?:\n|$)|\n?\s*평가기준\s*(?:\n|$)|$)/);
  return summaryMatch?.[1]?.trim() || "";
}

function findFirstSectionPath(zip) {
  return Object.keys(zip.files)
    .filter((path) => /^Contents\/section\d+\.xml$/i.test(path))
    .sort()[0];
}

function applyPersonnelMinutesTemplate(xml, minutes) {
  const replacements = [
    [/{{\s*회의일자\s*}}/g, formatNoticeDateWithWeekday(parseDate(minutes.minutesDate))],
    [/{{\s*회의일시\s*}}/g, formatMinutesMeetingDateTime(minutes.minutesDate, minutes.minutesTime)],
    [/{{\s*안건\s*}}/g, `${minutes.agenda} (${minutes.candidate.name})`],
    [/{{\s*시행번호\s*}}/g, minutes.serial],
    [/{{\s*채용부서\s*}}/g, minutes.candidate.department],
    [/{{\s*면접일자\s*}}/g, formatNoticeDateWithWeekday(parseDate(minutes.candidate.confirmedInterviewDate))],
    [/{{\s*심의내용\s*}}/g, minutes.contentLines.join("\n")],
    [/{{\s*평가요약\s*}}/g, minutes.evaluationSummary],
    [/{{\s*의결사항\s*}}/g, minutes.decisionLines.join("\n")],
    [/{{\s*최종채용자\s*}}/g, minutes.hiredName || "없음"],
    [/{{\s*입사예정일\s*}}/g, minutes.hireStartDate ? formatNoticeDateWithWeekday(parseDate(minutes.hireStartDate)) : "추후 협의"],
  ];
  const filled = replacements.reduce((value, [pattern, replacement]) => value.replace(pattern, escapeXmlText(replacement)), xml);
  const replacedKnownForm = applyKnownPersonnelMinutesCells(filled, minutes);
  if (hasMeaningfulMinutesText(replacedKnownForm, minutes)) {
    return replacedKnownForm;
  }
  return appendMinutesText(filled, minutes.previewText);
}

function hasMeaningfulMinutesText(xml, minutes) {
  const requiredTexts = [
    minutes.resultLine,
    minutes.contentLines[0],
    minutes.hiredName ? `채용자: ${minutes.hiredName}` : "채용자: 없음",
  ].filter(Boolean);
  return requiredTexts.some((text) => xml.includes(escapeXmlText(text)));
}

function applyKnownPersonnelMinutesCells(xml, minutes) {
  const agenda = `${minutes.agenda} (${minutes.candidate.name})`;
  const meetingDateText = formatMinutesMeetingDateTime(minutes.minutesDate, minutes.minutesTime);
  let next = xml
    .replace(/신규\s*직원\s*채용의\s*건|신규\s*채용의\s*건|직원채용\s*부적합\s*건|직원채용취소\s*의?\s*건/g, escapeXmlText(agenda))
    .replace(/\d{4}년\s*\d{1,2}월\s*\d{1,2}일\s*\d{1,2}시\s*\d{2}분/g, escapeXmlText(meetingDateText));
  next = replaceHwpxCellByAddress(next, 4, 2, minutes.contentLines);
  next = replaceHwpxCellByAddress(next, 5, 2, minutes.decisionLines);
  next = replaceHwpxCellByAddress(next, 6, 2, []);
  next = replaceHwpxCellByAddress(next, 7, 2, []);
  if (hasMeaningfulMinutesText(next, minutes)) {
    return next;
  }
  next = next.replace(
    /<hp:p[^>]*><hp:run[^>]*><hp:t>\s*&lt;[^<]+&gt;\s*<\/hp:t><\/hp:run>[\s\S]*?(?=<\/hp:subList><hp:cellAddr colAddr="2" rowAddr="4")/,
    minutes.contentLines.map(buildHwpxTextParagraph).join(""),
  );
  next = next.replace(
    /<hp:p[^>]*><hp:run[^>]*><hp:t>채용자:[\s\S]*?(?=<\/hp:subList><hp:cellAddr colAddr="2" rowAddr="5")/,
    minutes.decisionLines.map(buildHwpxTextParagraph).join(""),
  );
  return next;
}

function replaceHwpxCellByAddress(xml, rowAddr, colAddr, lines) {
  const cellPattern = /<hp:tc\b[\s\S]*?<\/hp:tc>/g;
  return xml.replace(cellPattern, (cellXml) => {
    const addressPattern = new RegExp(`<hp:cellAddr\\s+colAddr="${colAddr}"\\s+rowAddr="${rowAddr}"\\s*/>`);
    if (!addressPattern.test(cellXml)) return cellXml;
    const paragraphs = lines.length ? lines.map(buildHwpxTextParagraph).join("") : buildHwpxTextParagraph("");
    return cellXml.replace(/(<hp:subList\b[^>]*>)[\s\S]*?(<\/hp:subList>)/, `$1${paragraphs}$2`);
  });
}

async function configureMinutesBodyStyle(zip) {
  minutesBodyStyle = {
    paraPrID: MINUTES_BODY_PARA_PR_ID,
    charPrID: MINUTES_BODY_CHAR_PR_ID,
  };
  const headerFile = zip.file("Contents/header.xml");
  if (!headerFile) return;
  const headerXml = await headerFile.async("string");
  const hamFontId =
    headerXml.match(/<hh:font\b[^>]*id="(\d+)"[^>]*face="함초롬돋[움음]"/)?.[1] ||
    headerXml.match(/<hh:font\b[^>]*face="함초롬돋[움음]"[^>]*id="(\d+)"/)?.[1] ||
    "0";
  const charPrMatches = Array.from(headerXml.matchAll(/<hh:charPr\b[^>]*id="(\d+)"[\s\S]*?<\/hh:charPr>/g));
  const hamCharPr =
    charPrMatches.find((match) => new RegExp(`<hh:fontRef[^>]*hangul="${hamFontId}"`).test(match[0]) && /\bheight="1100"/.test(match[0])) ||
    charPrMatches.find((match) => new RegExp(`<hh:fontRef[^>]*hangul="${hamFontId}"`).test(match[0]) && /\bheight="11\d{2}"/.test(match[0])) ||
    charPrMatches.find((match) => new RegExp(`<hh:fontRef[^>]*hangul="${hamFontId}"`).test(match[0]));
  const paraPrMatches = Array.from(headerXml.matchAll(/<hh:paraPr\b[^>]*id="(\d+)"[\s\S]*?<\/hh:paraPr>/g));
  const justifyParaPr = paraPrMatches.find((match) => /<hh:align\b[^>]*horizontal="JUSTIFY"/.test(match[0]));
  if (hamCharPr?.[1]) minutesBodyStyle.charPrID = hamCharPr[1];
  if (justifyParaPr?.[1]) minutesBodyStyle.paraPrID = justifyParaPr[1];
}

function appendMinutesText(xml, text) {
  const paragraphs = text
    .split("\n")
    .map((line) => buildHwpxTextParagraph(line))
    .join("");
  if (xml.includes("</hs:sec>")) {
    return xml.replace("</hs:sec>", `${paragraphs}</hs:sec>`);
  }
  return `${xml}${paragraphs}`;
}

function buildHwpxTextParagraph(text) {
  return `<hp:p id="0" paraPrIDRef="${minutesBodyStyle.paraPrID}" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0"><hp:run charPrIDRef="${minutesBodyStyle.charPrID}"><hp:t>${escapeXmlText(text)}</hp:t></hp:run><hp:linesegarray><hp:lineseg textpos="0" vertpos="0" vertsize="1100" textheight="1100" baseline="935" spacing="440" horzpos="0" horzsize="48188" flags="393216"/></hp:linesegarray></hp:p>`;
}

function validateNoticeDraft(draft) {
  if (!draft.name || !draft.department || !draft.noticeDate) {
    alert("채용건명, 부서, 공고일을 먼저 입력하세요.");
    return false;
  }
  if (!draft.recruitmentFields.length) {
    alert("붙임1 채용분야를 1개 이상 입력하세요.");
    return false;
  }
  if (draft.recruitmentFields.some((field) => !field.fieldName || !field.duty)) {
    alert("채용분야의 분야명과 주요직무를 모두 입력하세요.");
    return false;
  }
  return true;
}

async function loadHwpxTemplateBuffer(templateName = "sample_notice") {
  if (templateName === "sample_notice" && window.HWPX_TEMPLATE_BASE64) {
    return base64ToArrayBuffer(window.HWPX_TEMPLATE_BASE64);
  }
  try {
    const response = await fetch(`./templates/${templateName}.hwpx`);
    return response.ok ? await response.arrayBuffer() : null;
  } catch {
    return null;
  }
}

function base64ToArrayBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes.buffer;
}

function getDraftRecruitment() {
  return {
    id: els.candidateId.value || "draft",
    name: els.name.value.trim(),
    department: els.department.value,
    hireCount: Number(els.hireCount.value || 1),
    source: els.source.value,
    noticeType: els.noticeType.value,
    noticeDate: els.noticeDate.value,
    employmentType: els.employmentType.value,
    executionNo: getExecutionNoFromInput(),
    confirmedInterviewDate: els.confirmedInterviewDate.value,
    workStartDate: els.workStartDate.value,
    hireDate: els.hireDate.value,
    probationMonths: Number(els.probationMonths.value || 3),
    status: els.status.value,
    memo: els.memo.value.trim(),
    interviewees: getIntervieweesFromRows(),
    recruitmentFields: getRecruitmentFieldsFromRows(),
  };
}

function buildNoticePayload(candidate) {
  const schedule = buildSchedule(candidate);
  const noticeType = noticeTypeLabel(candidate);
  const shortType = candidate.noticeType === "normal" ? "일반" : "긴급";
  const department = candidate.department || "사무행정팀";
  const recruitmentFields = normalizeRecruitmentFields(candidate.recruitmentFields, candidate);
  const primaryField = recruitmentFields[0] || defaultRecruitmentFields(candidate)[0];
  const hireCount = recruitmentFields.reduce((sum, field) => sum + Number(field.count || 0), 0) || Number(candidate.hireCount || 1);
  const noticeDate = candidate.noticeDate ? parseDate(candidate.noticeDate) : new Date();
  const year = noticeDate.getFullYear();
  const jobTitle = primaryField.fieldName.replace(new RegExp(`^${escapeRegExp(primaryField.department)}\\s*`), "") || departmentJobTitle(department);
  const fieldName = primaryField.fieldName;
  const fieldNamesCell = recruitmentFields.map((field, index) => `${index + 1}. ${field.fieldName}`).join("\n");
  const fieldCountsCell = recruitmentFields.map((field, index) => `${index + 1}. ${field.count}명`).join("\n");
  const dutyLinesCell = recruitmentFields.map((field, index) => `${index + 1}. ${fieldDutyLine(field, candidate.workStartDate)}`).join("\n");
  const departmentLine = recruitmentFields.map((field) => `– ${field.department} (${field.count}명)`).join("\n");
  const workStartLine = candidate.workStartDate ? formatNoticeDateWithWeekday(parseDate(candidate.workStartDate)) : "추후 협의";
  const serial = normalizeExecutionNo(candidate.executionNo, year);
  const fileTitle = `${formatFileDate(noticeDate)} ${serial} (${shortType}) ${department} 직원 채용 공고`;
  return {
    noticeType,
    shortType,
    department,
    hireCount,
    recruitmentFields,
    primaryField,
    year,
    jobTitle,
    fieldName,
    fieldNamesCell,
    fieldCountsCell,
    dutyLinesCell,
    workStartDate: candidate.workStartDate,
    serial,
    fileTitle,
    title: `${shortType} 직원 채용공고`,
    mainTitle: `[${shortType}][공고 ${serial}호] ${year}년 ${jobTitle}(${department}) 채용 공고`,
    departmentLine,
    periodLine: schedule ? `${formatNoticeDate(schedule.documentStartDate)} ~ ${formatNoticeDate(schedule.documentEndDate)}` : "",
    screeningLine: schedule ? formatNoticeDateWithWeekday(schedule.screeningDate) : "",
    interviewLine: schedule ? `${candidate.confirmedInterviewDate ? "" : "(예정) "}${formatNoticeDateWithWeekday(candidate.confirmedInterviewDate ? parseDate(candidate.confirmedInterviewDate) : schedule.plannedInterviewDate)}` : "",
    eligibilityLine: schedule ? `(예정) ${formatNoticeDate(schedule.eligibilityStartDate)} ~ ${formatNoticeDate(schedule.eligibilityEndDate)}` : "",
    workStartLine,
    dutyLine: fieldDutyLine(primaryField, candidate.workStartDate),
    noticeDateLine: formatNoticeDate(noticeDate),
    reasonLine:
      candidate.noticeType === "normal"
        ? "채용계획에 따라 센터 운영에 필요한 인력을 충원하고자 함"
        : "기존 직원의 퇴사 및 장기 부재로 인해 필수적인 업무 공백이 발생하여 대체 인력의 신속한 충원이 필요",
  };
}

function fieldDutyLine(field, fallbackWorkStartDate = "") {
  const duty = `${field.department}/${field.duty}`;
  const workDate = field.workStartDate || fallbackWorkStartDate || "";
  return workDate ? `${duty} (근무예정일: ${formatNoticeDateWithWeekday(parseDate(workDate))})` : duty;
}

function applyNoticeTemplate(xml, notice) {
  const replacements = [
    [/긴급 직원 채용공고/g, `${notice.shortType} 직원 채용공고`],
    [/긴급 직원 채용공고를/g, `${notice.shortType} 직원 채용공고를`],
    [/긴급 채용 사유: 기존 직원의 퇴사 및 장기 부재로 인해 필수적인 업무 공백이 발생하여 대체 인력의 신속한 충원이 필요/g, `${notice.shortType} 채용 사유: ${notice.reasonLine}`],
    [/– 복지사업팀 \(1명\)/g, notice.departmentLine],
    [/채용기간: 2026\. 5\. 19\.\(화\) ~ 2026\. 5\. 27\.\(수\)/g, `채용기간: ${notice.periodLine}`],
    [/GR2026-A-\d{3}/g, notice.serial],
    [/구로센터\s*GR2026-A-\d{3}/g, `구로센터 ${notice.serial}`],
    [/2026\. 5\. 19(?!\.)/g, notice.noticeDateLine],
    [/2026\. 5\. 19\. ~ 2026\. 5\. 27\./g, notice.periodLine.replace(/\([^)]+\)/g, "")],
    [/2026\. 5\. 28\.\(목\)/g, notice.screeningLine],
    [/\(예정\) 2026\. 5\. 29\.\(금\)/g, notice.interviewLine],
    [/\(예정\) 2026\.6\.1\. ~ 2026\.6\.2\./g, notice.eligibilityLine],
    [/추후 협의/g, notice.workStartLine],
    [/\[(긴급|일반)\]\[공고\s*[^호\]]+호\]\s*2026년\s*사회복지사\(복지사업팀\)\s*채용\s*공고/g, notice.mainTitle],
    [/2026년\s*사회복지사\(복지사업팀\)\s*채용\s*공고/g, `${notice.year}년 ${notice.jobTitle}(${notice.department}) 채용 공고`],
    [/복지사업팀 간사/g, notice.fieldNamesCell],
    [/사회복지사\(복지사업팀\)/g, `${notice.jobTitle}(${notice.department})`],
    [/복지사업팀\s*간사/g, notice.fieldNamesCell],
    [/1명 \/ • 장애인자립생활지원\(복지사업\) 사업 업무 담당\s*1명/g, `${notice.fieldCountsCell} / ${notice.dutyLinesCell}`],
    [/1명 \/ • 장애인자립생활지원\(복지사업\) 사업 업무 담당/g, `${notice.fieldCountsCell} / ${notice.dutyLinesCell}`],
    [/1명 \/ •[^<]*?업무 담당\s*1명/g, `${notice.fieldCountsCell} / ${notice.dutyLinesCell}`],
    [/1명 \/ •[^<]*?업무 담당/g, `${notice.fieldCountsCell} / ${notice.dutyLinesCell}`],
    [/<hp:t>복지사업팀 간사<\/hp:t>/g, `<hp:t>${escapeXmlText(notice.fieldNamesCell)}</hp:t>`],
    [/<hp:t>1명<\/hp:t>/g, `<hp:t>${escapeXmlText(notice.fieldCountsCell)}</hp:t>`],
    [/장애인자립생활지원\(복지사업\) 사업 업무 담당\s*1명/g, notice.dutyLinesCell],
    [/장애인자립생활지원\(복지사업\) 사업 업무 담당/g, notice.dutyLinesCell],
    [/복지사업팀 \(1명\)/g, `${notice.department} (${notice.hireCount}명)`],
  ];
  return replacements.reduce((value, [pattern, replacement]) => {
    const text = typeof replacement === "string" && replacement.startsWith("<hp:t>") ? replacement : escapeXmlText(replacement);
    return value.replace(pattern, text);
  }, xml);
}

function buildPlainNoticeText(notice) {
  return [
    notice.title,
    "",
    `채용부서 및 모집인원: ${notice.recruitmentFields.map((field) => `${field.department} ${field.count}명`).join(", ")}`,
    "채용분야:",
    ...notice.recruitmentFields.map((field, index) => `${index + 1}. ${field.fieldName} / ${field.count}명 / ${fieldDutyLine(field, notice.workStartDate)}`),
    `공고유형: ${notice.noticeType}`,
    `채용기간: ${notice.periodLine}`,
    `서류심사: ${notice.screeningLine}`,
    `2차 면접: ${notice.interviewLine}`,
    `3차 적격여부 확인: ${notice.eligibilityLine}`,
    `근무개시일: ${notice.workStartLine}`,
  ].join("\n");
}

function buildNotepadNoticeText(notice) {
  const fieldLines = notice.recruitmentFields.flatMap((field) => [
    `- 채용분야: ${field.fieldName}`,
    `- 채용인원: ${field.count}명`,
    `- 담당업무: ${field.duty}`,
  ]);
  const schedule = scheduleTextParts(notice);
  const lines = [
    `[${notice.shortType}] ${notice.year}년 ${notepadJobTitle(notice)}(${notice.department}) 채용 공고`,
    "",
    "장애인의 자립을 지원하며 함께 성장할 동료를 찾습니다.",
    "",
    "우리 센터는 당신의 의지와 노력이 균형 잡힌 삶을 만날 때, 서로를 존중하는 공정사회의 길이 열린다고 믿습니다.",
    "일과 삶의 균형을 소중히 여기며, 스스로 업무의 주체가 되어 능동적으로 성장하고자 하는 인재를 기다립니다.",
    "",
    "",
    "1. 채용분야",
    ...fieldLines,
    "",
    "2. 접수기간",
    "",
    schedule.period,
    "",
    "3. 응시자격",
    "",
    "- 사회복지사 자격증 소지자",
    "- 경력자의 경우 4호봉 이하 지원 가능",
    "- 운전 가능자 우대",
    "- 보훈 관련 법령에 따른 취업지원대상자 우대",
    "- 만 60세 미만",
    "",
    "",
    "4. 근무조건",
    "",
    "- 근무형태: 주 5일 근무",
    "- 고용형태: 3개월 수습 후 정규직 전환 가능",
    "- 급여수준: 2026년 서울시 사회복지시설 종사자 급여 기준 및 센터 내규(IL센터 급식비 기준 등)에 준함.",
    "- 복리후생: 5대 사회보험 가입, 퇴직금 지급",
    "- 기타 사항은 고용계약에 따름",
    "",
    "",
    "5. 채용일정",
    "",
    `1) 1차 서류접수: ${schedule.periodNoWeekday}`,
    `2) 서류심사: ${notice.screeningLine} / 1차 합격자 개별 및 홈페이지 공지`,
    `3) 2차 면접: ${schedule.interview} / 서류심사 합격자에 한함`,
    `4) 3차 적격여부 확인: ${schedule.eligibility} / 면접 합격자에 한함`,
    "- 범죄경력조회 및 장애인 학대 관련 범죄 등 경력조회",
    "",
    `5) 근무개시일: ${schedule.workStart}`,
    "6) 최종합격자 발표: 홈페이지 및 개별 공지",
    "* 상기 일정은 센터 사정에 따라 변경될 수 있습니다.",
    "",
    "",
    "6. 접수방법",
    "- 접수방법: 이메일 접수",
    "- 이메일: grcil@daum.net",
    "- 지원분야를 반드시 명시하여 제출",
    "",
    "",
    "7. 제출서류",
    "- 입사지원서 1부",
    "- 자기소개서 1부",
    "- 직무계획서 1부",
    "- 직무계획서는 직무 유경험 시 작성",
    "- 센터의 미션과 비전을 참고하여 작성",
    "- 담당 업무에 대한 견해 및 향후 사업 진행 방안을 구체적으로 기재",
    "",
    "* 경력사항 고의 누락 시 임용이 취소될 수 있습니다.",
    "* 주민등록등본, 졸업증명서, 경력증명서, 자격증 사본, 범죄경력조회 관련 서류 등은 최종합격자에 한해 추후 제출합니다.",
    "* 필수 제출사항 미제출 시 합격이 취소될 수 있습니다.",
    "",
    "8. 센터 정보",
    "",
    "- 홈페이지: www.grcil.kr",
    "- 연락처: 02-857-9501",
    "- 주소: 서울 구로구 가마산로27길 14, 신원빌딩 8층",
    "- 담당: 사무행정팀 채용담당자",
    "",
    "9. 기타",
    "",
    "- 허위 작성 또는 제출서류 위,변조 시 합격이 취소될 수 있습니다.",
    "- 지원서 기재 착오로 인한 책임은 지원자 본인에게 있습니다.",
    "- 전형일자는 변경될 수 있으며, 변경 내용은 센터 홈페이지에 공고하거나 개인에게 개별 통지합니다.",
  ];
  return sanitizeNotepadText(lines.join("\n"));
}

function notepadJobTitle(notice) {
  return notice.jobTitle === "간사" ? departmentJobTitle(notice.department) : notice.jobTitle;
}

function scheduleTextParts(notice) {
  const [startText = "", endText = ""] = notice.periodLine.split(" ~ ");
  const startDate = parseNoticeDateText(startText);
  const endDate = parseNoticeDateText(endText);
  const period = startDate && endDate ? `${formatNoticeDateWithWeekday(startDate)} ~ ${formatNoticeDateWithWeekday(endDate)}` : notice.periodLine;
  const periodNoWeekday = startDate && endDate ? `${formatNoticeDate(startDate)} ~ ${formatNoticeDate(endDate)}` : notice.periodLine.replace(/\([^)]+\)/g, "");
  return {
    period,
    periodNoWeekday,
    interview: notice.interviewLine.includes("(예정)") ? `${notice.interviewLine} 예정` : notice.interviewLine,
    eligibility: notice.eligibilityLine.includes("(예정)") ? `${notice.eligibilityLine.replace("(예정)", "").trim()} 예정` : notice.eligibilityLine,
    workStart: summarizeWorkStart(notice),
  };
}

function parseNoticeDateText(value) {
  const match = String(value || "").match(/(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})\./);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function summarizeWorkStart(notice) {
  const dates = notice.recruitmentFields.map((field) => field.workStartDate).filter(Boolean);
  if (!dates.length) return notice.workStartLine === "추후 협의" ? "추후 협의" : `${notice.workStartLine} 예정`;
  const monthCounts = dates.reduce((acc, value) => {
    const date = parseDate(value);
    const key = `${date.getFullYear()}년 ${date.getMonth() + 1}월 중`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  return `${Object.entries(monthCounts)
    .map(([label, count]) => `${label} ${count}명`)
    .join(" 및 ")} 예정`;
}

function sanitizeNotepadText(text) {
  return text
    .replace(/[•·※★▶▷■□◆◇○●◎]/g, " ")
    .replace(/[–—]/g, "-")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function departmentJobTitle(department) {
  return {
    사무행정팀: "사무원",
    활동지원팀: "활동지원 전담인력",
    복지사업팀: "사회복지사",
    "복지사업팀(주택)": "주거복지 담당자",
  }[department] || "직원";
}

function dutyText(department) {
  return {
    사무행정팀: "사무행정 및 회계, 인사 관련 업무 담당",
    활동지원팀: "활동지원사업 행정 및 이용자·활동지원사 관리 업무 담당",
    복지사업팀: "장애인자립생활지원 및 복지사업 업무 담당",
    "복지사업팀(주택)": "주거지원 및 복지사업 업무 담당",
  }[department] || "센터 업무 담당";
}

function safeFileName(value) {
  return value.replace(/[\\/:*?"<>|]/g, "_");
}

function formatFileDate(date) {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

function formatCompactDate(date) {
  return `${String(date.getFullYear()).slice(2)}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
}

function formatNoticeDate(date) {
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

function formatNoticeDateWithWeekday(date) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `${formatNoticeDate(date)}(${weekdays[date.getDay()]})`;
}

function escapeXmlText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function decodeXmlText(value) {
  return String(value)
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.candidates));
}

function persistProbations() {
  localStorage.setItem(PROBATION_STORAGE_KEY, JSON.stringify(state.probations));
}

function persistHiredDetails() {
  localStorage.setItem(HIRED_STORAGE_KEY, JSON.stringify(state.hiredDetails));
}

function loadCandidates() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return mergeRegisteredRecruitments(normalizeCandidates(JSON.parse(saved)));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  return mergeRegisteredRecruitments([
    {
      id: "sample-1",
      name: "활동지원팀 사회복지사 채용",
      department: "활동지원팀",
      hireCount: 1,
      source: "워크넷",
      noticeType: "urgent",
      noticeDate: "2026-05-19",
      confirmedInterviewDate: "",
      workStartDate: "",
      hireDate: "2026-05-15",
      probationMonths: 3,
      status: "채용",
      memo: "예시 데이터입니다.",
      interviewees: [
        { name: "홍길동", phone: "010-0000-0000" },
        { name: "김영희", phone: "010-1111-1111" },
      ],
    },
    {
      id: "sample-2",
      name: "사무행정팀 사무원 채용",
      department: "사무행정팀",
      hireCount: 2,
      source: "추천",
      noticeType: "normal",
      noticeDate: "2026-05-03",
      confirmedInterviewDate: "2026-05-22",
      workStartDate: "",
      hireDate: "",
      probationMonths: 3,
      status: "진행중",
      memo: "",
      interviewees: [
        { name: "박민준", phone: "010-2222-2222" },
        { name: "이서연", phone: "010-3333-3333" },
      ],
    },
    {
      id: "sample-3",
      name: "복지사업팀(주택) 담당자 채용",
      department: "복지사업팀(주택)",
      hireCount: 1,
      source: "사람인",
      noticeType: "urgent",
      noticeDate: "2026-05-04",
      confirmedInterviewDate: "",
      workStartDate: "",
      hireDate: "",
      probationMonths: 3,
      status: "진행중",
      memo: "",
      interviewees: [{ name: "최지훈", phone: "010-4444-4444" }],
    },
  ]);
}

function loadProbations() {
  const saved = localStorage.getItem(PROBATION_STORAGE_KEY);
  if (saved) {
    try {
      return normalizeProbations(JSON.parse(saved));
    } catch {
      localStorage.removeItem(PROBATION_STORAGE_KEY);
    }
  }
  return normalizeProbations([
    { id: "probation-park-subin", name: "박수빈", department: "복지사업팀", duty: "사업팀", position: "간사", hireDate: "2026-01-12", result: "leave", note: "수습종료(퇴사) 완료", scores: [6, 7, 6, 6, 6, 2, 3, 2, 5, 2, 6, 3, 6], totalScore: 60 },
    { id: "probation-shin-guncheol", name: "신건철", department: "사무국", duty: "사무국장", position: "사무국장", hireDate: "2026-01-19", result: "renew", note: "육아휴직대체", scores: [8, 8, 8, 7, 9, 4, 5, 5, 5, 3, 7, 4, 6], totalScore: 79 },
    { id: "probation-kim-yuri", name: "김유리", department: "활동지원팀", duty: "활동지원사업/육아휴직", position: "간사", hireDate: "2026-02-02", result: "leave", note: "수습종료(퇴사)", scores: [], totalScore: "" },
    { id: "probation-kang-jina", name: "강지나", department: "복지사업팀(다형2)", duty: "주택", position: "간사", hireDate: "2026-03-03", result: "renew", note: "", scores: [], totalScore: "" },
    { id: "probation-hong-minseo", name: "홍민서", department: "복지사업팀(다형2)", duty: "주택", position: "간사", hireDate: "2026-06-08", result: "renew", note: "", scores: [], totalScore: "" },
    { id: "probation-yu-wanjeong", name: "유완정", department: "복지사업팀(다형1)", duty: "주택", position: "간사", hireDate: "2026-06-15", result: "renew", note: "", scores: [], totalScore: "" },
  ]);
}

function loadHiredDetails() {
  const saved = localStorage.getItem(HIRED_STORAGE_KEY);
  if (!saved) return {};
  try {
    return JSON.parse(saved) || {};
  } catch {
    localStorage.removeItem(HIRED_STORAGE_KEY);
    return {};
  }
}

function normalizeProbations(items) {
  return (Array.isArray(items) ? items : []).map((item) => ({
    id: item.id || crypto.randomUUID(),
    name: item.name || "",
    department: item.department || "",
    duty: item.duty || "",
    position: item.position || "간사",
    hireDate: item.hireDate || "",
    result: item.result || "renew",
    note: item.note || "",
    scores: normalizeProbationScores(item.scores || []),
    totalScore: item.totalScore === "" || item.totalScore === undefined ? "" : Number(item.totalScore),
    writtenDate: item.writtenDate || "",
  }));
}

function mergeRegisteredRecruitments(candidates) {
  const merged = [...candidates];
  REGISTERED_RECRUITMENTS.forEach((registered) => {
    const index = merged.findIndex((candidate) => candidate.executionNo === registered.executionNo || candidate.id === registered.id);
    const normalized = normalizeCandidates([registered])[0];
    if (index >= 0) {
      merged[index] = { ...merged[index], ...normalized };
    } else {
      merged.push(normalized);
    }
  });
  return merged;
}

function normalizeCandidates(candidates) {
  return candidates.map((candidate) => ({
    ...candidate,
    noticeType: candidate.noticeType || "urgent",
    noticeDate: candidate.noticeDate || candidate.documentDate || "",
    employmentType: EMPLOYMENT_TYPES.includes(candidate.employmentType) ? candidate.employmentType : inferEmploymentType(candidate),
    executionNo: candidate.executionNo || "",
    confirmedInterviewDate: candidate.confirmedInterviewDate || candidate.interviewDate || "",
    workStartDate: candidate.workStartDate || "",
    probationMonths: Number(candidate.probationMonths || 3),
    department: DEPARTMENTS.includes(candidate.department) ? candidate.department : DEPARTMENTS[0],
    hireCount: Number(candidate.hireCount || 1),
    interviewees: normalizeInterviewees(candidate.interviewees, candidate.name, candidate.phone),
    recruitmentFields: normalizeRecruitmentFields(candidate.recruitmentFields, candidate),
  }));
}

function getInterviewDate(candidate) {
  const schedule = buildSchedule(candidate);
  return candidate.confirmedInterviewDate || (schedule ? toDateKey(schedule.plannedInterviewDate) : "");
}

function noticeTypeLabel(candidate) {
  return candidate.noticeType === "normal" ? "일반 공고" : "긴급 공고";
}

function noticeTypePrefix(candidate) {
  return candidate.noticeType === "normal" ? "[일반]" : "[긴급]";
}

function inferEmploymentType(candidate = {}) {
  if (EMPLOYMENT_TYPES.includes(candidate.employmentType)) return candidate.employmentType;
  const text = [candidate.name, candidate.memo, candidate.status, candidate.source, ...(candidate.recruitmentFields || []).flatMap((field) => [field.fieldName, field.duty])]
    .filter(Boolean)
    .join(" ");
  if (/계약직/.test(text)) return "계약직";
  if (/기간제|임시직|단기/.test(text)) return "기간제";
  if (/기타/.test(text)) return "기타";
  return "정규직";
}

function displayRecruitmentName(candidate) {
  const name = String(candidate.name || "").trim() || `${candidate.department || "부서"} 직원 채용`;
  if (/^\[(긴급|일반)\]/.test(name)) return name;
  return `${noticeTypePrefix(candidate)} ${name}`;
}

function displayRecruitmentListTitle(candidate) {
  return `${noticeTypePrefix(candidate)} ${displayExecutionNo(candidate)} · ${stripNoticePrefix(candidate.name || `${candidate.department || "부서"} 직원 채용`)}`;
}

function displayExecutionNo(candidate) {
  const baseDate = candidate.noticeDate || candidate.confirmedInterviewDate || candidate.interviewDate || toDateKey(new Date());
  return normalizeExecutionNo(candidate.executionNo, parseDate(baseDate).getFullYear());
}

function stripNoticePrefix(value) {
  return String(value || "").replace(/^\[(긴급|일반)\]\s*/, "");
}

function normalizeExecutionNo(value, year) {
  const trimmed = String(value || "").trim();
  const safeYear = Number.isFinite(Number(year)) ? Number(year) : new Date().getFullYear();
  if (!trimmed) return `GR${safeYear}-A-000`;
  if (/^\d{1,3}$/.test(trimmed)) return `GR${safeYear}-A-${trimmed.padStart(3, "0")}`;
  const duplicateYear = trimmed.match(/^GR(\d{4})[-\s]*(?:GR)?\1[-\s]*([A-Z])[-\s]*(\d{1,3})$/i);
  if (duplicateYear) return `GR${duplicateYear[1]}-${duplicateYear[2].toUpperCase()}-${duplicateYear[3].padStart(3, "0")}`;
  const fullSerial = trimmed.match(/^GR(\d{4})[-\s]*([A-Z])[-\s]*(\d{1,3})$/i);
  if (fullSerial) return `GR${fullSerial[1]}-${fullSerial[2].toUpperCase()}-${fullSerial[3].padStart(3, "0")}`;
  const yearSerial = trimmed.match(/^(\d{4})[-\s]*([A-Z])[-\s]*(\d{1,3})$/i);
  if (yearSerial) return `GR${yearSerial[1]}-${yearSerial[2].toUpperCase()}-${yearSerial[3].padStart(3, "0")}`;
  const typeSerial = trimmed.match(/^([A-Z])[-\s]*(\d{1,3})$/i);
  if (typeSerial) return `GR${safeYear}-${typeSerial[1].toUpperCase()}-${typeSerial[2].padStart(3, "0")}`;
  return trimmed;
}

function getExecutionNoFromInput() {
  const digits = executionDigits(els.executionNo.value);
  return digits ? `GR2026-A-${digits}` : "";
}

function executionDigits(value) {
  const raw = String(value || "").trim();
  const match = raw.match(/(\d{1,3})$/);
  return match ? match[1].padStart(3, "0") : "";
}

function parseInterviewees(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [namePart, phonePart] = line.split(/\s*\/\s*/);
      return {
        id: crypto.randomUUID(),
        name: (namePart || "").trim(),
        phone: (phonePart || "").trim(),
        email: "",
        status: "면접대기",
      };
    })
    .filter((person) => person.name || person.phone);
}

function addIntervieweeRow(person = {}) {
  const row = document.createElement("div");
  row.className = "interviewee-row";
  row.dataset.personId = person.id || crypto.randomUUID();
  row.innerHTML = `
    <input data-field="name" type="text" placeholder="이름" value="${escapeHtml(person.name || "")}" />
    <input data-field="phone" type="tel" placeholder="연락처" value="${escapeHtml(person.phone || "")}" />
    <input data-field="email" type="email" placeholder="이메일" value="${escapeHtml(person.email || "")}" />
    <select data-field="status">
      ${INTERVIEWEE_STATUSES.map((status) => `<option${(person.status || "면접대기") === status ? " selected" : ""}>${status}</option>`).join("")}
    </select>
    <button type="button" data-remove-interviewee aria-label="면접 대상자 삭제">삭제</button>
  `;
  els.intervieweeRows.append(row);
  syncIntervieweeTextarea();
}

function renderIntervieweeRows(people) {
  els.intervieweeRows.innerHTML = "";
  normalizeInterviewees(people).forEach((person) => addIntervieweeRow(person));
  syncIntervieweeTextarea();
}

function getIntervieweesFromRows() {
  return [...els.intervieweeRows.querySelectorAll(".interviewee-row")]
    .map((row) => {
      const value = (field) => row.querySelector(`[data-field="${field}"]`)?.value.trim() || "";
      return {
        id: row.dataset.personId || crypto.randomUUID(),
        name: value("name"),
        phone: value("phone"),
        email: value("email"),
        status: value("status") || "면접대기",
        updatedAt: new Date().toISOString(),
      };
    })
    .filter((person) => person.name || person.phone || person.email);
}

function syncIntervieweeTextarea() {
  els.interviewees.value = formatInterviewees(getIntervieweesFromRows());
}

function formatInterviewees(people) {
  return normalizeInterviewees(people)
    .map((person) => [person.name, person.phone, person.email, person.status].filter(Boolean).join(" / "))
    .join("\n");
}

function addRecruitmentFieldRow(field = {}) {
  const normalized = normalizeRecruitmentFields([field], getDraftBaseForFields())[0] || defaultRecruitmentFields(getDraftBaseForFields())[0];
  const row = document.createElement("div");
  row.className = "recruitment-field-row";
  row.dataset.fieldId = normalized.id || crypto.randomUUID();
  row.innerHTML = `
    <select data-field-setting="preset" title="채용분야 메뉴">
      <option value="">직접입력</option>
      ${Object.entries(RECRUITMENT_FIELD_PRESETS)
        .map(([key, preset]) => `<option value="${key}"${normalized.preset === key ? " selected" : ""}>${preset.label}</option>`)
        .join("")}
    </select>
    <select data-field-setting="department" title="부서">
      ${DEPARTMENTS.map((department) => `<option${normalized.department === department ? " selected" : ""}>${department}</option>`).join("")}
    </select>
    <input data-field-setting="fieldName" type="text" placeholder="분야명" value="${escapeHtml(normalized.fieldName)}" />
    <input data-field-setting="count" type="number" min="1" max="99" value="${Number(normalized.count || 1)}" title="인원" />
    <input data-field-setting="duty" type="text" placeholder="주요직무 예: 장애인자립생활주택 업무 담당" value="${escapeHtml(normalized.duty)}" />
    <input data-field-setting="workStartDate" type="date" title="근무예정일" value="${escapeHtml(normalized.workStartDate || "")}" />
    <button type="button" data-remove-field aria-label="채용분야 삭제">삭제</button>
  `;
  els.recruitmentFieldRows.append(row);
}

function renderRecruitmentFieldRows(fields) {
  els.recruitmentFieldRows.innerHTML = "";
  const normalized = normalizeRecruitmentFields(fields, getDraftBaseForFields());
  (normalized.length ? normalized : defaultRecruitmentFields(getDraftBaseForFields())).forEach((field) => addRecruitmentFieldRow(field));
}

function getRecruitmentFieldsFromRows() {
  return [...els.recruitmentFieldRows.querySelectorAll(".recruitment-field-row")]
    .map((row) => {
      const value = (field) => row.querySelector(`[data-field-setting="${field}"]`)?.value.trim() || "";
      return {
        id: row.dataset.fieldId || crypto.randomUUID(),
        preset: value("preset"),
        department: value("department") || els.department.value,
        fieldName: value("fieldName"),
        count: Number(value("count") || 1),
        duty: value("duty"),
        workStartDate: value("workStartDate"),
      };
    })
    .filter((field) => field.department || field.fieldName || field.duty);
}

function applyRecruitmentPreset(row, presetKey) {
  if (!row || !presetKey || !RECRUITMENT_FIELD_PRESETS[presetKey]) return;
  const preset = RECRUITMENT_FIELD_PRESETS[presetKey];
  row.querySelector('[data-field-setting="department"]').value = preset.department;
  row.querySelector('[data-field-setting="fieldName"]').value = preset.fieldName;
  row.querySelector('[data-field-setting="duty"]').value = preset.duty;
}

function getDraftBaseForFields() {
  return {
    department: els.department.value || DEPARTMENTS[0],
    hireCount: Number(els.hireCount.value || 1),
  };
}

function normalizeRecruitmentFields(fields, candidate = {}) {
  if (Array.isArray(fields) && fields.length) {
    return fields
      .map((field) => {
        const department = DEPARTMENTS.includes(field.department) ? field.department : candidate.department || DEPARTMENTS[0];
        return {
          id: field.id || crypto.randomUUID(),
          preset: field.preset || "",
          department,
          fieldName: field.fieldName || `${department} ${departmentJobTitle(department)}`,
          count: Math.max(1, Number(field.count || 1)),
          duty: field.duty || dutyText(department),
          workStartDate: field.workStartDate || "",
        };
      })
      .filter((field) => field.fieldName || field.duty);
  }
  return defaultRecruitmentFields(candidate);
}

function defaultRecruitmentFields(candidate = {}) {
  const department = DEPARTMENTS.includes(candidate.department) ? candidate.department : DEPARTMENTS[0];
  return [
    {
      id: crypto.randomUUID(),
      preset: presetKeyForDepartment(department),
      department,
      fieldName: `${department} ${departmentJobTitle(department)}`,
      count: Math.max(1, Number(candidate.hireCount || 1)),
      duty: dutyText(department),
      workStartDate: candidate.workStartDate || "",
    },
  ];
}

function presetKeyForDepartment(department) {
  if (department === "사무행정팀") return "admin";
  if (department === "활동지원팀") return "activity";
  if (department === "복지사업팀(주택)") return "housing";
  return "welfare";
}

function normalizeInterviewees(people, fallbackName = "", fallbackPhone = "") {
  if (Array.isArray(people)) {
    return people.map((person) => ({
      id: person.id || crypto.randomUUID(),
      name: person.name || "",
      phone: person.phone || "",
      email: person.email || "",
      status: INTERVIEWEE_STATUSES.includes(person.status) ? person.status : "면접대기",
      updatedAt: person.updatedAt || "",
    }));
  }
  if (typeof people === "string" && people.trim()) {
    return parseInterviewees(people);
  }
  if (fallbackName || fallbackPhone) {
    return [{ id: crypto.randomUUID(), name: fallbackName, phone: fallbackPhone || "", email: "", status: "면접대기" }];
  }
  return [];
}

function renderIntervieweesHtml(people) {
  const normalized = normalizeInterviewees(people);
  if (!normalized.length) {
    return `<div class="interviewee-list"><div class="interviewee"><span>면접 대상자 미입력</span><em></em></div></div>`;
  }
  return `
    <div class="interviewee-list">
      ${normalized
        .map(
          (person) => `
            <div class="interviewee">
              <span>${escapeHtml(person.name || "이름 미입력")}</span>
              <em>${escapeHtml([person.phone || "연락처 미입력", person.status].filter(Boolean).join(" · "))}</em>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function buildSchedule(candidate) {
  if (!candidate.noticeDate) return null;
  const noticeDate = parseDate(candidate.noticeDate);
  const documentEndOffset = candidate.noticeType === "normal" ? 15 : 8;
  const documentStartDate = new Date(noticeDate);
  const baseDocumentEndDate = addDays(noticeDate, documentEndOffset);
  const holidayAdjustmentDates = getReceptionHolidayAdjustments(documentStartDate, baseDocumentEndDate);
  const documentEndDate = addDays(baseDocumentEndDate, holidayAdjustmentDates.length);
  const screeningDate = addDays(documentEndDate, 1);
  const plannedInterviewDate = addDays(documentEndDate, 2);
  const interviewBaseDate = candidate.confirmedInterviewDate ? parseDate(candidate.confirmedInterviewDate) : plannedInterviewDate;
  const eligibilityStartDate = nextBusinessDay(addDays(interviewBaseDate, 1));
  const eligibilityEndDate = nextBusinessDay(addDays(eligibilityStartDate, 1));
  return {
    noticeDate,
    documentStartDate,
    documentEndDate,
    baseDocumentEndDate,
    holidayAdjustmentDays: holidayAdjustmentDates.length,
    holidayAdjustmentDates,
    screeningDate,
    plannedInterviewDate,
    eligibilityStartDate,
    eligibilityEndDate,
  };
}

function getReceptionHolidayAdjustments(startDate, baseEndDate) {
  let adjustedEndDate = new Date(baseEndDate);
  let holidays = [];
  let previousCount = -1;
  while (holidays.length !== previousCount) {
    previousCount = holidays.length;
    holidays = eachDate(startDate, adjustedEndDate)
      .filter(isWeekdayPublicHoliday)
      .map((date) => ({ date, name: PUBLIC_HOLIDAYS[toDateKey(date)] }));
    adjustedEndDate = addDays(baseEndDate, holidays.length);
  }
  return holidays;
}

function isWeekdayPublicHoliday(date) {
  const day = date.getDay();
  return day !== 0 && day !== 6 && Boolean(PUBLIC_HOLIDAYS[toDateKey(date)]);
}

function eachDate(start, end) {
  const dates = [];
  let cursor = new Date(start);
  while (cursor <= end) {
    dates.push(new Date(cursor));
    cursor = addDays(cursor, 1);
  }
  return dates;
}

function nextBusinessDay(date) {
  let next = new Date(date);
  while (next.getDay() === 0 || next.getDay() === 6) {
    next = addDays(next, 1);
  }
  return next;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date, amount) {
  const next = new Date(date);
  const originalDay = next.getDate();
  next.setDate(1);
  next.setMonth(next.getMonth() + amount);
  const maxDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
  next.setDate(Math.min(originalDay, maxDay));
  return next;
}

function addYears(date, amount) {
  const next = new Date(date);
  next.setFullYear(next.getFullYear() + amount);
  return next;
}

function parseDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function daysBetween(start, end) {
  const ms = stripTime(end) - stripTime(start);
  return Math.round(ms / 86400000);
}

function formatMonth(date) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" }).format(date);
}

function formatDateLong(date) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(date);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "numeric", day: "numeric", weekday: "short" }).format(date);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ============================================
// Step Form Manager - 기존 기능과 독립적
// ============================================

class StepFormManager {
  constructor() {
    this.currentStep = 1;
    this.maxStep = 4;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateProgress();
  }

  setupEventListeners() {
    document.querySelectorAll('.step-tab')?.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const step = parseInt(tab.dataset.step);
        if (this.validateStep(this.currentStep)) {
          this.goToStep(step);
        }
      });
    });

    document.getElementById('prevButton')?.addEventListener('click', () => {
      this.prevStep();
    });

    document.getElementById('nextButton')?.addEventListener('click', () => {
      if (this.validateStep(this.currentStep)) {
        this.nextStep();
      }
    });
  }

  goToStep(step) {
    if (step < 1 || step > this.maxStep) return;
    
    document.querySelectorAll('.form-step').forEach(el => {
      el.classList.remove('active');
    });

    document.querySelector(`.form-step[data-step="${step}"]`)?.classList.add('active');

    document.querySelectorAll('.step-tab').forEach((tab) => {
      tab.classList.toggle('active', parseInt(tab.dataset.step) === step);
    });

    this.currentStep = step;
    this.updateProgress();
    this.updateReview();
    this.updateNavButtons();
  }

  nextStep() {
    if (this.currentStep < this.maxStep) {
      this.goToStep(this.currentStep + 1);
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.goToStep(this.currentStep - 1);
    }
  }

  updateProgress() {
    const progress = (this.currentStep / this.maxStep) * 100;
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = progress + '%';
    const num = document.getElementById('stepNumber');
    if (num) num.textContent = this.currentStep;
  }

  updateNavButtons() {
    const prevBtn = document.getElementById('prevButton');
    const nextBtn = document.getElementById('nextButton');
    const submitBtn = document.getElementById('submitButton');

    if (prevBtn) {
      prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
    }

    if (nextBtn) {
      nextBtn.style.display = this.currentStep < this.maxStep ? 'block' : 'none';
      nextBtn.textContent = this.currentStep === this.maxStep - 1 ? '검토하기 →' : '다음 →';
    }

    if (submitBtn) {
      submitBtn.style.display = this.currentStep === this.maxStep ? 'block' : 'none';
    }
  }

  validateStep(step) {
    if (step === 1) {
      const name = document.getElementById('nameInput')?.value.trim();
      if (!name) {
        alert('채용 건명을 입력하세요');
        return false;
      }
    }
    return true;
  }

  updateReview() {
    if (this.currentStep === 4) {
      document.getElementById('review-name').textContent = 
        document.getElementById('nameInput')?.value || '-';
    }
  }

  reset() {
    this.currentStep = 1;
    this.goToStep(1);
    document.getElementById('candidateForm')?.reset();
  }
}

// Step Form 초기화 (기존 초기화 후 실행)
setTimeout(() => {
  const stepFormManager = new StepFormManager();
  document.getElementById('resetFormButton')?.addEventListener('click', () => {
    stepFormManager.reset();
  });
}, 100);

// ============================================
// Step Form Manager (수정 버전)
// ============================================

class StepFormManager {
  constructor() {
    this.currentStep = 1;
    this.maxStep = 4;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateProgress();
    this.updateNavButtons();
  }

  setupEventListeners() {
    document.querySelectorAll('.step-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const step = parseInt(tab.dataset.step);
        if (this.validateStep(this.currentStep)) {
          this.goToStep(step);
        }
      });
    });

    document.getElementById('prevButton')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.prevStep();
    });

    document.getElementById('nextButton')?.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.validateStep(this.currentStep)) {
        this.nextStep();
      }
    });

    document.getElementById('resetFormButton')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.reset();
    });
  }

  goToStep(step) {
    if (step < 1 || step > this.maxStep) return;
    
    document.querySelectorAll('.form-step').forEach(el => {
      el.classList.remove('active');
    });

    document.querySelector(`.form-step[data-step="${step}"]`)?.classList.add('active');

    document.querySelectorAll('.step-tab').forEach(tab => {
      tab.classList.toggle('active', parseInt(tab.dataset.step) === step);
    });

    this.currentStep = step;
    this.updateProgress();
    this.updateNavButtons();
  }

  nextStep() {
    if (this.currentStep < this.maxStep) {
      this.goToStep(this.currentStep + 1);
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.goToStep(this.currentStep - 1);
    }
  }

  updateProgress() {
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = ((this.currentStep / this.maxStep) * 100) + '%';
    const num = document.getElementById('stepNumber');
    if (num) num.textContent = this.currentStep;
  }

  updateNavButtons() {
    const prevBtn = document.getElementById('prevButton');
    const nextBtn = document.getElementById('nextButton');
    
    if (prevBtn) prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
    if (nextBtn) nextBtn.style.display = this.currentStep < this.maxStep ? 'block' : 'none';
  }

  validateStep(step) {
    if (step === 1) {
      const name = document.getElementById('nameInput')?.value.trim();
      if (!name) {
        alert('채용 건명을 입력하세요');
        return false;
      }
    }
    return true;
  }

  reset() {
    this.currentStep = 1;
    this.goToStep(1);
    document.getElementById('candidateForm')?.reset();
  }
}

// ============================================
// 칸반 보드 드래그드롭 개선
// ============================================

function initKanbanDragDrop() {
  let draggedCard = null;

  document.addEventListener('dragstart', (e) => {
    if (e.target.closest('.kanban-card')) {
      draggedCard = e.target.closest('.kanban-card');
      e.target.closest('.kanban-card').style.opacity = '0.5';
    }
  });

  document.addEventListener('dragend', (e) => {
    if (draggedCard) {
      draggedCard.style.opacity = '1';
      draggedCard = null;
    }
  });

  document.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  document.addEventListener('drop', (e) => {
    e.preventDefault();
    const column = e.target.closest('.kanban-column');
    if (column && draggedCard) {
      const cardsContainer = column.querySelector('.kanban-cards');
      if (cardsContainer && draggedCard.parentElement !== cardsContainer) {
        cardsContainer.appendChild(draggedCard);
        draggedCard.style.opacity = '1';
        
        // 상태 저장
        saveKanbanState();
      }
    }
  });
}

function saveKanbanState() {
  const kanbanState = {};
  document.querySelectorAll('.kanban-column').forEach(col => {
    const status = col.dataset.status || col.getAttribute('data-column');
    const cardIds = Array.from(col.querySelectorAll('.kanban-card')).map(card => card.dataset.id);
    kanbanState[status] = cardIds;
  });
  localStorage.setItem('kanban-state', JSON.stringify(kanbanState));
}

// 페이지 로드 후 초기화
setTimeout(() => {
  window.stepFormManager = new StepFormManager();
  initKanbanDragDrop();
}, 100);

// ============================================
// 초기 샘플 데이터 (app.js 끝에 추가 - 안전함)
// ============================================

const SAMPLE_DATA = [
  {
    id: "sample-2026-001",
    name: "활동지원팀 사회복지사 채용",
    department: "활동지원팀",
    hireCount: 2,
    source: "워크넷",
    noticeType: "normal",
    noticeDate: "2026-05-15",
    confirmedInterviewDate: "2026-06-10",
    workStartDate: "2026-07-01",
    hireDate: "2026-06-20",
    probationMonths: 3,
    status: "진행중",
    memo: "장애인 활동지원 경험 필수",
    interviewees: [
      { id: "int-001", name: "김철수", phone: "010-1234-5678", status: "서류접수", notes: "자격증 보유" },
      { id: "int-002", name: "이영희", phone: "010-2345-6789", status: "서류심사", notes: "경험 3년" }
    ],
    recruitmentFields: []
  },
  {
    id: "sample-2026-002",
    name: "사무행정팀 행정직 채용",
    department: "사무행정팀",
    hireCount: 1,
    source: "사람인",
    noticeType: "normal",
    noticeDate: "2026-05-20",
    confirmedInterviewDate: "2026-06-15",
    workStartDate: "2026-07-15",
    hireDate: "2026-06-28",
    probationMonths: 3,
    status: "진행중",
    memo: "엑셀, 한글 숙련자",
    interviewees: [
      { id: "int-003", name: "박민준", phone: "010-3456-7890", status: "면접대기", notes: "경험 5년" }
    ],
    recruitmentFields: []
  },
  {
    id: "sample-2026-003",
    name: "복지사업팀 프로그램 담당자 채용",
    department: "복지사업팀",
    hireCount: 1,
    source: "홈페이지",
    noticeType: "urgent",
    noticeDate: "2026-06-01",
    confirmedInterviewDate: "2026-06-20",
    workStartDate: "2026-07-10",
    hireDate: "2026-06-30",
    probationMonths: 3,
    status: "진행중",
    memo: "프로그램 경험",
    interviewees: [
      { id: "int-004", name: "정지은", phone: "010-4567-8901", status: "면접완료", notes: "전공" },
      { id: "int-005", name: "최준호", phone: "010-5678-9012", status: "적격심사", notes: "경험" }
    ],
    recruitmentFields: []
  }
];

// 안전한 초기화 (모든 함수 로드 후)
function safeInitializeData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved || saved === '[]' || JSON.parse(saved).length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_DATA));
      console.log('✅ 샘플 데이터 초기화 완료');
      setTimeout(() => location.reload(), 300);
    }
  } catch (e) {
    console.error('⚠️ 초기화 오류:', e);
  }
}

// 페이지 완전히 로드 후 실행
if (document.readyState === 'complete') {
  safeInitializeData();
} else {
  window.addEventListener('load', safeInitializeData);
}
