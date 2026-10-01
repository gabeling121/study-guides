// Interactive Study Guides launcher. Reads apps.json and draws the grade buttons and app tiles.
// <body data-root="./" data-grade="7th-grade"> shows one grade; without data-grade it shows all.
(async () => {
  const root = document.body.dataset.root || "./";
  const only = document.body.dataset.grade || null;
  const main = document.getElementById("main");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let data;
  try { data = await (await fetch(root + "apps.json", { cache: "no-cache" })).json(); }
  catch { main.innerHTML = `<p class="empty">Couldn't load the list of study guides. Check your internet connection and try again.</p>`; return; }

  // Stars mastered, read from each guide's saved progress (same website, so it's shared)
  function mastery(app) {
    if (!app.stats) return null;
    try {
      const s = JSON.parse(localStorage.getItem(app.stats.key) || "{}");
      const n = Object.values(s).filter(v => v && v.box >= (app.stats.master || 3)).length;
      return Math.min(n, app.stats.total);
    } catch { return null; }
  }

  function tile(app, grade) {
    const href = root + app.grade + "/" + app.id + "/";
    const m = mastery(app);
    const pr = (app.printables || []).map(p =>
      `<a href="${href}printables/${encodeURIComponent(p.file)}" target="_blank" rel="noopener">📄 ${esc(p.title)}</a>`).join("");
    return `<div class="app" style="--c:${grade.color}">
      <a class="open" href="${href}">
        <div class="icon">${app.emoji || "📘"}</div>
        <h3>${esc(app.title)}</h3>
        <div class="subject">${esc(app.subject || "")}</div>
        <p>${esc(app.description || "")}</p>
        ${m !== null ? `<div class="stars">⭐ ${m} / ${app.stats.total} mastered</div>
          <div class="bar"><div style="width:${100 * m / app.stats.total}%"></div></div>` : ""}
        <span class="go">Open ▸</span>
      </a>
      ${pr ? `<details><summary>Printables</summary>${pr}</details>` : ""}
    </div>`;
  }

  const grades = data.grades.filter(g => !only || g.id === only);
  let html = "";
  if (!only) {
    html += `<div class="grades">${grades.map(g => {
      const n = data.apps.filter(a => a.grade === g.id).length;
      return `<a class="grade-btn" style="--c:${g.color}" href="${root}${g.id}/"><span class="e">${g.emoji}</span>
        <span>${esc(g.name)}<small>${n} study guide${n === 1 ? "" : "s"}</small></span></a>`;
    }).join("")}</div>`;
  }
  for (const g of grades) {
    // newest first
    const apps = data.apps.filter(a => a.grade === g.id).sort((a, b) => (b.added || "").localeCompare(a.added || ""));
    html += `<section class="grade" style="--c:${g.color}"><h2>${g.emoji} ${esc(g.name)}</h2>
      <div class="apps">${apps.length ? apps.map(a => tile(a, g)).join("") : `<p class="empty">No study guides yet.</p>`}</div></section>`;
  }
  main.innerHTML = html;

  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register(root + "sw.js").catch(() => {});
})();
