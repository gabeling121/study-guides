(() => {
  "use strict";
  // ================================================================ CONTENT -- edit this block for each new study guide
  // Everything the kid sees comes from here. Copy the study sheet EXACTLY (confirm with the parent first).
  const GUIDE = {
    title: "My Study Guide",
    storageKey: "TEMPLATE_stats",   // must be unique per guide, e.g. "fractions_stats"; also put it in docs/apps.json
  };
  // Learn cards: one per topic on the sheet
  const TOPICS = [
    { id: "t1", name: "Topic one", color: "#9cc97a", facts: ["First fact", "Second fact"] },
    { id: "t2", name: "Topic two", color: "#f4b26a", facts: ["Another fact"] },
  ];
  const KEYWORDS = [["Word", "what it means"]];
  // Word banks (the test likely has one)
  const BANK = ["Topic one", "Topic two"];
  // Questions. mode: "quiz" (tap from word bank) or "spell" (type it; spelling counts, capitals don't).
  // topic: which Learn card to show after a miss.
  const Q = [
    { id: "q1", mode: "quiz", prompt: "Which topic has the first fact?", answer: "Topic one", bank: BANK, topic: "t1" },
    { id: "s1", mode: "spell", prompt: "Spell the name of topic one.", answer: "Topic one", topic: "t1" },
  ];
  // ================================================================ end of CONTENT

  const MASTER = 3;
  const panel = document.getElementById("panel");
  const byTopic = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const qById = Object.fromEntries(Q.map(q => [q.id, q]));
  document.title = GUIDE.title;
  document.getElementById("title").textContent = GUIDE.title;

  let stats = {};
  try { stats = JSON.parse(localStorage.getItem(GUIDE.storageKey) || "{}"); } catch {}
  const stat = id => stats[id] || { box: 0 };
  function record(id, firstTry) {
    const s = stats[id] ||= { box: 0, right: 0, wrong: 0 };
    if (firstTry) { s.right++; s.box = Math.min(MASTER, s.box + 1); } else { s.wrong++; s.box = Math.max(0, s.box - 1); }
    try { localStorage.setItem(GUIDE.storageKey, JSON.stringify(stats)); } catch {}
  }

  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const stars = id => "★".repeat(stat(id).box) + "☆".repeat(MASTER - stat(id).box);
  const ofMode = m => Q.filter(q => q.mode === m);
  const weakFirst = qs => shuffle([...qs]).sort((a, b) => stat(a.id).box - stat(b.id).box);
  const card = id => { const t = byTopic[id]; return t ? `<div class="card" style="--c:${t.color}"><h3>${esc(t.name)}</h3><ul>${t.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>` : ""; };
  const header = r => `<div class="row"><span class="muted">Question ${Math.min(r.i + 1, r.qs.length)} of ${r.qs.length}</span>
    <span class="muted" style="margin-left:auto">Score: ${r.score}</span></div><div class="bar"><div style="width:${100 * r.i / r.qs.length}%"></div></div>`;
  const INFO = { quiz: ["Quiz", "Tap your answer from the word bank."], spell: ["Spelling ★", "The harder round! Type the answer. Spelling counts (capital letters don't)."] };

  function startScreen(mode) {
    const all = ofMode(mode), weak = all.filter(q => stat(q.id).box < MASTER), size = Math.min(10, all.length);
    panel.innerHTML = `<h2>${INFO[mode][0]}</h2><p>${INFO[mode][1]}</p>
      <button class="btn primary" id="go">Start (${size} questions)</button>
      <button class="btn" id="go-all">All ${all.length} questions</button>
      ${all.some(q => stats[q.id]) && weak.length && weak.length < all.length ? `<button class="btn" id="go-weak">Practice weak spots (${weak.length})</button>` : ""}`;
    panel.querySelector("#go").onclick = () => modeObj.begin(weakFirst(all).slice(0, size));
    panel.querySelector("#go-all").onclick = () => modeObj.begin(weakFirst(all));
    const gw = panel.querySelector("#go-weak"); if (gw) gw.onclick = () => modeObj.begin(weakFirst(weak));
  }
  function endScreen(mode, r) {
    const n = r.qs.length, pct = Math.round(100 * r.score / n);
    panel.innerHTML = `<h2>Round complete!</h2><div class="big">${r.score} / ${n}</div>
      <p>${pct === 100 ? "Perfect score! 🎉" : pct >= 80 ? "Great job! ⭐" : pct >= 50 ? "Good work -- keep practicing!" : "Nice try -- practice makes perfect!"}</p>
      ${r.missed.length ? `<p class="muted">To review:</p><ul>${r.missed.map(id => `<li>${esc(qById[id].prompt)} <b>${esc(qById[id].answer)}</b></li>`).join("")}</ul>
      <button class="btn primary" id="again-miss">Practice these ${r.missed.length}</button>` : ""}
      <button class="btn" id="again">Play again</button>`;
    const am = panel.querySelector("#again-miss"); if (am) am.onclick = () => modeObj.begin(shuffle([...r.missed]));
    panel.querySelector("#again").onclick = () => startScreen(mode);
  }

  const modes = {};
  modes.learn = {
    enter() {
      panel.innerHTML = `<h2>Learn</h2><p class="muted">Read each card. Then try the Quiz!</p>
        ${TOPICS.map(t => card(t.id)).join("")}
        ${KEYWORDS.length ? `<div class="wordbox"><b>Key words</b><br>${KEYWORDS.map(([w, d]) => `<b>${esc(w)}</b> = ${esc(d)}`).join("<br>")}</div>` : ""}
        <div class="row"><button class="btn small" id="print-blank">Print worksheet</button><button class="btn small" id="print-key">Print answer key</button></div>`;
      panel.querySelector("#print-blank").onclick = () => printSheet(false);
      panel.querySelector("#print-key").onclick = () => printSheet(true);
    },
  };
  modes.quiz = {
    enter() { startScreen("quiz"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("quiz", r);
      const q = r.qs[r.i], bank = q.bank.length > 4 ? q.bank : shuffle([...q.bank]);
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div><p class="muted">Word bank:</p>
        <div class="bank ${bank.some(b => b.length > 22) ? "wide" : ""}">${bank.map(b => `<button class="btn" data-a="${esc(b)}">${esc(b)}</button>`).join("")}</div>
        <div class="fb" id="fb"></div><div id="after"></div>`;
      panel.querySelectorAll("[data-a]").forEach(b => b.onclick = () => this.answer(b, q));
    },
    answer(btn, q) {
      const r = this.r, ok = btn.dataset.a === q.answer;
      record(q.id, ok); if (ok) r.score++; else r.missed.push(q.id);
      panel.querySelectorAll("[data-a]").forEach(b => { b.disabled = true; if (b.dataset.a === q.answer) b.classList.add("right"); else if (b === btn) b.classList.add("nope"); });
      const fb = panel.querySelector("#fb"); fb.className = "fb " + (ok ? "good" : "bad"); fb.textContent = ok ? "Correct!" : `The answer is: ${q.answer}`;
      const next = () => { r.i++; this.ask(); };
      if (ok) setTimeout(next, 1000);
      else { panel.querySelector("#after").innerHTML = `${card(q.topic)}<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
    },
  };
  const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim().replace(/^the /, "");
  const diffHtml = (want, got) => [...want].map((c, i) => got[i] !== undefined && got[i].toLowerCase() === c.toLowerCase() ? esc(c) : `<span class="x">${esc(c)}</span>`).join("");
  modes.spell = {
    enter() { startScreen("spell"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("spell", r);
      const q = r.qs[r.i]; r.wrong = false; r.done = false;
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div>
        <input class="answer" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done">
        <button class="btn primary" id="check">Check</button><div class="fb" id="fb"></div><div id="after"></div>`;
      const inp = panel.querySelector("#ans");
      inp.addEventListener("keydown", e => { if (e.key === "Enter") this.check(); });
      panel.querySelector("#check").onclick = () => this.check();
      if (window.matchMedia("(pointer: fine)").matches) inp.focus();
    },
    check() {
      const r = this.r, q = r.qs[r.i]; if (r.done) return;
      const inp = panel.querySelector("#ans"), fb = panel.querySelector("#fb"), v = inp.value; if (!v.trim()) return;
      if (norm(v) === norm(q.answer)) {
        r.done = true; const first = !r.wrong; record(q.id, first); if (first) r.score++; else r.missed.push(q.id);
        fb.className = "fb good"; fb.textContent = first ? `Correct! ${q.answer}` : "Now you've got it!";
        panel.querySelector("#after").innerHTML = ""; inp.blur();
        setTimeout(() => { r.i++; this.ask(); }, first ? 1000 : 1300);
      } else {
        r.wrong = true; fb.className = "fb bad"; fb.textContent = "Not quite. The right spelling is:";
        panel.querySelector("#after").innerHTML = `<p class="diff">${diffHtml(q.answer, v.trim().replace(/^the /i, ""))}</p><p class="muted">Type it correctly to keep going.</p>`;
        inp.select();
      }
    },
  };
  modes.progress = {
    enter() {
      const mastered = Q.filter(q => stat(q.id).box >= MASTER).length;
      panel.innerHTML = `<h2>Your stars</h2><div class="big">${mastered} / ${Q.length} mastered</div>
        <div class="bar"><div style="width:${100 * mastered / Q.length}%"></div></div>
        <p class="muted">Right on the first try = +1 star. A miss = -1 star. 3 stars = mastered!</p>
        <table class="prog">${[...Q].sort((a, b) => stat(a.id).box - stat(b.id).box).map(q => `<tr><td>${esc(q.prompt)} <span class="muted">${esc(q.answer)}</span></td><td class="stars">${stars(q.id)}</td></tr>`).join("")}</table>
        <p><button class="btn small" id="reset">Reset stars</button></p>`;
      panel.querySelector("#reset").onclick = () => { if (confirm("Erase all stars and start over?")) { stats = {}; localStorage.removeItem(GUIDE.storageKey); this.enter(); } };
    },
  };

  // Printable worksheet: every quiz question with a blank line (or the answer, for the key)
  function printSheet(withAnswers) {
    const sheet = document.getElementById("worksheet");
    const bank = [...new Set(ofMode("quiz").flatMap(q => q.bank))];
    sheet.innerHTML = `<h2>${esc(GUIDE.title)}${withAnswers ? " -- Answer key" : ""}</h2><p>Name: ____________________</p>
      <div class="wsbank"><b>Word bank:</b> ${bank.map(esc).join(" &middot; ")}</div>
      <ol>${ofMode("quiz").map(q => `<li>${esc(q.prompt)}<div class="ans">${withAnswers ? esc(q.answer) : "&nbsp;"}</div></li>`).join("")}</ol>`;
    setTimeout(() => window.print(), 60);
  }

  let modeObj = {};
  function setMode(m) {
    modeObj = modes[m];
    document.querySelectorAll("#modes button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
    modeObj.enter();
  }
  document.querySelectorAll("#modes button").forEach(b => b.onclick = () => setMode(b.dataset.mode));
  setMode("learn");
  const ph = new URLSearchParams(location.hash.slice(1)).get("print");   // index.html#print=blank or #print=key
  if (ph) printSheet(ph === "key");
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
