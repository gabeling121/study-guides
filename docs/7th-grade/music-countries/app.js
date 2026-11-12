(() => {
  "use strict";
  // ================================================================ CONTENT -- edit this block for each new study guide
  // Everything the kid sees comes from here. Copy the study sheet EXACTLY (confirm with the parent first).
  const GUIDE = {"title":"Music, Dance & Countries","storageKey":"music_countries_stats"};
  const PAIRS = [["Salsa","Cuba"],["Bachata","Dominican Republic"],["Mariachi","Mexico"],["Tango","Argentina"],["Reggaeton","Panama"],["Merengue","Dominican Republic"],["Flamenco","Spain"],["Samba","Brazil"]];
  const TOPICS = [{"id":"t0","name":"Salsa","color":"#a8c7e0","facts":["Cuba"]},{"id":"t1","name":"Bachata","color":"#a8c7e0","facts":["Dominican Republic"]},{"id":"t2","name":"Mariachi","color":"#a8c7e0","facts":["Mexico"]},{"id":"t3","name":"Tango","color":"#a8c7e0","facts":["Argentina"]},{"id":"t4","name":"Reggaeton","color":"#a8c7e0","facts":["Panama"]},{"id":"t5","name":"Merengue","color":"#a8c7e0","facts":["Dominican Republic"]},{"id":"t6","name":"Flamenco","color":"#a8c7e0","facts":["Spain"]},{"id":"t7","name":"Samba","color":"#a8c7e0","facts":["Brazil"]}];
  const KEYWORDS = [];
  const Q = [{"id":"quiz-country-0","mode":"quiz","prompt":"Which country is paired with Salsa?","answer":"Cuba","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t0"},{"id":"quiz-country-1","mode":"quiz","prompt":"Which country is paired with Bachata?","answer":"Dominican Republic","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t1"},{"id":"quiz-country-2","mode":"quiz","prompt":"Which country is paired with Mariachi?","answer":"Mexico","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t2"},{"id":"quiz-country-3","mode":"quiz","prompt":"Which country is paired with Tango?","answer":"Argentina","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t3"},{"id":"quiz-country-4","mode":"quiz","prompt":"Which country is paired with Reggaeton?","answer":"Panama","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t4"},{"id":"quiz-country-5","mode":"quiz","prompt":"Which country is paired with Merengue?","answer":"Dominican Republic","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t5"},{"id":"quiz-country-6","mode":"quiz","prompt":"Which country is paired with Flamenco?","answer":"Spain","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t6"},{"id":"quiz-country-7","mode":"quiz","prompt":"Which country is paired with Samba?","answer":"Brazil","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t7"},{"id":"quiz-style-0","mode":"quiz","prompt":"Cuba: name the style from your list.","answer":"Salsa","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t0","both":false},{"id":"quiz-style-1","mode":"quiz","prompt":"Dominican Republic: name BOTH styles from your list.","answer":"Bachata and Merengue","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t1","both":true},{"id":"quiz-style-2","mode":"quiz","prompt":"Mexico: name the style from your list.","answer":"Mariachi","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t2","both":false},{"id":"quiz-style-3","mode":"quiz","prompt":"Argentina: name the style from your list.","answer":"Tango","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t3","both":false},{"id":"quiz-style-4","mode":"quiz","prompt":"Panama: name the style from your list.","answer":"Reggaeton","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t4","both":false},{"id":"quiz-style-5","mode":"quiz","prompt":"Spain: name the style from your list.","answer":"Flamenco","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t6","both":false},{"id":"quiz-style-6","mode":"quiz","prompt":"Brazil: name the style from your list.","answer":"Samba","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t7","both":false},{"id":"spell-country-0","mode":"spell","prompt":"Which country is paired with Salsa?","answer":"Cuba","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t0"},{"id":"spell-country-1","mode":"spell","prompt":"Which country is paired with Bachata?","answer":"Dominican Republic","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t1"},{"id":"spell-country-2","mode":"spell","prompt":"Which country is paired with Mariachi?","answer":"Mexico","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t2"},{"id":"spell-country-3","mode":"spell","prompt":"Which country is paired with Tango?","answer":"Argentina","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t3"},{"id":"spell-country-4","mode":"spell","prompt":"Which country is paired with Reggaeton?","answer":"Panama","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t4"},{"id":"spell-country-5","mode":"spell","prompt":"Which country is paired with Merengue?","answer":"Dominican Republic","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t5"},{"id":"spell-country-6","mode":"spell","prompt":"Which country is paired with Flamenco?","answer":"Spain","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t6"},{"id":"spell-country-7","mode":"spell","prompt":"Which country is paired with Samba?","answer":"Brazil","bank":["Cuba","Dominican Republic","Mexico","Argentina","Panama","Spain","Brazil"],"topic":"t7"},{"id":"spell-style-0","mode":"spell","prompt":"Cuba: name the style from your list.","answer":"Salsa","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t0","both":false},{"id":"spell-style-1","mode":"spell","prompt":"Dominican Republic: name BOTH styles from your list.","answer":"Bachata and Merengue","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t1","both":true},{"id":"spell-style-2","mode":"spell","prompt":"Mexico: name the style from your list.","answer":"Mariachi","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t2","both":false},{"id":"spell-style-3","mode":"spell","prompt":"Argentina: name the style from your list.","answer":"Tango","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t3","both":false},{"id":"spell-style-4","mode":"spell","prompt":"Panama: name the style from your list.","answer":"Reggaeton","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t4","both":false},{"id":"spell-style-5","mode":"spell","prompt":"Spain: name the style from your list.","answer":"Flamenco","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t6","both":false},{"id":"spell-style-6","mode":"spell","prompt":"Brazil: name the style from your list.","answer":"Samba","bank":["Salsa","Bachata and Merengue","Mariachi","Tango","Reggaeton","Flamenco","Samba"],"topic":"t7","both":false}];
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
    const am = panel.querySelector("#again-miss"); if (am) am.onclick = () => modeObj.begin(shuffle(r.missed.map(id => qById[id])));
    panel.querySelector("#again").onclick = () => startScreen(mode);
  }

  const modes = {};
  modes.learn = {
    enter() {
      panel.innerHTML = `<h2>Learn</h2><p class="muted">Read each card. Then try the Quiz!</p>
        <label><input type="checkbox" id="hide"> Hide countries to test yourself</label>
        ${TOPICS.map(t => `<details class="card" open><summary>${esc(t.name)}</summary><p>${esc(t.facts[0])}</p></details>`).join("")}
        <p class="muted">These are your assigned test pairings. Styles can have wider histories across countries.</p>
        ${KEYWORDS.length ? `<div class="wordbox"><b>Key words</b><br>${KEYWORDS.map(([w, d]) => `<b>${esc(w)}</b> = ${esc(d)}`).join("<br>")}</div>` : ""}
        <div class="row"><button class="btn small" id="print-blank">Print worksheet</button><button class="btn small" id="print-key">Print answer key</button></div>`;
      panel.querySelector("#hide").onchange = e => panel.querySelectorAll("details.card").forEach(d => d.open = !e.target.checked);
      panel.querySelector("#print-blank").onclick = () => printSheet(false);
      panel.querySelector("#print-key").onclick = () => printSheet(true);
    },
  };
  modes.quiz = {
    enter() { startScreen("quiz"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("quiz", r);
      const q = r.qs[r.i], bank = shuffle([...q.bank]);
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div><p class="muted">Word bank:</p>
        <div class="bank ${bank.some(b => b.length > 22) ? "wide" : ""}">${bank.map(b => `<button class="btn" data-a="${esc(b)}">${esc(b)}</button>`).join("")}</div>
        <div class="fb" id="fb" role="status"></div><div id="after"></div>`;
      panel.querySelectorAll("[data-a]").forEach(b => b.onclick = () => this.answer(b, q));
    },
    answer(btn, q) {
      const r = this.r, ok = btn.dataset.a === q.answer;
      record(q.id, ok); if (ok) r.score++; else r.missed.push(q.id);
      panel.querySelectorAll("[data-a]").forEach(b => { b.disabled = true; if (b.dataset.a === q.answer) b.classList.add("right"); else if (b === btn) b.classList.add("nope"); });
      const fb = panel.querySelector("#fb"); fb.className = "fb " + (ok ? "good" : "bad"); fb.textContent = ok ? "Correct!" : `The answer is: ${q.answer}`;
      const next = () => { r.i++; this.ask(); };
      if (ok) { panel.querySelector("#after").innerHTML = `<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
      else { panel.querySelector("#after").innerHTML = `${card(q.topic)}<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
    },
  };
  // Preserve letters, accents, digits, and meaningful symbols. Ignore spacing and case.
  // Put confirmed equivalent wordings in q.accepted; keep q.answer as the sheet's answer.
  const norm = s => s.normalize("NFC").toLowerCase().replace(/\s+/g, "").replace(/[.,!?'"’():]/g, "");
  function acceptsWritten(q, value) {
    if (!q.both) return norm(value) === norm(q.answer);
    const parts = value.split(/\s*(?:[,/;&]|\b(?:and|or)\b)\s*/i).map(norm);
    return parts.length === 2 && new Set(parts).size === 2 &&
      parts.includes("bachata") && parts.includes("merengue");
  }
  const diffHtml = (want, got) => {
    const clean = norm(got); let i = 0;
    return [...want].map(c => /\s/.test(c) ? esc(c) :
      clean[i++] === c.toLowerCase() ? esc(c) : '<span class="x">' + esc(c) + '</span>').join("");
  };
  modes.spell = {
    enter() { startScreen("spell"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("spell", r);
      const q = r.qs[r.i]; r.wrong = false; r.done = false;
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div>
        <label for="ans">Your answer</label><input class="answer" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done">
        <button class="btn primary" id="check">Check</button><div class="fb" id="fb" role="status"></div><div id="after"></div>`;
      const inp = panel.querySelector("#ans");
      inp.addEventListener("keydown", e => { if (e.key === "Enter") this.check(); });
      panel.querySelector("#check").onclick = () => this.check();
      if (window.matchMedia("(pointer: fine)").matches) inp.focus();
    },
    check() {
      const r = this.r, q = r.qs[r.i]; if (r.done) return;
      const inp = panel.querySelector("#ans"), fb = panel.querySelector("#fb"), v = inp.value; if (!v.trim()) return;
      if (acceptsWritten(q, v)) {
        r.done = true; const first = !r.wrong; record(q.id, first); if (first) r.score++; else r.missed.push(q.id);
        fb.className = "fb good"; fb.textContent = first ? `Correct! ${q.answer}` : "Now you've got it!";
        panel.querySelector("#after").innerHTML = ""; inp.blur();
        panel.querySelector("#after").innerHTML = `<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = () => { r.i++; this.ask(); };
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

  modes.match = {
    enter() {
      const countries = shuffle([...new Set(PAIRS.map(p => p[1]))]);
      let done = 0;
      panel.innerHTML = '<h2>Match each style to its country</h2><p>Choose a country for each style. Dominican Republic is used twice. Matching is warm-up practice; quiz and spelling earn stars.</p>' +
        shuffle([...PAIRS]).map(([style,country]) => '<div class="card"><label>' + esc(style) + '<select data-country="' + esc(country) + '"><option value="">Choose a country</option>' + countries.map(c => '<option>' + esc(c) + '</option>').join("") + '</select></label><p role="status"></p></div>').join("") +
        '<p id="matched" role="status">0 / 8 matched</p>';
      panel.querySelectorAll("select").forEach(s => s.onchange = () => {
        const ok = s.value === s.dataset.country;
        s.parentElement.nextElementSibling.textContent = ok ? "Correct!" : "Try again.";
        if(ok) { s.disabled = true; done++; panel.querySelector("#matched").textContent = done + " / 8 matched" + (done === 8 ? " -- Great job!" : ""); }
      });
    }
  };
  // Printable worksheet: every quiz question with a blank line (or the answer, for the key)
  function printSheet(withAnswers) {
    const sheet = document.getElementById("worksheet");
    sheet.innerHTML = '<h2>Music, Dance & Countries' + (withAnswers ? ' -- Answer key' : ' -- Practice') + '</h2><p>Name: ____________________</p><p>Write the assigned country for each style.</p><ol>' +
      PAIRS.map(([s,c]) => '<li>' + esc(s) + '<div class="ans">' + (withAnswers ? esc(c) : '&nbsp;') + '</div></li>').join("") +
      '</ol><p>Which TWO styles are paired with Dominican Republic?</p><div class="ans">' + (withAnswers ? "Bachata and Merengue" : "&nbsp;") + '</div>';
    if (!new URLSearchParams(location.search).has("pdf")) setTimeout(() => window.print(), 60);
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
