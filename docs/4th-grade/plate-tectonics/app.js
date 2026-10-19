(() => {
  "use strict";
  // ================================================================ CONTENT -- edit this block for each new study guide
  // Everything the kid sees comes from here. Copy the study sheet EXACTLY (confirm with the parent first).
  const GUIDE = {"title": "Plate Tectonics & Volcanoes", "storageKey": "plate_tectonics_stats"};
  const TOPICS = [{"id": "wegener", "name": "Continental drift", "color": "#92b5c9", "facts": ["Alfred Wegener created the theory of Continental Drift.", "Mountain ranges seemed to continue from South America to Africa if the continents were brought together.", "Fossils of tropical plants were discovered on islands in the Arctic Ocean.", "Extra explanation: these clues suggest the continents used to be joined. Cold Arctic locations once had warmer conditions."]}, {"id": "hess", "name": "The ocean floor", "color": "#92b5c9", "facts": ["Harry Hess used sonar to study the ocean floor.", "At the Mid-Ocean Ridge, Earth's plates are splitting apart.", "Science note: Hess helped explain seafloor spreading; he was not the sole discoverer of mid-ocean ridges. Sonar uses sound echoes to map underwater features."]}, {"id": "boundaries", "name": "Moving plates", "color": "#92b5c9", "facts": ["Convergent: two tectonic plates are crashing into each other. Tall mountains can form.", "Transform: two plates are sliding past each other. This is the circled boundary near California on the worksheet.", "Subduction: a heavier ocean plate crashes into and slides under a lighter land plate.", "Divergent: plates move apart and new crust forms.", "Science note: subduction is controlled by density, not simply weight. Oceanic plates can also subduct beneath other oceanic plates. Not every convergent boundary has subduction."]}, {"id": "layers", "name": "Earth's layers", "color": "#92b5c9", "facts": ["A. Lithosphere", "B. Asthenosphere", "C. Lower Mantle", "D. Outer Core", "E. Inner Core", "The inner core is the hottest layer.", "The word asthenos means weak.", "Extra explanation: the lithosphere includes the crust and rigid uppermost mantle. The asthenosphere is mostly solid rock that slowly flows, not an ocean of liquid."]}, {"id": "lava", "name": "Magma and lava", "color": "#92b5c9", "facts": ["Magma is molten rock below Earth's surface.", "Lava is molten rock on Earth's surface."]}, {"id": "ring", "name": "Ring of Fire", "color": "#92b5c9", "facts": ["Name both plates at each of at least two boundaries.", "The boundary of the Nazca plate and South American plate.", "The boundary of the Pacific plate and Australian plate."]}, {"id": "volcano", "name": "Volcanoes", "color": "#92b5c9", "facts": ["Dormant: a volcano that hasn't erupted for a long time, but is showing signs that it might erupt again in the future.", "Composite: short duration explosive eruptions; sticky, high viscosity magma; steep-sided mountains; forms at a subduction zone.", "Shield: long duration, quiet eruptions; thin, low viscosity magma; massive, gentle slopes; form at hot spots.", "Both (worksheet): erupt; produce lava and cinders; produce great soil.", "Science note: these are typical patterns, not absolute rules. Shield volcanoes can also occur at divergent boundaries. Not every eruption produces cinders; fertile soil develops as volcanic material weathers."]}, {"id": "recycle", "name": "Earth's giant recycler", "color": "#92b5c9", "facts": ["Worksheet answer: Because the plates are very slowly making new crust at a divergent boundary but also sending old crust back down into the asthenosphere at a convergent boundary. The old crust melts and will eventually come back up to the lithosphere at a divergent boundary.", "Science note: sinking plates are recycled into the mantle; they do not simply melt and rise straight back up. Water released from a sinking plate helps nearby mantle melt. New crust forms as magma rises and cools at divergent boundaries."]}];
  const KEYWORDS = [];
  const Q = [{"id": "q1", "mode": "quiz", "prompt": "Which theory did Alfred Wegener create?", "answer": "Continental Drift", "bank": ["Continental Drift", "Subduction", "Plate Tectonics", "Conservation of Mass"], "topic": "wegener"}, {"id": "q2", "mode": "quiz", "prompt": "Choose BOTH pieces of evidence Wegener used.", "answer": "Matching mountain ranges / Tropical plant fossils in the Arctic", "bank": ["Matching mountain ranges", "People speaking the same language", "Tropical plant fossils in the Arctic", "Volcanoes at colliding plates"], "topic": "wegener", "answers": ["Matching mountain ranges", "Tropical plant fossils in the Arctic"]}, {"id": "q3", "mode": "quiz", "prompt": "What happens at the Mid-Ocean Ridge?", "answer": "Earth\u2019s plates are splitting apart", "bank": ["Earth\u2019s plates are splitting apart", "Crust sinks into the asthenosphere", "New ocean animals appear", "Earthquakes destroy the crust"], "topic": "hess"}, {"id": "q4", "mode": "quiz", "prompt": "What tool did Harry Hess use?", "answer": "Sonar", "bank": ["Sonar", "A telescope", "A submarine", "A special deep ocean drill"], "topic": "hess"}, {"id": "q5", "mode": "quiz", "prompt": "What does asthenos mean?", "answer": "Weak", "bank": ["Weak", "Stone", "Liquid", "Solid"], "topic": "layers"}, {"id": "q6", "mode": "quiz", "prompt": "At a convergent boundary, plates\u2026", "answer": "Crash into each other", "bank": ["Crash into each other", "Move apart", "Slide past each other"], "topic": "boundaries", "motion": "\u2192 \u2190"}, {"id": "q7", "mode": "quiz", "prompt": "Near California, two plates slide past each other. What boundary is this?", "answer": "Transform", "bank": ["Transform", "Convergent", "Divergent"], "topic": "boundaries", "motion": "\u2191 \u2193"}, {"id": "q8", "mode": "quiz", "prompt": "What happens at a subduction zone?", "answer": "An ocean plate slides under another plate", "bank": ["An ocean plate slides under another plate", "Two plates move away from each other", "Huge storms form over the ocean", "Shield volcanoes always form"], "topic": "boundaries"}, {"id": "q90", "mode": "quiz", "prompt": "Name layer A on the diagram.", "answer": "Lithosphere", "bank": ["Lithosphere", "Asthenosphere", "Lower Mantle", "Outer Core", "Inner Core"], "topic": "layers", "layer": "A"}, {"id": "q91", "mode": "quiz", "prompt": "Name layer B on the diagram.", "answer": "Asthenosphere", "bank": ["Lithosphere", "Asthenosphere", "Lower Mantle", "Outer Core", "Inner Core"], "topic": "layers", "layer": "B"}, {"id": "q92", "mode": "quiz", "prompt": "Name layer C on the diagram.", "answer": "Lower Mantle", "bank": ["Lithosphere", "Asthenosphere", "Lower Mantle", "Outer Core", "Inner Core"], "topic": "layers", "layer": "C"}, {"id": "q93", "mode": "quiz", "prompt": "Name layer D on the diagram.", "answer": "Outer Core", "bank": ["Lithosphere", "Asthenosphere", "Lower Mantle", "Outer Core", "Inner Core"], "topic": "layers", "layer": "D"}, {"id": "q94", "mode": "quiz", "prompt": "Name layer E on the diagram.", "answer": "Inner Core", "bank": ["Lithosphere", "Asthenosphere", "Lower Mantle", "Outer Core", "Inner Core"], "topic": "layers", "layer": "E"}, {"id": "q10", "mode": "quiz", "prompt": "What is the hottest layer of inner Earth?", "answer": "Inner Core", "bank": ["Lithosphere", "Asthenosphere", "Lower Mantle", "Outer Core", "Inner Core"], "topic": "layers"}, {"id": "q11a", "mode": "quiz", "prompt": "Molten rock BELOW Earth's surface is\u2026", "answer": "Magma", "bank": ["Magma", "Lava"], "topic": "lava"}, {"id": "q11b", "mode": "quiz", "prompt": "Molten rock ON Earth's surface is\u2026", "answer": "Lava", "bank": ["Magma", "Lava"], "topic": "lava"}, {"id": "q12a", "mode": "quiz", "prompt": "Which pair meets along the Ring of Fire?", "answer": "Nazca and South American", "bank": ["Nazca and South American", "Nazca and Eurasian", "South American and Arabian"], "topic": "ring"}, {"id": "q12b", "mode": "quiz", "prompt": "Choose the second Ring of Fire pair from your sheet.", "answer": "Pacific and Australian", "bank": ["Pacific and Australian", "Pacific and African", "Australian and South American"], "topic": "ring"}, {"id": "q13", "mode": "quiz", "prompt": "A volcano has been quiet a long time but might erupt again. It is\u2026", "answer": "Dormant", "bank": ["Dormant", "Extinct", "Sleeping", "Quiet"], "topic": "volcano"}, {"id": "q140", "mode": "quiz", "prompt": "Sort this volcano fact: Short duration explosive eruptions", "answer": "Composite", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q141", "mode": "quiz", "prompt": "Sort this volcano fact: Sticky, high viscosity magma", "answer": "Composite", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q142", "mode": "quiz", "prompt": "Sort this volcano fact: Steep-sided mountains", "answer": "Composite", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q143", "mode": "quiz", "prompt": "Sort this volcano fact: Forms at a subduction zone", "answer": "Composite", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q144", "mode": "quiz", "prompt": "Sort this volcano fact: Long duration, quiet eruptions", "answer": "Shield", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q145", "mode": "quiz", "prompt": "Sort this volcano fact: Thin, low viscosity magma", "answer": "Shield", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q146", "mode": "quiz", "prompt": "Sort this volcano fact: Massive, gentle slopes", "answer": "Shield", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q147", "mode": "quiz", "prompt": "Sort this volcano fact: Form at hot spots", "answer": "Shield", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q148", "mode": "quiz", "prompt": "Sort this volcano fact: Erupt", "answer": "Both", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q149", "mode": "quiz", "prompt": "Sort this volcano fact: Produce lava and cinders (worksheet)", "answer": "Both", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q1410", "mode": "quiz", "prompt": "Sort this volcano fact: Produce great soil (worksheet)", "answer": "Both", "bank": ["Composite", "Shield", "Both"], "topic": "volcano"}, {"id": "q150", "mode": "quiz", "prompt": "Where does new crust form?", "answer": "At a divergent boundary", "bank": ["At a divergent boundary", "Plates disappear into space", "All crust stays unchanged"], "topic": "recycle"}, {"id": "q151", "mode": "quiz", "prompt": "Where does old ocean crust go back down?", "answer": "At a subduction zone", "bank": ["At a subduction zone", "Plates disappear into space", "All crust stays unchanged"], "topic": "recycle"}, {"id": "q152", "mode": "quiz", "prompt": "Why is plate tectonics like a recycler?", "answer": "New crust forms and old crust is recycled", "bank": ["New crust forms and old crust is recycled", "Plates disappear into space", "All crust stays unchanged"], "topic": "recycle"}, {"id": "s0", "mode": "spell", "prompt": "Wegener's theory", "answer": "Continental Drift", "topic": "wegener"}, {"id": "s1", "mode": "spell", "prompt": "Sound tool used to study the ocean floor", "answer": "Sonar", "topic": "hess"}, {"id": "s2", "mode": "spell", "prompt": "Meaning of asthenos", "answer": "Weak", "topic": "layers"}, {"id": "s3", "mode": "spell", "prompt": "Boundary where plates move together", "answer": "Convergent", "topic": "boundaries"}, {"id": "s4", "mode": "spell", "prompt": "Boundary where plates slide past each other", "answer": "Transform", "topic": "boundaries"}, {"id": "s5", "mode": "spell", "prompt": "Boundary where plates move apart", "answer": "Divergent", "topic": "boundaries"}, {"id": "s6", "mode": "spell", "prompt": "Process where one plate sinks beneath another", "answer": "Subduction", "topic": "boundaries"}, {"id": "s7", "mode": "spell", "prompt": "Layer A on the worksheet", "answer": "Lithosphere", "topic": "layers"}, {"id": "s8", "mode": "spell", "prompt": "Layer B on the worksheet", "answer": "Asthenosphere", "topic": "layers"}, {"id": "s9", "mode": "spell", "prompt": "Layer C on the worksheet", "answer": "Lower Mantle", "topic": "layers"}, {"id": "s10", "mode": "spell", "prompt": "Layer D on the worksheet", "answer": "Outer Core", "topic": "layers"}, {"id": "s11", "mode": "spell", "prompt": "Layer E on the worksheet", "answer": "Inner Core", "topic": "layers"}, {"id": "s12", "mode": "spell", "prompt": "Molten rock below the surface", "answer": "Magma", "topic": "lava"}, {"id": "s13", "mode": "spell", "prompt": "Molten rock on the surface", "answer": "Lava", "topic": "lava"}, {"id": "s14", "mode": "spell", "prompt": "Volcano that may erupt again after a long quiet time", "answer": "Dormant", "topic": "volcano"}, {"id": "s15", "mode": "spell", "prompt": "Steep-sided volcano with sticky magma", "answer": "Composite", "topic": "volcano"}, {"id": "s16", "mode": "spell", "prompt": "Broad volcano with gentle slopes", "answer": "Shield", "topic": "volcano"}, {"id": "s17", "mode": "spell", "prompt": "Plate next to the South American plate in your example", "answer": "Nazca", "topic": "ring"}, {"id": "s18", "mode": "spell", "prompt": "Plate next to the Pacific plate in your second example", "answer": "Australian", "topic": "ring"}];
  // ================================================================ end of CONTENT


  const PRINT = [
    ["Describe convergent, transform, and divergent movement.", "Convergent: together. Transform: slide past. Divergent: apart."],
    ["What happens during subduction?", "A denser ocean plate slides beneath another plate."],
    ["Which layer is hottest? How do magma and lava differ?", "Inner Core. Magma: below the surface; lava: on the surface."],
    ["Name two Ring of Fire boundaries (both plates for each).", "Nazca / South American; Pacific / Australian."],
    ["What is a dormant volcano?", "Quiet for a long time but may erupt again."],
    ["Compare composite and shield volcanoes: eruptions, magma, shape, location.", "Composite: short explosive, sticky/high viscosity, steep, subduction. Shield: long quiet, thin/low viscosity, gentle slopes, hot spots."],
    ["Name three shared volcano traits from the sheet.", "Erupt; produce lava and cinders; produce great soil."],
    ["Why is plate tectonics like a recycler?", "New crust forms at divergent boundaries; old crust sinks at subduction zones and its material is recycled into the mantle."]
  ];
  function diagram(labels, target="") {
    const names=["Lithosphere","Asthenosphere","Lower Mantle","Outer Core","Inner Core"];
    const paths=["M30 15 L60 5 L90 18 L350 18 L337 65 L47 65 Z","M47 65 L337 65 L318 130 L66 130 Z","M66 130 L318 130 L274 280 L110 280 Z","M110 280 L274 280 L222 455 L162 455 Z","M162 455 L222 455 L192 555 Z"];
    const ys=[43,105,205,370,492];
    return `<svg class="earth" viewBox="0 0 530 570" role="img" aria-label="Earth wedge diagram. Layers A through E from surface to center; not to scale.">${paths.map((d,i)=>`<path d="${d}" fill="${target===String.fromCharCode(65+i)?"#ffe598":"white"}" stroke="black" stroke-width="2"/><text x="184" y="${ys[i]}" font-size="23">${String.fromCharCode(65+i)}</text>${labels?`<text x="355" y="${ys[i]}" font-size="16">${names[i]}</text>`:""}`).join("")}</svg>`;
  }

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
      panel.innerHTML = `<h2>Learn</h2><p>Read a little, then practice. You do not need to memorize whole sentences.</p><label><input type="checkbox" id="hide"> Hide diagram labels</label><div id="earth-diagram">${diagram(true)}</div><p class="muted">Read each card. Then try the Quiz!</p>
        ${TOPICS.map(t => card(t.id)).join("")}
        ${KEYWORDS.length ? `<div class="wordbox"><b>Key words</b><br>${KEYWORDS.map(([w, d]) => `<b>${esc(w)}</b> = ${esc(d)}`).join("<br>")}</div>` : ""}
        <div class="row"><button class="btn small" id="print-blank">Print worksheet</button><button class="btn small" id="print-key">Print answer key</button></div>`;
      panel.querySelector("#hide").onchange = e => { panel.querySelector("#earth-diagram").innerHTML = diagram(!e.target.checked); };
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
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div>${q.layer ? diagram(false, q.layer) : ""}${q.motion ? `<p class="motion" aria-label="Plate movement">${q.motion}</p>` : ""}<p class="muted">${q.answers ? "Choose exactly two, then check:" : "Word bank:"}</p>
        <div class="bank ${bank.some(b => b.length > 22) ? "wide" : ""}">${bank.map(b => `<button class="btn" data-a="${esc(b)}">${esc(b)}</button>`).join("")}</div>
        ${q.answers ? `<button class="btn primary" id="multi-check">Check both</button>` : ""}<div class="fb" id="fb" role="status"></div><div id="after"></div>`;
      if(q.answers) panel.querySelector("#multi-check").onclick = () => { panel.querySelector("#multi-check").disabled = true; this.answer(null,q); };
      panel.querySelectorAll("[data-a]").forEach(b => b.onclick = () => { if(q.answers) { b.classList.toggle("selected"); b.setAttribute("aria-pressed", b.classList.contains("selected")); } else this.answer(b, q); });
    },
    answer(btn, q) {
      const r = this.r, picks = [...panel.querySelectorAll(".selected")].map(b => b.dataset.a), ok = q.answers ? picks.length === q.answers.length && picks.every(a => q.answers.includes(a)) : btn.dataset.a === q.answer;
      record(q.id, ok); if (ok) r.score++; else r.missed.push(q.id);
      panel.querySelectorAll("[data-a]").forEach(b => { b.disabled = true; if (q.answers ? q.answers.includes(b.dataset.a) : b.dataset.a === q.answer) b.classList.add("right"); else if (b === btn || b.classList.contains("selected")) b.classList.add("nope"); });
      const fb = panel.querySelector("#fb"); fb.className = "fb " + (ok ? "good" : "bad"); fb.textContent = ok ? "Correct!" : `The answer is: ${q.answer}`;
      const next = () => { r.i++; this.ask(); };
      if (ok) { panel.querySelector("#after").innerHTML = `<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
      else { panel.querySelector("#after").innerHTML = `${card(q.topic)}<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
    },
  };
  // Preserve letters, accents, digits, and meaningful symbols. Ignore spacing and case.
  // Put confirmed equivalent wordings in q.accepted; keep q.answer as the sheet's answer.
  const norm = s => s.normalize("NFC").toLowerCase().trim().replace(/^the\s+/, "").replace(/\s+/g, "").replace(/[.,!?;:\x27\u2019]/g, "");
  function acceptsWritten(q, value) {
    const accepted = q.accepted || [q.answer];
    if (accepted.some(a => norm(value) === norm(a))) return true;
    // Optional meaning groups: each group lists equivalent phrasings for one meaning.
    // A child may supply any subset, in any order, but every supplied meaning must be valid.
    if (!q.answerGroups) return false;
    const parts = value.split(/\s*(?:[,/;&]|\b(?:or|and)\b)\s*/i);
    return parts.length > 0 && parts.every(p => p.trim() && q.answerGroups.some(group => group.some(a => norm(p) === norm(a))));
  }
  const diffHtml = (want, got) => {
    const clean = norm(got); let i=0;
    return [...want].map(c => { if (/\s/.test(c)) return esc(c); const ok = clean[i++] === c.toLowerCase(); return ok ? esc(c) : `<span class="x">${esc(c)}</span>`; }).join("");
  };
  modes.spell = {
    enter() { startScreen("spell"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("spell", r);
      const q = r.qs[r.i]; r.wrong = false; r.done = false;
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div>
        <label for="ans">Your spelling</label><input class="answer" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done">
        <button class="btn primary" id="check">Check</button><div class="fb" id="fb"></div><div id="after"></div>`;
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


  const EXPLAIN = [
    {p:"What evidence supported Wegener's continental drift theory?", ideas:["Mountain ranges line up when continents are brought together.","Tropical plant fossils were found in the Arctic."], model:"Matching mountains and tropical fossils in the Arctic suggest the continents used to be in different places."},
    {p:"What happens at a convergent boundary?",ideas:["Two tectonic plates move together or collide.","Tall mountains can form."],model:"Two plates push into each other, which can build mountains."},
    {p:"Explain a transform boundary, like the circled place near California.",ideas:["Use the term transform boundary.","Two plates slide past each other."],model:"It is a transform boundary because the plates slide past one another."},
    {p:"What happens at a subduction zone?",ideas:["Plates move together.","A denser oceanic plate sinks beneath another plate."],model:"An ocean plate moves toward another plate and slides underneath it."},
    {p:"How are magma and lava different?",ideas:["Both are molten rock.","Magma is below the surface.","Lava is on the surface."],model:"Magma is melted rock underground. When it reaches the surface, it is called lava."},
    {p:"Name at least two Ring of Fire boundaries. Name both plates at each.",ideas:["Nazca and South American plates.","Pacific and Australian plates."],model:"One is between Nazca and South American. Another is between Pacific and Australian. These are the two examples from your sheet; other valid pairs need a parent check."},
    {p:"Compare composite and shield volcanoes.",ideas:["Composite: short explosive eruptions, sticky high-viscosity magma, steep sides, subduction zones.","Shield: long quiet eruptions, thin low-viscosity magma, gentle slopes, hot spots.","Worksheet shared traits: erupt, produce lava and cinders, produce great soil."],model:"Composite volcanoes have steeper sides and stickier magma. Shield volcanoes are broad with gentle slopes and runnier magma. Read the science notes in Learn for exceptions."},
    {p:"Why is plate tectonics like a giant recycler?",ideas:["New crust forms where plates move apart: divergent boundaries.","Old ocean crust sinks at subduction zones along convergent boundaries.","Material is recycled into the mantle; magma can rise and cool to form new crust."],model:"Earth makes new crust where plates separate and recycles old crust where one plate sinks beneath another. The material becomes part of the mantle cycle. It does not all simply melt and come straight back up."}
  ];
  modes.explain = {
    enter() {
      panel.innerHTML = `<h2>Explain it in your own words</h2><p>Practice for written questions. Type a few sentences on paper or here. Use correct science words, but you do not need the exact worksheet sentence.</p><p class="muted">These are self-checks, not automatic grades. Ask a parent to check your ideas and spelling. No stars are awarded here.</p>${EXPLAIN.map((q,i)=>`<section class="card"><h3>${esc(q.p)}</h3><label for="writing-${i}">Your explanation</label><textarea id="writing-${i}" spellcheck="false" placeholder="Try before revealing the key ideas."></textarea><details><summary>Check the key ideas</summary>${q.ideas.map(s=>`<label class="checkidea"><input type="checkbox"> ${esc(s)}</label>`).join("")}<p><b>Example in different words:</b> ${esc(q.model)}</p><p>Check the spelling of science words. Missing an idea? Add it to your answer.</p></details></section>`).join("")}`;
      panel.querySelectorAll("textarea").forEach((el,i)=>{
        try { el.value=localStorage.getItem("plate_tectonics_draft_"+i)||""; } catch {}
        el.oninput=()=>{try {localStorage.setItem("plate_tectonics_draft_"+i,el.value);}catch{}};
      });
    }
  };

  // Printable worksheet: every quiz question with a blank line (or the answer, for the key)
  function printSheet(withAnswers) {
    const sheet = document.getElementById("worksheet");
    sheet.innerHTML = `<h2>Plate Tectonics & Volcanoes${withAnswers ? " -- Answer key" : " -- Practice"}</h2><p>Name: ____________________</p><div class="printgrid">${diagram(withAnswers)}<div><p>1. Wegener's theory: ${withAnswers ? "Continental Drift" : "____________"}</p><p>2. His two clues: ${withAnswers ? "Matching mountains; tropical plant fossils in the Arctic" : "________________________"}</p><p>3. Hess's tool: ${withAnswers ? "Sonar" : "____________"}</p><p>4. At a mid-ocean ridge: ${withAnswers ? "Plates split apart" : "____________"}</p><p>5. Asthenos means: ${withAnswers ? "weak" : "____________"}</p></div></div><ol start="6">${PRINT.map(([p,a]) => `<li>${esc(p)}<div class="ans">${withAnswers ? esc(a) : "________________________________________________"}</div></li>`).join("")}</ol><p class="printnote">Answer key uses worksheet study targets. See Learn for science notes and explanations.</p>`;
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
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "127.0.0.1" || location.hostname === "localhost")) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
