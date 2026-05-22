const STORAGE_KEY = "recruitment-calendar-recruitments-v2";
const DEPARTMENTS = ["사무행정팀", "활동지원팀", "복지사업팀", "복지사업팀(주택)"];
const INTERVIEWEE_STATUSES = ["서류접수", "서류심사", "면접대기", "면접완료", "적격심사", "채용", "불합격"];
const CHECKLIST_ITEMS = ["공고 작성", "공고 게시", "홈페이지 등록", "서류심사", "면접 배정", "적격심사", "채용 통보"];
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
};
const eventLabels = {
  notice: "공고",
  document: "접수",
  deadline: "서류마감",
  screening: "서류심사",
  interview: "면접",
  eligibility: "적격여부",
  hire: "채용",
  probation: "수습종료",
};

const state = {
  currentMonth: startOfMonth(new Date()),
  selectedDate: toDateKey(new Date()),
  candidates: loadCandidates(),
  filters: new Set(["deadline", "interview"]),
  search: "",
  calendarSize: ["compact", "normal"].includes(localStorage.getItem("recruitment-calendar-size")) ? localStorage.getItem("recruitment-calendar-size") : "normal",
  activeView: localStorage.getItem("recruitment-active-view") || "calendar",
  rightTab: "day",
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
  executionNo: document.querySelector("#executionNoInput"),
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
  downloadHwpxButton: document.querySelector("#downloadHwpxButton"),
  searchInput: document.querySelector("#searchInput"),
  monthTitle: document.querySelector("#monthTitle"),
  selectedDateTitle: document.querySelector("#selectedDateTitle"),
  calendarGrid: document.querySelector("#calendarGrid"),
  selectedEvents: document.querySelector("#selectedEvents"),
  addSelectedInterviewButton: document.querySelector("#addSelectedInterviewButton"),
  addSelectedDeadlineButton: document.querySelector("#addSelectedDeadlineButton"),
  candidateList: document.querySelector("#candidateList"),
  searchResults: document.querySelector("#searchResults"),
  calendarPanel: document.querySelector(".calendar-panel"),
  deadlineBanner: document.querySelector("#deadlineBanner"),
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

function bindEvents() {
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

  els.exportButton.addEventListener("click", exportCsv);
  els.downloadHwpxButton.addEventListener("click", downloadHwpxNotice);
  els.addSelectedInterviewButton.addEventListener("click", addInterviewForSelectedDate);
  els.addSelectedDeadlineButton.addEventListener("click", addDeadlineForSelectedDate);
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

  [els.noticeType, els.noticeDate, els.confirmedInterviewDate, els.hireDate, els.probationMonths].forEach((input) => {
    input.addEventListener("input", renderSchedulePreview);
    input.addEventListener("change", renderSchedulePreview);
  });
}

function saveCandidateFromForm() {
  const id = els.candidateId.value || crypto.randomUUID();
  const candidate = {
    id,
    name: els.name.value.trim(),
    department: els.department.value.trim(),
    hireCount: Number(els.hireCount.value || 1),
    source: els.source.value,
    noticeType: els.noticeType.value,
    noticeDate: els.noticeDate.value,
    executionNo: getExecutionNoFromInput(),
    confirmedInterviewDate: els.confirmedInterviewDate.value,
    workStartDate: els.workStartDate.value,
    hireDate: els.hireDate.value,
    probationMonths: Number(els.probationMonths.value || 0),
    status: els.status.value,
    memo: els.memo.value.trim(),
    interviewees: getIntervieweesFromRows(),
    recruitmentFields: getRecruitmentFieldsFromRows(),
    updatedAt: new Date().toISOString(),
  };

  const existingIndex = state.candidates.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    state.candidates[existingIndex] = candidate;
  } else {
    state.candidates.unshift(candidate);
  }

  persist();
  resetForm();
  render();
}

function render() {
  renderViewTabs();
  renderDeadlineBanner();
  renderSchedulePreview();
  renderSummary();
  renderCalendarSize();
  renderCalendar();
  renderRightPanelTabs();
  renderSelectedDay();
  renderCandidateList();
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
  els.schedulePreview.innerHTML = `
    <dt>1차 접수</dt><dd>${formatShortDate(schedule.documentStartDate)} ~ ${formatShortDate(schedule.documentEndDate)}</dd>
    <dt>서류심사</dt><dd>${formatShortDate(schedule.screeningDate)}</dd>
    <dt>2차 면접</dt><dd>${interviewText}</dd>
    <dt>적격여부</dt><dd>${formatShortDate(schedule.eligibilityStartDate)} ~ ${formatShortDate(schedule.eligibilityEndDate)}</dd>
    <dt>근무개시</dt><dd>${draft.workStartDate ? formatShortDate(parseDate(draft.workStartDate)) : "추후 협의"}</dd>
  `;
}

function renderCalendar() {
  els.monthTitle.textContent = formatMonth(state.currentMonth);
  els.calendarGrid.innerHTML = "";

  const first = startOfMonth(state.currentMonth);
  const calendarStart = addDays(first, -first.getDay());
  const events = safeGetFilteredEvents();

  for (let index = 0; index < 42; index += 1) {
    const date = addDays(calendarStart, index);
    const dateKey = toDateKey(date);
    const dayEvents = events.filter((event) => event.date === dateKey);
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "day-cell",
      date.getMonth() !== state.currentMonth.getMonth() ? "other-month" : "",
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

    dayEvents.slice(0, 3).forEach((event) => {
      const chip = document.createElement("span");
      chip.className = `event-chip ${event.type}`;
      chip.draggable = true;
      chip.title = "끌어서 다른 날짜로 이동";
      chip.addEventListener("click", (clickEvent) => {
        clickEvent.stopPropagation();
        state.selectedDate = event.date;
        state.currentMonth = startOfMonth(parseDate(event.date));
        state.rightTab = "day";
        render();
      });
      chip.addEventListener("dragstart", (dragEvent) => {
        dragEvent.dataTransfer.setData("text/plain", JSON.stringify({ candidateId: event.candidate.id, type: event.type, date: event.date }));
        dragEvent.dataTransfer.effectAllowed = "move";
        chip.classList.add("dragging");
      });
      chip.addEventListener("dragend", () => chip.classList.remove("dragging"));
      chip.textContent =
        event.type === "deadline"
          ? `서류마감 · ${event.candidate.department || event.candidate.name}`
          : `${noticeTypePrefix(event.candidate)} ${event.candidate.department || event.candidate.name} · ${event.candidate.hireCount || 1}명`;
      button.append(chip);
    });

    if (dayEvents.length > 3) {
      const more = document.createElement("span");
      more.className = "more-events";
      more.textContent = `+${dayEvents.length - 3}건`;
      button.append(more);
    }

    els.calendarGrid.append(button);
  }
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
        <p><strong>다음 일정:</strong> ${schedule ? `서류심사 ${escapeHtml(formatShortDate(schedule.screeningDate))}, 면접 예정 ${escapeHtml(formatShortDate(schedule.plannedInterviewDate))}` : "미정"}</p>
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
  els.noticeDate.value = toDateKey(addDays(parseDate(state.selectedDate), els.noticeType.value === "normal" ? -16 : -8));
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
    const offset = candidate.noticeType === "normal" ? 16 : 8;
    candidate.noticeDate = toDateKey(addDays(parseDate(targetDate), -offset));
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
  const message = confirmedInterviewDateMatches
    ? `${label} 일정을 삭제할까요?\n면접 확정일만 비우고 채용건은 유지합니다.`
    : `${label}을 삭제할까요?\n자동 생성 일정이라 채용건 전체가 삭제됩니다.`;
  if (!confirm(message)) return;

  if (confirmedInterviewDateMatches) {
    candidate.confirmedInterviewDate = "";
    candidate.updatedAt = new Date().toISOString();
  } else {
    state.candidates = state.candidates.filter((item) => item.id !== candidate.id);
    if (els.candidateId.value === candidate.id) resetForm();
  }
  persist();
  render();
}

function renderCandidateList() {
  const candidates = getVisibleCandidates();
  renderCandidateCollection(els.candidateList, candidates, "조건에 맞는 채용건이 없습니다.");
}

function renderSearchResults() {
  const candidates = state.search ? getVisibleCandidates() : [];
  renderCandidateCollection(els.searchResults, candidates, state.search ? "검색 결과가 없습니다." : "검색어를 입력하면 결과가 표시됩니다.");
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
          <span>${escapeHtml(candidate.department || "부서 미입력")} · ${escapeHtml(noticeTypeLabel(candidate))} · ${Number(candidate.hireCount || 1)}명 채용</span>
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
  els.executionNo.value = executionDigits(candidate.executionNo || "");
  els.confirmedInterviewDate.value = candidate.confirmedInterviewDate || "";
  els.workStartDate.value = candidate.workStartDate || "";
  els.hireDate.value = candidate.hireDate;
  els.probationMonths.value = candidate.probationMonths;
  els.status.value = candidate.status;
  els.memo.value = candidate.memo;
  renderIntervieweeRows(candidate.interviewees || []);
  renderRecruitmentFieldRows(candidate.recruitmentFields || defaultRecruitmentFields(candidate));
  els.deleteButton.disabled = false;
  renderSchedulePreview();
  els.name.focus();
}

function resetForm() {
  els.form.reset();
  els.candidateId.value = "";
  els.noticeType.value = "urgent";
  els.executionNo.value = "";
  els.hireCount.value = 1;
  els.probationMonths.value = 3;
  renderIntervieweeRows([]);
  renderRecruitmentFieldRows([]);
  els.deleteButton.disabled = true;
  renderSchedulePreview();
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
  return state.candidates.flatMap((candidate) => {
    const events = [];
    const schedule = buildSchedule(candidate);
    const interviewDate = getInterviewDate(candidate);
    if (schedule) {
      events.push({
        type: "deadline",
        date: toDateKey(schedule.documentEndDate),
        candidate,
        detail: "서류마감",
      });
    }
    if (interviewDate) {
      events.push({
        type: "interview",
        date: interviewDate,
        candidate,
        detail: candidate.confirmedInterviewDate ? "면접 확정" : "면접 예정",
      });
    }
    return events;
  });
}

function getVisibleCandidates() {
  return state.candidates.filter(matchesSearch).sort((a, b) => {
    const scheduleA = buildSchedule(a);
    const scheduleB = buildSchedule(b);
    const dateA = a.confirmedInterviewDate || (scheduleA ? toDateKey(scheduleA.plannedInterviewDate) : "") || a.noticeDate || a.hireDate || "9999-12-31";
    const dateB = b.confirmedInterviewDate || (scheduleB ? toDateKey(scheduleB.plannedInterviewDate) : "") || b.noticeDate || b.hireDate || "9999-12-31";
    return dateA.localeCompare(dateB) || (a.name || "").localeCompare(b.name || "", "ko");
  });
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

function departmentKey(department) {
  return {
    사무행정팀: "admin",
    활동지원팀: "activity",
    복지사업팀: "welfare",
    "복지사업팀(주택)": "housing",
  }[department] || "admin";
}

function eventOrder(type) {
  return { deadline: 1, notice: 2, document: 3, screening: 4, interview: 5, eligibility: 6, hire: 7, probation: 8 }[type] || 9;
}

function exportCsv() {
  const headers = ["채용건명", "부서", "채용명수", "공고유형", "시행번호", "공고일", "2차면접예정일", "면접확정일", "면접대상자", "최종상태", "메모"];
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
    candidate.executionNo || "",
    candidate.noticeDate,
    schedule ? toDateKey(schedule.plannedInterviewDate) : "",
    candidate.confirmedInterviewDate,
    formatInterviewees(candidate.interviewees || []).replaceAll("\n", " / "),
    candidate.status,
    candidate.memo,
  ];
}

async function downloadHwpxNotice() {
  const draft = getDraftRecruitment();
  if (!draft.name || !draft.department || !draft.noticeDate) {
    alert("채용건명, 부서, 공고일을 먼저 입력하세요.");
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
  const dutyLinesCell = recruitmentFields.map((field, index) => `${index + 1}. ${field.duty}`).join("\n");
  const departmentLine = recruitmentFields.map((field) => `– ${field.department} (${field.count}명)`).join("\n");
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
    serial,
    fileTitle,
    title: `${shortType} 직원 채용공고`,
    mainTitle: `[${shortType}][공고 ${serial}호] ${year}년 ${jobTitle}(${department}) 채용 공고`,
    departmentLine,
    periodLine: schedule ? `${formatNoticeDate(schedule.documentStartDate)} ~ ${formatNoticeDate(schedule.documentEndDate)}` : "",
    screeningLine: schedule ? formatNoticeDateWithWeekday(schedule.screeningDate) : "",
    interviewLine: schedule ? `${candidate.confirmedInterviewDate ? "" : "(예정) "}${formatNoticeDateWithWeekday(candidate.confirmedInterviewDate ? parseDate(candidate.confirmedInterviewDate) : schedule.plannedInterviewDate)}` : "",
    eligibilityLine: schedule ? `(예정) ${formatNoticeDate(schedule.eligibilityStartDate)} ~ ${formatNoticeDate(schedule.eligibilityEndDate)}` : "",
    workStartLine: candidate.workStartDate ? formatNoticeDateWithWeekday(parseDate(candidate.workStartDate)) : "추후 협의",
    dutyLine: primaryField.duty,
    noticeDateLine: formatNoticeDate(noticeDate),
    reasonLine:
      candidate.noticeType === "normal"
        ? "채용계획에 따라 센터 운영에 필요한 인력을 충원하고자 함"
        : "기존 직원의 퇴사 및 장기 부재로 인해 필수적인 업무 공백이 발생하여 대체 인력의 신속한 충원이 필요",
  };
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
    ...notice.recruitmentFields.map((field, index) => `${index + 1}. ${field.fieldName} / ${field.count}명 / ${field.duty}`),
    `공고유형: ${notice.noticeType}`,
    `채용기간: ${notice.periodLine}`,
    `서류심사: ${notice.screeningLine}`,
    `2차 면접: ${notice.interviewLine}`,
    `3차 적격여부 확인: ${notice.eligibilityLine}`,
    `근무개시일: ${notice.workStartLine}`,
  ].join("\n");
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.candidates));
}

function loadCandidates() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return normalizeCandidates(JSON.parse(saved));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  return [
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
  ];
}

function normalizeCandidates(candidates) {
  return candidates.map((candidate) => ({
    ...candidate,
    noticeType: candidate.noticeType || "urgent",
    noticeDate: candidate.noticeDate || candidate.documentDate || "",
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

function displayRecruitmentName(candidate) {
  const name = String(candidate.name || "").trim() || `${candidate.department || "부서"} 직원 채용`;
  if (/^\[(긴급|일반)\]/.test(name)) return name;
  return `${noticeTypePrefix(candidate)} ${name}`;
}

function displayRecruitmentListTitle(candidate) {
  return `${noticeTypePrefix(candidate)} ${displayExecutionNo(candidate)} · ${stripNoticePrefix(candidate.name || `${candidate.department || "부서"} 직원 채용`)}`;
}

function displayExecutionNo(candidate) {
  return candidate.executionNo || normalizeExecutionNo("", new Date().getFullYear());
}

function stripNoticePrefix(value) {
  return String(value || "").replace(/^\[(긴급|일반)\]\s*/, "");
}

function normalizeExecutionNo(value, year) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return `GR${year}-A-000`;
  if (/^\d{1,3}$/.test(trimmed)) return `GR2026-A-${trimmed.padStart(3, "0")}`;
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
    <input data-field-setting="duty" type="text" placeholder="주요직무" value="${escapeHtml(normalized.duty)}" />
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
    },
  ];
}

function presetKeyForDepartment(department) {
  if (department === "사무행정팀") return "admin";
  if (department === "활동지원팀") return "activity";
  return "welfare";
}

function normalizeInterviewees(people, fallbackName = "", fallbackPhone = "") {
  if (Array.isArray(people) && people.length) {
    return people.map((person) => ({
      id: person.id || crypto.randomUUID(),
      name: person.name || "",
      phone: person.phone || "",
      email: person.email || "",
      status: INTERVIEWEE_STATUSES.includes(person.status) ? person.status : "면접대기",
      updatedAt: person.updatedAt || "",
    }));
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
  const documentEndOffset = candidate.noticeType === "normal" ? 16 : 8;
  const documentStartDate = new Date(noticeDate);
  const documentEndDate = addDays(noticeDate, documentEndOffset);
  const screeningDate = addDays(documentEndDate, 1);
  const plannedInterviewDate = addDays(documentEndDate, 2);
  const interviewBaseDate = candidate.confirmedInterviewDate ? parseDate(candidate.confirmedInterviewDate) : plannedInterviewDate;
  const eligibilityStartDate = nextBusinessDay(addDays(interviewBaseDate, 1));
  const eligibilityEndDate = nextBusinessDay(addDays(eligibilityStartDate, 1));
  return {
    noticeDate,
    documentStartDate,
    documentEndDate,
    screeningDate,
    plannedInterviewDate,
    eligibilityStartDate,
    eligibilityEndDate,
  };
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
