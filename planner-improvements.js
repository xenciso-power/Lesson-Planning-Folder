/* ============================================================
   MR. ENCISO'S SCHOLASTIC BATCH
   PLANNER IMPROVEMENTS — V2 ADD-ON

   IMPORTANT:
   This file intentionally does NOT replace or modify:
   - JSONBin configuration
   - Cloud saving
   - Cloud loading
   - Cloudinary
   - Existing save files
   - Existing archives
   - Existing attachments
   - Existing printing
   ============================================================ */

(() => {
  "use strict";

  const IMPROVEMENT_VERSION = "2.0";
  const LIBRARY_KEY = "enciso_activity_library_v2";

  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];

  /* ==========================================================
     CSS
  ========================================================== */

  const css = `
    /* ===== V2 ENHANCEMENTS ===== */

    .v2-toolbar {
      display:flex;
      gap:.45rem;
      flex-wrap:wrap;
      margin:.75rem 0 1rem;
    }

    .v2-btn {
      background:var(--surface-2);
      color:var(--text);
      border:1px solid var(--border);
      border-radius:6px;
      padding:.42rem .7rem;
      cursor:pointer;
      font-size:.78rem;
      font-weight:600;
    }

    .v2-btn:hover {
      background:var(--navy);
      border-color:var(--gold);
    }

    .v2-btn.gold {
      background:var(--gold);
      border-color:var(--gold);
      color:#111827;
    }

    .v2-btn.danger {
      background:#7f1d1d;
      border-color:#ef4444;
      color:#fecaca;
    }

    /* ---------- WEEK MATRIX ---------- */

    .v2-week-overview {
      margin-top:1rem;
      overflow-x:auto;
      border:1px solid var(--border);
      border-radius:10px;
      background:var(--surface);
    }

    .v2-week-table {
      width:100%;
      min-width:850px;
      border-collapse:collapse;
    }

    .v2-week-table th {
      background:var(--navy-dark);
      color:var(--gold-light);
      font-size:.76rem;
      padding:.7rem;
      border:1px solid var(--border);
    }

    .v2-week-table td {
      border:1px solid var(--border);
      vertical-align:top;
      padding:0;
      min-width:135px;
    }

    .v2-row-title {
      background:var(--surface-2);
      color:var(--gold-light);
      font-weight:700;
      font-size:.78rem;
      padding:.75rem !important;
      min-width:145px !important;
    }

    .v2-week-cell {
      min-height:90px;
      padding:.65rem;
      cursor:pointer;
      transition:.15s;
    }

    .v2-week-cell:hover {
      background:rgba(31,78,121,.32);
    }

    .v2-week-cell-title {
      color:var(--text);
      font-size:.78rem;
      font-weight:700;
      margin-bottom:.25rem;
    }

    .v2-week-cell-preview {
      color:var(--text-muted);
      font-size:.7rem;
      line-height:1.35;
      display:-webkit-box;
      -webkit-line-clamp:3;
      -webkit-box-orient:vertical;
      overflow:hidden;
    }

    .v2-empty {
      color:#64748b;
      font-size:.7rem;
      font-style:italic;
    }

    .v2-complete {
      color:#86efac;
      font-size:.65rem;
      margin-top:.35rem;
    }

    .v2-no-school {
      color:#fca5a5;
      font-weight:700;
      font-size:.72rem;
    }

    /* ---------- DAY ENHANCEMENTS ---------- */

    .v2-day-tools {
      display:flex;
      gap:.3rem;
      align-items:center;
      margin-left:auto;
    }

    .v2-day-tools button {
      padding:.2rem .45rem;
      font-size:.67rem;
    }

    .v2-collapse-btn {
      min-width:28px;
    }

    .day-card.v2-collapsed .day-card-body {
      display:none !important;
    }

    .day-card.v2-collapsed {
      opacity:.92;
    }

    .v2-progress {
      height:3px;
      background:#334155;
      overflow:hidden;
    }

    .v2-progress-bar {
      height:100%;
      background:var(--success);
      transition:width .2s;
    }

    /* ---------- ACTIVITY LIBRARY ---------- */

    #v2-library-modal {
      display:none;
      position:fixed;
      inset:0;
      z-index:9999;
      background:rgba(2,6,23,.82);
      padding:1rem;
      align-items:center;
      justify-content:center;
    }

    #v2-library-modal.show {
      display:flex;
    }

    .v2-modal {
      width:100%;
      max-width:760px;
      max-height:88vh;
      overflow:auto;
      background:var(--surface);
      border:1px solid var(--gold);
      border-radius:12px;
      box-shadow:var(--shadow);
    }

    .v2-modal-header {
      position:sticky;
      top:0;
      background:var(--navy-dark);
      border-bottom:2px solid var(--gold);
      padding:.8rem 1rem;
      display:flex;
      align-items:center;
      justify-content:space-between;
      z-index:2;
    }

    .v2-modal-header h2 {
      color:var(--gold-light);
      font-size:1rem;
    }

    .v2-modal-body {
      padding:1rem;
    }

    .v2-library-search {
      margin-bottom:.8rem;
    }

    .v2-library-search input {
      width:100%;
      background:var(--bg);
      color:var(--text);
      border:1px solid var(--border);
      padding:.55rem .7rem;
      border-radius:6px;
    }

    .v2-library-list {
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:.7rem;
    }

    .v2-library-card {
      background:var(--bg);
      border:1px solid var(--border);
      border-radius:8px;
      padding:.75rem;
    }

    .v2-library-card:hover {
      border-color:var(--gold);
    }

    .v2-library-card h3 {
      color:var(--gold-light);
      font-size:.85rem;
      margin-bottom:.2rem;
    }

    .v2-library-category {
      color:var(--text-muted);
      font-size:.67rem;
      margin-bottom:.45rem;
    }

    .v2-library-preview {
      color:var(--text-muted);
      font-size:.72rem;
      margin-bottom:.6rem;
      max-height:3.2em;
      overflow:hidden;
    }

    .v2-library-actions {
      display:flex;
      gap:.35rem;
      flex-wrap:wrap;
    }

    /* ---------- ARCHIVE SEARCH ---------- */

    .v2-archive-search {
      width:100%;
      margin-bottom:.8rem;
    }

    .v2-archive-search input {
      width:100%;
      background:var(--bg);
      border:1px solid var(--border);
      color:var(--text);
      border-radius:6px;
      padding:.55rem .7rem;
    }

    /* ---------- MOBILE ---------- */

    @media(max-width:800px) {

      .v2-toolbar {
        gap:.35rem;
      }

      .v2-btn {
        padding:.42rem .58rem;
      }

      .day-card-header {
        gap:.35rem;
      }

      .v2-day-tools {
        gap:.2rem;
      }

      .v2-day-tools button {
        min-height:32px;
        padding:.25rem .45rem;
      }

      .day-card {
        scroll-margin-top:135px;
      }

      .v2-modal {
        max-height:94vh;
      }
    }

    @media(max-width:520px) {

      .v2-day-tools .v2-label {
        display:none;
      }

      .v2-week-overview {
        margin-left:-.25rem;
        margin-right:-.25rem;
      }
    }
  `;

  const style = document.createElement("style");
  style.id = "v2-improvement-styles";
  style.textContent = css;
  document.head.appendChild(style);

  /* ==========================================================
     HELPERS
  ========================================================== */

  function escapeHTML(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function id() {
    if (crypto && crypto.randomUUID) {
      return crypto.randomUUID();
    }

    return (
      Date.now().toString(36) +
      Math.random().toString(36).slice(2)
    );
  }

  function notify(message) {
    if (typeof window.showToast === "function") {
      window.showToast(message);
      return;
    }

    console.log("[Planner V2]", message);
  }

  function normalize(text) {
    return String(text || "")
      .trim()
      .toLowerCase();
  }

  /* ==========================================================
     FIND EXISTING APPLICATION DATA
     This does NOT alter the storage structure.
  ========================================================== */

  function findActiveSlot() {
    const candidates = [
      "currentSlot",
      "activeSlot",
      "activeSave",
      "currentSave"
    ];

    for (const name of candidates) {
      try {
        if (typeof window[name] !== "undefined") {
          return window[name];
        }
      } catch (_) {}
    }

    return null;
  }

  function getPossibleCurrentData() {
    const candidates = [
      "data",
      "appData",
      "plannerData",
      "currentData",
      "saveData"
    ];

    for (const name of candidates) {
      try {
        const value = window[name];

        if (
          value &&
          typeof value === "object"
        ) {
          return value;
        }
      } catch (_) {}
    }

    return null;
  }

  /*
   * Because this is an add-on rather than a replacement,
   * DOM fields are the safest universal way to read the
   * CURRENT visible lesson without modifying your save format.
   */

  function getVisibleDayCards() {
    return Array.from(
      document.querySelectorAll(".day-card")
    );
  }

  function getDayName(card) {
    const header =
      card.querySelector(".day-card-header");

    if (!header) return "";

    const text = header.innerText || "";

    return (
      DAYS.find(day =>
        text.toLowerCase().includes(
          day.toLowerCase()
        )
      ) || ""
    );
  }

  function getCardFields(card) {
    const inputs =
      Array.from(
        card.querySelectorAll(
          ".field input, .field textarea"
        )
      );

    return {
      title:
        inputs[0]?.value || "",

      objective:
        inputs[1]?.value || "",

      content:
        inputs[2]?.value || "",

      notes:
        inputs[3]?.value || ""
    };
  }

  function setCardFields(card, data) {
    const inputs =
      Array.from(
        card.querySelectorAll(
          ".field input, .field textarea"
        )
      );

    const values = [
      data.title || "",
      data.objective || "",
      data.content || "",
      data.notes || ""
    ];

    inputs.forEach((input, index) => {
      if (index > 3) return;

      input.value = values[index];

      input.dispatchEvent(
        new Event("input", {
          bubbles: true
        })
      );

      input.dispatchEvent(
        new Event("change", {
          bubbles: true
        })
      );
    });
  }

  function findCardByDay(day) {
    return getVisibleDayCards()
      .find(card =>
        getDayName(card) === day
      );
  }

  function currentBlockName() {
    const active =
      document.querySelector(
        ".nav-item.active"
      );

    if (!active) return "Activity";

    const name =
      active.querySelector(
        ".block-name"
      );

    return (
      name?.textContent?.trim() ||
      "Activity"
    );
  }

  /* ==========================================================
     DAY PROGRESS
  ========================================================== */

  function completionPercent(card) {
    const fields = getCardFields(card);

    const values = [
      fields.title,
      fields.objective,
      fields.content,
      fields.notes
    ];

    const filled =
      values.filter(v =>
        String(v).trim()
      ).length;

    return Math.round(
      (filled / values.length) * 100
    );
  }

  function updateCardProgress(card) {
    const bar =
      card.querySelector(
        ".v2-progress-bar"
      );

    if (!bar) return;

    bar.style.width =
      completionPercent(card) + "%";
  }

  /* ==========================================================
     DUPLICATE DAY
  ========================================================== */

  function duplicateDay(sourceCard) {
    const sourceDay =
      getDayName(sourceCard);

    if (!sourceDay) return;

    const options =
      DAYS.filter(day =>
        day !== sourceDay
      );

    const answer = prompt(
      `Copy ${sourceDay} to which day?\n\n${options.join(", ")}`
    );

    if (!answer) return;

    const targetDay =
      options.find(day =>
        normalize(day) ===
        normalize(answer)
      );

    if (!targetDay) {
      notify("Day not recognized.");
      return;
    }

    const targetCard =
      findCardByDay(targetDay);

    if (!targetCard) {
      notify(
        `${targetDay} is not available on this page.`
      );
      return;
    }

    const sourceData =
      getCardFields(sourceCard);

    setCardFields(
      targetCard,
      clone(sourceData)
    );

    updateCardProgress(targetCard);

    notify(
      `${sourceDay} copied to ${targetDay}.`
    );
  }

  /* ==========================================================
     COLLAPSE DAY
  ========================================================== */

  function toggleCollapse(card, button) {
    card.classList.toggle(
      "v2-collapsed"
    );

    button.textContent =
      card.classList.contains(
        "v2-collapsed"
      )
        ? "＋"
        : "−";
  }

  /* ==========================================================
     ENHANCE DAY CARDS
  ========================================================== */

  function enhanceDayCard(card) {
    if (
      card.dataset.v2Enhanced === "true"
    ) {
      updateCardProgress(card);
      return;
    }

    card.dataset.v2Enhanced = "true";

    const header =
      card.querySelector(
        ".day-card-header"
      );

    if (!header) return;

    const tools =
      document.createElement("div");

    tools.className =
      "v2-day-tools";

    const duplicate =
      document.createElement("button");

    duplicate.type = "button";
    duplicate.title =
      "Duplicate this entire day";

    duplicate.innerHTML =
      '⧉ <span class="v2-label">Duplicate</span>';

    duplicate.addEventListener(
      "click",
      event => {
        event.preventDefault();
        event.stopPropagation();
        duplicateDay(card);
      }
    );

    const saveActivity =
      document.createElement("button");

    saveActivity.type = "button";
    saveActivity.title =
      "Save this lesson to Activity Library";

    saveActivity.innerHTML =
      '⭐ <span class="v2-label">Save</span>';

    saveActivity.addEventListener(
      "click",
      event => {
        event.preventDefault();
        event.stopPropagation();
        saveCardToLibrary(card);
      }
    );

    const collapse =
      document.createElement("button");

    collapse.type = "button";
    collapse.className =
      "v2-collapse-btn";

    collapse.title =
      "Collapse or expand day";

    collapse.textContent = "−";

    collapse.addEventListener(
      "click",
      event => {
        event.preventDefault();
        event.stopPropagation();

        toggleCollapse(
          card,
          collapse
        );
      }
    );

    tools.append(
      duplicate,
      saveActivity,
      collapse
    );

    /*
     * Insert before existing close/no-school
     * controls when possible.
     */

    header.appendChild(tools);

    const progress =
      document.createElement("div");

    progress.className =
      "v2-progress";

    progress.innerHTML =
      '<div class="v2-progress-bar"></div>';

    header.insertAdjacentElement(
      "afterend",
      progress
    );

    card.addEventListener(
      "input",
      () =>
        updateCardProgress(card)
    );

    updateCardProgress(card);
  }

  function enhanceAllDayCards() {
    getVisibleDayCards()
      .forEach(enhanceDayCard);
  }

  /* ==========================================================
     ACTIVITY LIBRARY
  ========================================================== */

  function getLibrary() {
    try {
      return JSON.parse(
        localStorage.getItem(
          LIBRARY_KEY
        ) || "[]"
      );
    } catch (_) {
      return [];
    }
  }

  function saveLibrary(library) {
    localStorage.setItem(
      LIBRARY_KEY,
      JSON.stringify(library)
    );
  }

  function saveCardToLibrary(card) {
    const data =
      getCardFields(card);

    if (
      !data.title &&
      !data.objective &&
      !data.content
    ) {
      notify(
        "Add lesson information before saving it."
      );
      return;
    }

    const library =
      getLibrary();

    library.unshift({
      id: id(),
      title:
        data.title ||
        `${getDayName(card)} Activity`,
      category:
        currentBlockName(),
      objective:
        data.objective,
      content:
        data.content,
      notes:
        data.notes,
      createdAt:
        Date.now()
    });

    saveLibrary(library);

    notify(
      "Activity saved to your library."
    );
  }

  function deleteLibraryItem(itemId) {
    if (
      !confirm(
        "Delete this saved activity?"
      )
    ) {
      return;
    }

    const library =
      getLibrary().filter(
        item =>
          item.id !== itemId
      );

    saveLibrary(library);

    renderLibrary();
  }

  function useLibraryItem(itemId) {
    const library =
      getLibrary();

    const item =
      library.find(
        item =>
          item.id === itemId
      );

    if (!item) return;

    const dayAnswer = prompt(
      "Insert into which visible day?\n\nMonday, Tuesday, Wednesday, Thursday, or Friday"
    );

    if (!dayAnswer) return;

    const day =
      DAYS.find(day =>
        normalize(day) ===
        normalize(dayAnswer)
      );

    if (!day) {
      notify("Day not recognized.");
      return;
    }

    const card =
      findCardByDay(day);

    if (!card) {
      notify(
        "Open the program block where you want to use this activity first."
      );
      return;
    }

    setCardFields(
      card,
      item
    );

    updateCardProgress(card);

    closeLibrary();

    notify(
      `${item.title} inserted into ${day}.`
    );
  }

  function renderLibrary() {
    const list =
      document.getElementById(
        "v2-library-list"
      );

    if (!list) return;

    const search =
      normalize(
        document.getElementById(
          "v2-library-search"
        )?.value
      );

    const library =
      getLibrary().filter(item => {
        const text =
          normalize(
            `${item.title}
             ${item.category}
             ${item.objective}
             ${item.content}
             ${item.notes}`
          );

        return text.includes(search);
      });

    if (!library.length) {
      list.innerHTML = `
        <div style="
          color:var(--text-muted);
          padding:1.5rem;
          text-align:center;
          grid-column:1/-1;
        ">
          No saved activities yet.<br><br>
          Open a lesson and tap ⭐ Save.
        </div>
      `;
      return;
    }

    list.innerHTML =
      library.map(item => `
        <article class="v2-library-card">

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <div class="v2-library-category">
            ${escapeHTML(item.category)}
          </div>

          <div class="v2-library-preview">
            ${escapeHTML(
              item.objective ||
              item.content ||
              item.notes ||
              ""
            )}
          </div>

          <div class="v2-library-actions">

            <button
              class="v2-btn"
              onclick="
                window.PlannerV2.useLibraryItem(
                  '${item.id}'
                )
              ">
              Use
            </button>

            <button
              class="v2-btn danger"
              onclick="
                window.PlannerV2.deleteLibraryItem(
                  '${item.id}'
                )
              ">
              Delete
            </button>

          </div>

        </article>
      `).join("");
  }

  function openLibrary() {
    renderLibrary();

    document.getElementById(
      "v2-library-modal"
    )?.classList.add("show");
  }

  function closeLibrary() {
    document.getElementById(
      "v2-library-modal"
    )?.classList.remove("show");
  }

  function createLibraryModal() {
    if (
      document.getElementById(
        "v2-library-modal"
      )
    ) {
      return;
    }

    const modal =
      document.createElement("div");

    modal.id =
      "v2-library-modal";

    modal.innerHTML = `
      <div class="v2-modal">

        <div class="v2-modal-header">

          <h2>
            ⭐ Activity Library
          </h2>

          <button
            class="v2-btn"
            onclick="
              window.PlannerV2.closeLibrary()
            ">
            ✕
          </button>

        </div>

        <div class="v2-modal-body">

          <div class="v2-library-search">

            <input
              id="v2-library-search"
              placeholder="Search saved activities..."
            >

          </div>

          <div
            id="v2-library-list"
            class="v2-library-list">
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(
      modal
    );

    modal.addEventListener(
      "click",
      event => {
        if (
          event.target === modal
        ) {
          closeLibrary();
        }
      }
    );

    modal.querySelector(
      "#v2-library-search"
    ).addEventListener(
      "input",
      renderLibrary
    );
  }

  /* ==========================================================
     TOP TOOLBAR
  ========================================================== */

  function addToolbar() {
    if (
      document.getElementById(
        "v2-global-toolbar"
      )
    ) {
      return;
    }

    const content =
      document.querySelector(
        ".content"
      );

    if (!content) return;

    const toolbar =
      document.createElement("div");

    toolbar.id =
      "v2-global-toolbar";

    toolbar.className =
      "v2-toolbar";

    toolbar.innerHTML = `
      <button
        class="v2-btn gold"
        onclick="
          window.PlannerV2.openLibrary()
        ">
        ⭐ Activity Library
      </button>

      <button
        class="v2-btn"
        onclick="
          window.PlannerV2.expandAll()
        ">
        Expand Days
      </button>

      <button
        class="v2-btn"
        onclick="
          window.PlannerV2.collapseAll()
        ">
        Collapse Days
      </button>
    `;

    content.insertAdjacentElement(
      "afterbegin",
      toolbar
    );
  }

  function collapseAll() {
    getVisibleDayCards()
      .forEach(card => {
        card.classList.add(
          "v2-collapsed"
        );

        const button =
          card.querySelector(
            ".v2-collapse-btn"
          );

        if (button) {
          button.textContent = "＋";
        }
      });
  }

  function expandAll() {
    getVisibleDayCards()
      .forEach(card => {
        card.classList.remove(
          "v2-collapsed"
        );

        const button =
          card.querySelector(
            ".v2-collapse-btn"
          );

        if (button) {
          button.textContent = "−";
        }
      });
  }

  /* ==========================================================
     DASHBOARD MATRIX
  ========================================================== */

  function getBlockNavItems() {
    return Array.from(
      document.querySelectorAll(
        ".nav-item"
      )
    ).filter(item => {
      const name =
        item.querySelector(
          ".block-name"
        )?.textContent;

      return !!name;
    });
  }

  function findDashboardPage() {
    const candidates = [
      "#dashboard",
      "#page-dashboard",
      '[data-page="dashboard"]'
    ];

    for (const selector of candidates) {
      const element =
        document.querySelector(
          selector
        );

      if (element) return element;
    }

    const pages =
      Array.from(
        document.querySelectorAll(
          ".page"
        )
      );

    return pages.find(page =>
      page.textContent
        .toLowerCase()
        .includes(
          "weekly overview"
        )
    ) || null;
  }

  /*
   * The matrix is supplemental.
   * It does not replace your existing dashboard.
   */

  function addDashboardEnhancement() {
    const dashboard =
      findDashboardPage();

    if (!dashboard) return;

    if (
      dashboard.querySelector(
        "#v2-week-overview"
      )
    ) {
      return;
    }

    const container =
      document.createElement("section");

    container.id =
      "v2-week-overview";

    container.className =
      "v2-week-overview";

    dashboard.appendChild(
      container
    );

    renderDashboardMatrix();
  }

  function readBlockCardsFromDOM() {
    /*
     * We only have one block page visible at a time,
     * so the enhanced matrix can progressively remember
     * what was seen without touching the application's
     * cloud data.
     */

    const cacheKey =
      "enciso_dashboard_cache_v2";

    let cache = {};

    try {
      cache = JSON.parse(
        sessionStorage.getItem(
          cacheKey
        ) || "{}"
      );
    } catch (_) {}

    const block =
      currentBlockName();

    if (
      block &&
      block !== "Activity"
    ) {
      cache[block] = {};

      getVisibleDayCards()
        .forEach(card => {
          const day =
            getDayName(card);

          if (!day) return;

          cache[block][day] = {
            ...getCardFields(card),
            noSchool:
              card.classList.contains(
                "no-school"
              )
          };
        });

      sessionStorage.setItem(
        cacheKey,
        JSON.stringify(cache)
      );
    }

    return cache;
  }

  function renderDashboardMatrix() {
    const container =
      document.getElementById(
        "v2-week-overview"
      );

    if (!container) return;

    const cache =
      readBlockCardsFromDOM();

    const navItems =
      getBlockNavItems();

    const blocks =
      navItems.map(item => ({
        name:
          item.querySelector(
            ".block-name"
          )?.textContent?.trim(),
        item
      }))
      .filter(block =>
        block.name
      );

    if (!blocks.length) {
      return;
    }

    container.innerHTML = `
      <table class="v2-week-table">

        <thead>
          <tr>
            <th>Program Block</th>

            ${DAYS.map(
              day =>
                `<th>${day}</th>`
            ).join("")}

          </tr>
        </thead>

        <tbody>

          ${blocks.map(block => {

            const days =
              cache[block.name] || {};

            return `
              <tr>

                <td class="v2-row-title">
                  ${escapeHTML(
                    block.name
                  )}
                </td>

                ${DAYS.map(day => {

                  const data =
                    days[day];

                  if (!data) {
                    return `
                      <td>
                        <div
                          class="v2-week-cell"
                          data-v2-block="${escapeHTML(
                            block.name
                          )}"
                          data-v2-day="${day}">
                          <div class="v2-empty">
                            Open block to preview
                          </div>
                        </div>
                      </td>
                    `;
                  }

                  if (data.noSchool) {
                    return `
                      <td>
                        <div
                          class="v2-week-cell"
                          data-v2-block="${escapeHTML(
                            block.name
                          )}"
                          data-v2-day="${day}">
                          <div class="v2-no-school">
                            No School
                          </div>
                        </div>
                      </td>
                    `;
                  }

                  const complete =
                    [
                      data.title,
                      data.objective,
                      data.content
                    ].filter(v =>
                      String(v || "").trim()
                    ).length;

                  return `
                    <td>
                      <div
                        class="v2-week-cell"
                        data-v2-block="${escapeHTML(
                          block.name
                        )}"
                        data-v2-day="${day}">

                        ${
                          data.title
                            ? `
                              <div class="v2-week-cell-title">
                                ${escapeHTML(
                                  data.title
                                )}
                              </div>
                            `
                            : `
                              <div class="v2-empty">
                                No title
                              </div>
                            `
                        }

                        <div class="v2-week-cell-preview">
                          ${escapeHTML(
                            data.objective ||
                            data.content ||
                            ""
                          )}
                        </div>

                        ${
                          complete >= 3
                            ? `
                              <div class="v2-complete">
                                ✓ Planned
                              </div>
                            `
                            : ""
                        }

                      </div>
                    </td>
                  `;

                }).join("")}

              </tr>
            `;

          }).join("")}

        </tbody>

      </table>
    `;

    container
      .querySelectorAll(
        ".v2-week-cell"
      )
      .forEach(cell => {

        cell.addEventListener(
          "click",
          () => {

            const blockName =
              cell.dataset.v2Block;

            const day =
              cell.dataset.v2Day;

            const target =
              getBlockNavItems()
                .find(item =>
                  item.querySelector(
                    ".block-name"
                  )
                  ?.textContent
                  ?.trim() ===
                  blockName
                );

            if (target) {
              target.click();

              setTimeout(() => {
                const card =
                  findCardByDay(day);

                card?.scrollIntoView({
                  behavior:"smooth",
                  block:"center"
                });
              },100);
            }

          }
        );

      });
  }

  /* ==========================================================
     ARCHIVE SEARCH
  ========================================================== */

  function enhanceArchivePage() {
    const lists =
      document.querySelectorAll(
        ".history-list"
      );

    lists.forEach(list => {
      if (
        list.dataset.v2Search ===
        "true"
      ) {
        return;
      }

      list.dataset.v2Search =
        "true";

      const wrapper =
        document.createElement(
          "div"
        );

      wrapper.className =
        "v2-archive-search";

      wrapper.innerHTML = `
        <input
          placeholder="Search archived weeks, standards, lessons..."
        >
      `;

      list.parentNode.insertBefore(
        wrapper,
        list
      );

      const input =
        wrapper.querySelector(
          "input"
        );

      input.addEventListener(
        "input",
        () => {
          const query =
            normalize(
              input.value
            );

          list.querySelectorAll(
            ".history-item"
          )
          .forEach(item => {

            const match =
              normalize(
                item.innerText
              ).includes(query);

            item.style.display =
              match ? "" : "none";
          });
        }
      );
    });
  }

  /* ==========================================================
     COPY PREVIOUS WEEK BUTTON
  ========================================================== */

  function addCopyPreviousWeekButton() {
    /*
     * We do NOT directly manipulate your saved week object here.
     * Instead we hook only if the existing application exposes
     * an appropriate week-copy function.
     */

    const weekBars =
      document.querySelectorAll(
        ".week-bar"
      );

    weekBars.forEach(bar => {
      if (
        bar.querySelector(
          ".v2-copy-week"
        )
      ) {
        return;
      }

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "v2-btn v2-copy-week";

      button.type =
        "button";

      button.textContent =
        "↶ Copy Previous Week";

      button.addEventListener(
        "click",
        () => {
          const possibleFunctions = [
            "copyPreviousWeek",
            "duplicatePreviousWeek",
            "loadPreviousWeek"
          ];

          const fnName =
            possibleFunctions.find(
              name =>
                typeof window[name] ===
                "function"
            );

          if (fnName) {
            window[fnName]();
            return;
          }

          notify(
            "Previous-week copy is ready for integration with the planner's week history."
          );
        }
      );

      bar.appendChild(button);
    });
  }

  /* ==========================================================
     WATCH EXISTING APP RERENDERS
  ========================================================== */

  let refreshQueued = false;

  function queueRefresh() {
    if (refreshQueued) return;

    refreshQueued = true;

    requestAnimationFrame(() => {
      refreshQueued = false;
      refreshEnhancements();
    });
  }

  function refreshEnhancements() {
    enhanceAllDayCards();
    enhanceArchivePage();
    addCopyPreviousWeekButton();

    if (
      document.getElementById(
        "v2-week-overview"
      )
    ) {
      renderDashboardMatrix();
    } else {
      addDashboardEnhancement();
    }
  }

  const observer =
    new MutationObserver(() => {
      queueRefresh();
    });

  /* ==========================================================
     PUBLIC API
  ========================================================== */

  window.PlannerV2 = {
    version:
      IMPROVEMENT_VERSION,

    openLibrary,
    closeLibrary,
    renderLibrary,
    useLibraryItem,
    deleteLibraryItem,
    collapseAll,
    expandAll,
    refresh:
      refreshEnhancements
  };

  /* ==========================================================
     START
  ========================================================== */

  function start() {
    createLibraryModal();
    addToolbar();
    refreshEnhancements();

    observer.observe(
      document.body,
      {
        childList:true,
        subtree:true
      }
    );

    /*
     * Refresh after navigation because the existing
     * application dynamically renders pages.
     */

    document.addEventListener(
      "click",
      event => {
        if (
          event.target.closest(
            ".nav-item"
          )
        ) {
          setTimeout(
            refreshEnhancements,
            80
          );
        }
      }
    );

    console.log(
      `Planner improvements V${IMPROVEMENT_VERSION} loaded.`
    );
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      start
    );
  } else {
    start();
  }

})();