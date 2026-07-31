# Lesson-Planning-Folder
Private POWER Program lesson planner – La Viña MS
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mr. Enciso’s POWER Program – Lesson Planner</title>
  <style>
    :root {
      --navy: #1F4E79;
      --navy-dark: #163A5F;
      --gold: #D4AF37;
      --gold-light: #F0D78C;
      --bg: #0F172A;
      --surface: #1E293B;
      --surface-2: #334155;
      --text: #F1F5F9;
      --text-muted: #94A3B8;
      --border: #475569;
      --success: #22C55E;
      --radius: 10px;
      --shadow: 0 4px 20px rgba(0,0,0,0.4);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
      min-height: 100vh;
    }

    .header {
      background: linear-gradient(135deg, var(--navy-dark), var(--navy));
      border-bottom: 3px solid var(--gold);
      padding: 0.75rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--shadow);
    }

    .logo-img {
      width: 56px;
      height: 56px;
      flex-shrink: 0;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--gold);
      background: #000;
    }

    .header-text h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      letter-spacing: 0.02em;
    }
    .header-text p {
      font-size: 0.8rem;
      color: var(--gold-light);
    }

    .header-actions {
      margin-left: auto;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    button, .btn {
      background: var(--surface-2);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.45rem 0.9rem;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.15s ease;
      font-weight: 500;
    }
    button:hover, .btn:hover {
      background: var(--navy);
      border-color: var(--gold);
      color: white;
    }
    button.primary {
      background: var(--gold);
      color: #1a1a1a;
      border-color: var(--gold);
      font-weight: 600;
    }
    button.primary:hover {
      background: var(--gold-light);
    }

    .app {
      display: grid;
      grid-template-columns: 240px 1fr;
      min-height: calc(100vh - 70px);
    }

    .sidebar {
      background: var(--surface);
      border-right: 1px solid var(--border);
      padding: 1rem 0.75rem;
      overflow-y: auto;
    }

    .sidebar h2 {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      margin: 0 0.5rem 0.75rem;
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      padding: 0.7rem 0.85rem;
      border-radius: 8px;
      cursor: pointer;
      margin-bottom: 0.35rem;
      border: 1px solid transparent;
      transition: all 0.15s;
    }
    .nav-item:hover {
      background: var(--surface-2);
    }
    .nav-item.active {
      background: var(--navy);
      border-color: var(--gold);
    }
    .nav-item .block-name {
      font-weight: 600;
      font-size: 0.9rem;
    }
    .nav-item .block-time {
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .nav-item.active .block-time {
      color: var(--gold-light);
    }

    .content {
      padding: 1.25rem 1.5rem;
      overflow-y: auto;
    }

    .page {
      display: none;
    }
    .page.active {
      display: block;
      animation: fadeIn 0.2s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .week-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
      margin-bottom: 1.25rem;
      padding: 0.85rem 1rem;
      background: var(--surface);
      border-radius: var(--radius);
      border: 1px solid var(--border);
    }
    .week-bar label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--gold-light);
    }
    .week-bar input[type="text"] {
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 0.4rem 0.7rem;
      border-radius: 6px;
      font-size: 0.9rem;
      min-width: 160px;
    }
    .week-bar input:focus {
      outline: 2px solid var(--gold);
      border-color: var(--gold);
    }

    .can-box {
      background: linear-gradient(135deg, rgba(31,78,121,0.35), rgba(30,41,59,0.8));
      border: 1px solid var(--gold);
      border-radius: var(--radius);
      padding: 1rem 1.15rem;
      margin-bottom: 1.25rem;
    }
    .can-box h3 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--gold);
      margin-bottom: 0.5rem;
    }
    .can-box textarea {
      width: 100%;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 6px;
      padding: 0.6rem 0.8rem;
      font-size: 0.9rem;
      resize: vertical;
      min-height: 60px;
      font-family: inherit;
    }
    .can-box textarea:focus {
      outline: 2px solid var(--gold);
    }

    .days-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }

    .day-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .day-card-header {
      background: var(--navy-dark);
      padding: 0.55rem 0.85rem;
      font-weight: 600;
      font-size: 0.9rem;
      border-bottom: 2px solid var(--gold);
    }
    .day-card-body {
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      flex: 1;
    }

    .field label {
      display: block;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--text-muted);
      margin-bottom: 0.2rem;
    }
    .field input,
    .field textarea {
      width: 100%;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 5px;
      padding: 0.45rem 0.6rem;
      font-size: 0.85rem;
      font-family: inherit;
      resize: vertical;
    }
    .field textarea {
      min-height: 70px;
    }
    .field input:focus,
    .field textarea:focus {
      outline: 2px solid var(--gold);
      border-color: var(--gold);
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
    }
    .dash-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1rem;
      cursor: pointer;
      transition: all 0.15s;
    }
    .dash-card:hover {
      border-color: var(--gold);
      transform: translateY(-2px);
      box-shadow: var(--shadow);
    }
    .dash-card h3 {
      color: var(--gold-light);
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
    .dash-card .time {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.6rem;
    }
    .dash-card .status {
      font-size: 0.8rem;
      color: var(--text-muted);
    }
    .dash-card .status.filled {
      color: var(--success);
    }

    .toast {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      background: var(--success);
      color: white;
      padding: 0.7rem 1.2rem;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: var(--shadow);
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.25s ease;
      z-index: 200;
      pointer-events: none;
    }
    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 800px) {
      .app {
        grid-template-columns: 1fr;
      }
      .sidebar {
        display: flex;
        overflow-x: auto;
        padding: 0.6rem;
        gap: 0.4rem;
        border-right: none;
        border-bottom: 1px solid var(--border);
      }
      .sidebar h2 { display: none; }
      .nav-item {
        flex-shrink: 0;
        min-width: 120px;
        margin-bottom: 0;
      }
    }

    @media print {
      .sidebar, .header-actions, .week-bar button { display: none !important; }
      .app { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header class="header">
    <img class="logo-img" src="assets/xe-logo.jpg" alt="XE Logo – Mr. Enciso" width="56" height="56" />
    <div class="header-text">
      <h1>Mr. Enciso’s POWER Program</h1>
      <p>La Viña Middle School · 8th Grade After-School Lesson Planner</p>
    </div>
    <div class="header-actions">
      <button id="btnSave" class="primary">💾 Save</button>
      <button id="btnExport">⬇ Export</button>
      <button id="btnPrint">🖨 Print</button>
    </div>
  </header>

  <div class="app">
    <nav class="sidebar">
      <h2>Time Blocks</h2>
      <div class="nav-item active" data-page="dashboard">
        <span class="block-name">📊 Dashboard</span>
        <span class="block-time">Week overview</span>
      </div>
      <div class="nav-item" data-page="supper">
        <span class="block-name">SUPPER</span>
        <span class="block-time">2:32 – 2:50</span>
      </div>
      <div class="nav-item" data-page="sel">
        <span class="block-name">SEL / CHECK-IN</span>
        <span class="block-time">2:52 – 3:00</span>
      </div>
      <div class="nav-item" data-page="intervention">
        <span class="block-name">INTERVENTION</span>
        <span class="block-time">3:00 – 3:45</span>
      </div>
      <div class="nav-item" data-page="enrichment">
        <span class="block-name">ENRICHMENT</span>
        <span class="block-time">3:49 – 4:15</span>
      </div>
      <div class="nav-item" data-page="spark">
        <span class="block-name">SPARK</span>
        <span class="block-time">4:19 – 5:00</span>
      </div>
      <div class="nav-item" data-page="snack">
        <span class="block-name">SNACK / DISMISSAL</span>
        <span class="block-time">5:00 – 5:15</span>
      </div>
    </nav>

    <main class="content">
      <div class="week-bar">
        <label for="weekOf">Week of:</label>
        <input type="text" id="weekOf" placeholder="e.g. Aug 4 – Aug 8, 2026" />
        <button id="btnLoadWeek" class="primary">Load / Create</button>
        <span id="currentWeekLabel" style="margin-left:auto; font-size:0.85rem; color:var(--text-muted);"></span>
      </div>

      <div class="can-box">
        <h3>C.A.N. Standards Focus</h3>
        <textarea id="canFocus" placeholder="Enter the weekly C.A.N. standards focus or alignment notes here…"></textarea>
      </div>

      <section id="page-dashboard" class="page active">
        <h2 style="margin-bottom:1rem; color:var(--gold-light);">Week Overview</h2>
        <div class="dashboard-grid" id="dashboardGrid"></div>
      </section>

      <section id="page-supper" class="page">
        <h2 style="margin-bottom:0.75rem; color:var(--gold-light);">SUPPER <span style="font-size:0.9rem;color:var(--text-muted);font-weight:400;">2:32 – 2:50</span></h2>
        <div class="days-grid" data-block="supper"></div>
      </section>

      <section id="page-sel" class="page">
        <h2 style="margin-bottom:0.75rem; color:var(--gold-light);">SEL / CHECK-IN <span style="font-size:0.9rem;color:var(--text-muted);font-weight:400;">2:52 – 3:00</span></h2>
        <div class="days-grid" data-block="sel"></div>
      </section>

      <section id="page-intervention" class="page">
        <h2 style="margin-bottom:0.75rem; color:var(--gold-light);">INTERVENTION <span style="font-size:0.9rem;color:var(--text-muted);font-weight:400;">3:00 – 3:45</span></h2>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">Best block for full POWER SEL lessons</p>
        <div class="days-grid" data-block="intervention"></div>
      </section>

      <section id="page-enrichment" class="page">
        <h2 style="margin-bottom:0.75rem; color:var(--gold-light);">ENRICHMENT <span style="font-size:0.9rem;color:var(--text-muted);font-weight:400;">3:49 – 4:15</span></h2>
        <div class="days-grid" data-block="enrichment"></div>
      </section>

      <section id="page-spark" class="page">
        <h2 style="margin-bottom:0.75rem; color:var(--gold-light);">SPARK <span style="font-size:0.9rem;color:var(--text-muted);font-weight:400;">4:19 – 5:00</span></h2>
        <div class="days-grid" data-block="spark"></div>
      </section>

      <section id="page-snack" class="page">
        <h2 style="margin-bottom:0.75rem; color:var(--gold-light);">SNACK / DISMISSAL <span style="font-size:0.9rem;color:var(--text-muted);font-weight:400;">5:00 – 5:15</span></h2>
        <div class="days-grid" data-block="snack"></div>
      </section>
    </main>
  </div>

  <div class="toast" id="toast">Saved</div>

  <script>
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const BLOCKS = {
      supper: { name: "SUPPER", time: "2:32 – 2:50" },
      sel: { name: "SEL / CHECK-IN", time: "2:52 – 3:00" },
      intervention: { name: "INTERVENTION", time: "3:00 – 3:45" },
      enrichment: { name: "ENRICHMENT", time: "3:49 – 4:15" },
      spark: { name: "SPARK", time: "4:19 – 5:00" },
      snack: { name: "SNACK / DISMISSAL", time: "5:00 – 5:15" }
    };

    let currentWeek = "";
    let data = { canFocus: "", blocks: {} };

    function emptyBlock() {
      const d = {};
      DAYS.forEach(day => {
        d[day] = { title: "", objective: "", activities: "", notes: "" };
      });
      return d;
    }

    function ensureData() {
      Object.keys(BLOCKS).forEach(key => {
        if (!data.blocks[key]) data.blocks[key] = emptyBlock();
      });
    }

    function storageKey(week) {
      return `power-plan::${week || "default"}`;
    }

    function saveData() {
      collectFromDOM();
      localStorage.setItem(storageKey(currentWeek), JSON.stringify(data));
      showToast("Saved ✓");
      updateDashboard();
    }

    function loadData(week) {
      currentWeek = week || "default";
      localStorage.setItem("power-plan::lastWeek", currentWeek);
      const raw = localStorage.getItem(storageKey(currentWeek));
      if (raw) {
        try { data = JSON.parse(raw); } catch (e) { data = { canFocus: "", blocks: {} }; }
      } else {
        data = { canFocus: "", blocks: {} };
      }
      ensureData();
      document.getElementById("weekOf").value = currentWeek === "default" ? "" : currentWeek;
      document.getElementById("currentWeekLabel").textContent = currentWeek && currentWeek !== "default" ? `Editing: ${currentWeek}` : "Using default week data";
      document.getElementById("canFocus").value = data.canFocus || "";
      renderAllDayGrids();
      updateDashboard();
    }

    function collectFromDOM() {
      data.canFocus = document.getElementById("canFocus").value;
      document.querySelectorAll(".days-grid").forEach(grid => {
        const block = grid.dataset.block;
        if (!block) return;
        if (!data.blocks[block]) data.blocks[block] = emptyBlock();
        grid.querySelectorAll(".day-card").forEach(card => {
          const day = card.dataset.day;
          data.blocks[block][day] = {
            title: card.querySelector('[data-field="title"]')?.value || "",
            objective: card.querySelector('[data-field="objective"]')?.value || "",
            activities: card.querySelector('[data-field="activities"]')?.value || "",
            notes: card.querySelector('[data-field="notes"]')?.value || ""
          };
        });
      });
    }

    function escapeHtml(str) {
      if (!str) return "";
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    function renderDayCard(blockKey, day) {
      const entry = (data.blocks[blockKey] && data.blocks[blockKey][day]) || { title: "", objective: "", activities: "", notes: "" };
      return `
        <div class="day-card" data-day="${day}">
          <div class="day-card-header"><span>${day}</span></div>
          <div class="day-card-body">
            <div class="field">
              <label>Lesson / Activity Title</label>
              <input type="text" data-field="title" value="${escapeHtml(entry.title)}" placeholder="Title…" />
            </div>
            <div class="field">
              <label>Objective / Focus</label>
              <input type="text" data-field="objective" value="${escapeHtml(entry.objective)}" placeholder="What students will…" />
            </div>
            <div class="field">
              <label>Activities / Content</label>
              <textarea data-field="activities" placeholder="What you will do…">${escapeHtml(entry.activities)}</textarea>
            </div>
            <div class="field">
              <label>Notes / Materials</label>
              <textarea data-field="notes" rows="2" placeholder="Materials, differentiation, reminders…">${escapeHtml(entry.notes)}</textarea>
            </div>
          </div>
        </div>
      `;
    }

    function renderAllDayGrids() {
      document.querySelectorAll(".days-grid").forEach(grid => {
        const block = grid.dataset.block;
        if (!block) return;
        grid.innerHTML = DAYS.map(day => renderDayCard(block, day)).join("");
      });
    }

    function updateDashboard() {
      const grid = document.getElementById("dashboardGrid");
      grid.innerHTML = Object.entries(BLOCKS).map(([key, info]) => {
        const blockData = data.blocks[key] || emptyBlock();
        let filled = 0;
        DAYS.forEach(d => {
          const e = blockData[d];
          if (e && (e.title || e.objective || e.activities || e.notes)) filled++;
        });
        const statusClass = filled > 0 ? "filled" : "";
        const statusText = filled === 0 ? "No lessons yet" : `${filled} of 5 days planned`;
        return `
          <div class="dash-card" data-goto="${key}">
            <h3>${info.name}</h3>
            <div class="time">${info.time}</div>
            <div class="status ${statusClass}">${statusText}</div>
          </div>
        `;
      }).join("");

      grid.querySelectorAll(".dash-card").forEach(card => {
        card.addEventListener("click", () => switchPage(card.dataset.goto));
      });
    }

    function switchPage(pageId) {
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
      const page = document.getElementById(`page-${pageId}`);
      if (page) page.classList.add("active");
      const nav = document.querySelector(`.nav-item[data-page="${pageId}"]`);
      if (nav) nav.classList.add("active");
    }

    function showToast(msg) {
      const t = document.getElementById("toast");
      t.textContent = msg;
      t.classList.add("show");
      setTimeout(() => t.classList.remove("show"), 1800);
    }

    function exportJSON() {
      collectFromDOM();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `POWER-Plan-${currentWeek || "default"}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Exported");
    }

    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", () => switchPage(item.dataset.page));
    });

    document.getElementById("btnSave").addEventListener("click", saveData);
    document.getElementById("btnExport").addEventListener("click", exportJSON);
    document.getElementById("btnPrint").addEventListener("click", () => window.print());
    document.getElementById("btnLoadWeek").addEventListener("click", () => {
      const week = document.getElementById("weekOf").value.trim() || "default";
      loadData(week);
      showToast(week === "default" ? "Loaded default" : `Loaded ${week}`);
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        saveData();
      }
    });

    loadData("default");
  </script>
</body>
</html>