(() => {
  "use strict";
  // ================================================================ CONTENT -- edit this block for each new study guide
  // Everything the kid sees comes from here. Copy the study sheet EXACTLY (confirm with the parent first).
  const GUIDE = {title: "Suburani Chapter 1", storageKey: "suburani1_stats"};
  const VOCAB = [
  {
    "id": "t1",
    "latin": "cella, cellae, f.",
    "english": "room",
    "forms": [
      "cella",
      "cellae"
    ],
    "meanings": [
      "room"
    ]
  },
  {
    "id": "t2",
    "latin": "dormiō, dormīre, dormīvī, dormītum",
    "english": "to sleep",
    "forms": [
      "dormiō",
      "dormīre",
      "dormīvī",
      "dormītum"
    ],
    "meanings": [
      "to sleep",
      "sleep"
    ]
  },
  {
    "id": "t3",
    "latin": "Ego, meī",
    "english": "I",
    "forms": [
      "Ego",
      "meī"
    ],
    "meanings": [
      "I"
    ]
  },
  {
    "id": "t4",
    "latin": "frater, fratris, m.",
    "english": "brother",
    "forms": [
      "frater",
      "fratris"
    ],
    "meanings": [
      "brother"
    ]
  },
  {
    "id": "t5",
    "latin": "hora, horae, f.",
    "english": "hour",
    "forms": [
      "hora",
      "horae"
    ],
    "meanings": [
      "hour"
    ]
  },
  {
    "id": "t6",
    "latin": "in +abl",
    "english": "in, on",
    "forms": [
      "in"
    ],
    "meanings": [
      "in, on",
      "in",
      "on"
    ]
  },
  {
    "id": "t7",
    "latin": "insula, insulae, f.",
    "english": "island, apartment building",
    "forms": [
      "insula",
      "insulae"
    ],
    "meanings": [
      "island, apartment building",
      "island",
      "apartment building"
    ]
  },
  {
    "id": "t8",
    "latin": "laborō, laborāre, laborāvī, laborātus",
    "english": "to work",
    "forms": [
      "laborō",
      "laborāre",
      "laborāvī",
      "laborātus"
    ],
    "meanings": [
      "to work",
      "work"
    ]
  },
  {
    "id": "t9",
    "latin": "legō, legere, lēgī, lēctum",
    "english": "to read, choose",
    "forms": [
      "legō",
      "legere",
      "lēgī",
      "lēctum"
    ],
    "meanings": [
      "to read, choose",
      "to read",
      "choose",
      "read",
      "to choose"
    ]
  },
  {
    "id": "t10",
    "latin": "meus, mea, meum",
    "english": "my, mine",
    "forms": [
      "meus",
      "mea",
      "meum"
    ],
    "meanings": [
      "my, mine",
      "my",
      "mine"
    ]
  },
  {
    "id": "t11",
    "latin": "nōn",
    "english": "not",
    "forms": [
      "nōn"
    ],
    "meanings": [
      "not"
    ]
  },
  {
    "id": "t12",
    "latin": "nox, noctis, f.",
    "english": "night",
    "forms": [
      "nox",
      "noctis"
    ],
    "meanings": [
      "night"
    ]
  },
  {
    "id": "t13",
    "latin": "pater, patris, m.",
    "english": "father",
    "forms": [
      "pater",
      "patris"
    ],
    "meanings": [
      "father"
    ]
  },
  {
    "id": "t14",
    "latin": "periculosus, periculosa, periculosum",
    "english": "dangerous",
    "forms": [
      "periculosus",
      "periculosa",
      "periculosum"
    ],
    "meanings": [
      "dangerous"
    ]
  },
  {
    "id": "t15",
    "latin": "prō +abl",
    "english": "in front of, for",
    "forms": [
      "prō"
    ],
    "meanings": [
      "in front of, for",
      "in front of",
      "for"
    ]
  },
  {
    "id": "t16",
    "latin": "rideō, ridēre, rīsī, rīsus",
    "english": "to laugh, smile",
    "forms": [
      "rideō",
      "ridēre",
      "rīsī",
      "rīsus"
    ],
    "meanings": [
      "to laugh, smile",
      "to laugh",
      "smile",
      "laugh",
      "to smile"
    ]
  },
  {
    "id": "t17",
    "latin": "servus, servī, m.",
    "english": "slave, enslaved person (male)",
    "forms": [
      "servus",
      "servī"
    ],
    "meanings": [
      "slave, enslaved person (male)",
      "slave",
      "enslaved person (male)",
      "enslaved person"
    ]
  },
  {
    "id": "t18",
    "latin": "soror, sororis, f.",
    "english": "sister",
    "forms": [
      "soror",
      "sororis"
    ],
    "meanings": [
      "sister"
    ]
  },
  {
    "id": "t19",
    "latin": "tū, tuī",
    "english": "you",
    "forms": [
      "tū",
      "tuī"
    ],
    "meanings": [
      "you"
    ]
  },
  {
    "id": "t20",
    "latin": "turba, turbae, f.",
    "english": "crowd, mob",
    "forms": [
      "turba",
      "turbae"
    ],
    "meanings": [
      "crowd, mob",
      "crowd",
      "mob"
    ]
  },
  {
    "id": "t21",
    "latin": "ubī",
    "english": "where?, when?",
    "forms": [
      "ubī"
    ],
    "meanings": [
      "where?, when?",
      "where",
      "when"
    ]
  },
  {
    "id": "t22",
    "latin": "via, viae, f.",
    "english": "road, street, way",
    "forms": [
      "via",
      "viae"
    ],
    "meanings": [
      "road, street, way",
      "road",
      "street",
      "way"
    ]
  },
  {
    "id": "t23",
    "latin": "sum",
    "english": "I am",
    "forms": [
      "sum"
    ],
    "meanings": [
      "I am"
    ]
  },
  {
    "id": "t24",
    "latin": "es",
    "english": "you are",
    "forms": [
      "es"
    ],
    "meanings": [
      "you are"
    ]
  },
  {
    "id": "t25",
    "latin": "est",
    "english": "he/she/it is",
    "forms": [
      "est"
    ],
    "meanings": [
      "he/she/it is",
      "he is",
      "she is",
      "it is"
    ]
  }
];
  // Accepted equivalents supplement the sheet without changing the Learn cards.
  const ENGLISH_EQUIVALENTS = {
    t7: ["apartment block", "block of flats"],
    t9: ["select", "to select"],
    t13: ["dad", "daddy"],
    t14: ["unsafe", "risky", "perilous"],
    t17: ["male slave", "enslaved man", "male enslaved person"],
    t20: ["throng"],
    t22: ["roadway"]
  };
  VOCAB.forEach(v => v.meanings.push(...(ENGLISH_EQUIVALENTS[v.id] || [])));
  let direction = "le", requireMacrons = false;
  const TOPICS = VOCAB.map(v => ({id:v.id,name:v.latin,color:"#8c1c22",facts:[v.english]}));
  const KEYWORDS = [];
  const Q = VOCAB.flatMap(v => ["quiz", "spell"].flatMap(mode => ["le", "el"].map(dir => ({
    id: `${v.id}_${mode}_${dir}`, mode, dir, topic:v.id,
    prompt: dir === "le" ? `Translate: ${v.latin}` : `Write the Latin for: ${v.english}`,
    answer: dir === "le" ? v.english : v.forms[0],
    accepted: dir === "le" ? v.meanings : v.forms,
    bank: VOCAB.map(w => dir === "le" ? w.english : w.forms[0])
  }))));
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
  const ofMode = m => Q.filter(q => q.mode === m && (direction === "both" || q.dir === direction));
  const weakFirst = qs => {
    const sorted = shuffle([...qs]).sort((a,b) => stat(a.id).box - stat(b.id).box);
    if (direction !== "both") return sorted;
    const le = sorted.filter(q => q.dir === "le"), el = sorted.filter(q => q.dir === "el");
    return Array.from({length:Math.max(le.length,el.length)}, (_,i) => [le[i],el[i]]).flat().filter(Boolean);
  };
  const card = id => { const t = byTopic[id]; return t ? `<div class="card" style="--c:${t.color}"><h3>${esc(t.name)}</h3><ul>${t.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>` : ""; };
  const header = r => `<div class="row"><span class="muted">Question ${Math.min(r.i + 1, r.qs.length)} of ${r.qs.length}</span>
    <span class="muted" style="margin-left:auto">Score: ${r.score}</span></div><div class="bar"><div style="width:${100 * r.i / r.qs.length}%"></div></div>`;
  const INFO = {quiz:["Word Bank", "Tap the matching meaning or Latin word."],spell:["Written Answers", "Type any one listed form or meaning. Spelling counts; capitals do not."]};

  function startScreen(mode) {
    const all = ofMode(mode), weak = all.filter(q => stat(q.id).box < MASTER), size = Math.min(10, all.length);
    panel.innerHTML = `<h2>${INFO[mode][0]}</h2><p>${mode === "spell" && direction === "le" ? "Read the Latin and type its English meaning from memory. No word bank. Spelling counts; capitals do not." : INFO[mode][1]}</p>
      <p><label>Direction: <select id="direction"><option value="both">Both directions</option><option value="le">Latin to English</option><option value="el">English to Latin</option></select></label></p>
      ${mode === "spell" && direction !== "le" ? `<p><label><input type="checkbox" id="macron-setting" ${requireMacrons ? "checked" : ""}> Require macrons</label></p>` : ""}
      <button class="btn primary" id="go">Start (${size} questions)</button>
      <button class="btn" id="go-all">All ${all.length} questions</button>
      ${all.some(q => stats[q.id]) && weak.length && weak.length < all.length ? `<button class="btn" id="go-weak">Practice weak spots (${weak.length})</button>` : ""}`;
    const ds = panel.querySelector("#direction"); ds.value = direction;
    ds.onchange = () => {direction = ds.value; startScreen(mode);};
    const ms = panel.querySelector("#macron-setting"); if (ms) ms.onchange = () => {requireMacrons = ms.checked;};
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
      panel.innerHTML = `<h2>Learn</h2><p>Tap a card to reveal its meaning. Any listed Latin form is accepted in Written Answers.</p><label><input type="checkbox" id="hide-meanings"> Hide meanings</label>
        ${TOPICS.map(t => card(t.id)).join("")}
        ${KEYWORDS.length ? `<div class="wordbox"><b>Key words</b><br>${KEYWORDS.map(([w, d]) => `<b>${esc(w)}</b> = ${esc(d)}`).join("<br>")}</div>` : ""}
        <div class="row"><button class="btn small" id="print-blank">Print worksheet</button><button class="btn small" id="print-key">Print answer key</button></div>`;
      panel.querySelector("#print-blank").onclick = () => printSheet(false);
      panel.querySelector("#print-key").onclick = () => printSheet(true);
      const hide = panel.querySelector("#hide-meanings");
      hide.onchange = () => panel.querySelectorAll(".card ul").forEach(u => {u.hidden = hide.checked;});
      panel.querySelectorAll(".card").forEach(c => {c.tabIndex=0;c.setAttribute("role","button");c.setAttribute("aria-label","Reveal or hide meaning"); const toggle=()=>{const u=c.querySelector("ul");u.hidden=!u.hidden;};c.onclick=toggle;c.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle();}};});
    },
  };
  modes.quiz = {
    enter() { startScreen("quiz"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("quiz", r);
      const q = r.qs[r.i], bank = shuffle([q.answer, ...shuffle(q.bank.filter(a => a !== q.answer)).slice(0,5)]);
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
      if (ok) setTimeout(() => {if (modeObj === modes.quiz && modes.quiz.r === r) next();}, 1000);
      else { panel.querySelector("#after").innerHTML = `${card(q.topic)}<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
    },
  };
  const norm = s => {
    let n = s.normalize("NFC").toLowerCase().trim().replace(/\s+/g," ").replace(/\?$/, "");
    if (!requireMacrons) n = n.normalize("NFD").replace(/\u0304/g, "").normalize("NFC");
    return n;
  };
  function englishNorm(value) {
    return value.normalize("NFC").toLowerCase().trim()
      .replace(/[’‘]/g, "'")
      .replace(/\bi'm\b/g, "i am").replace(/\byou're\b/g, "you are")
      .replace(/\bhe's\b/g, "he is").replace(/\bshe's\b/g, "she is").replace(/\bit's\b/g, "it is")
      .replace(/[.!?]/g, "").replace(/\s+/g, " ").replace(/^(?:a|an|the) /, "").trim();
  }
  function acceptsWritten(q, value) {
    if (q.dir === "el") return q.accepted.some(a => norm(value) === norm(a));
    const text = englishNorm(value);
    const accepted = new Set(q.accepted.map(englishNorm));
    if (accepted.has(text)) return true;
    // Split meanings, not individual words: "in front of" retains its order.
    const parts = text.split(/\s*(?:[,/;&]|\b(?:or|and)\b)\s*/).map(englishNorm);
    if (!parts.length || parts.some(p => !p)) return false;
    // A shared final "is" applies to each pronoun: "she / he / it is".
    const sharedIs = q.topic === "t25" && parts.some(p => /^(he|she|it) is$/.test(p))
      && parts.every(p => /^(he|she|it)( is)?$/.test(p));
    return parts.every(p => accepted.has(sharedIs && /^(he|she|it)$/.test(p) ? p + " is" : p));
  }
  const diffHtml = (want, got) => [...want].map((c, i) => got[i] !== undefined && got[i].toLowerCase() === c.toLowerCase() ? esc(c) : `<span class="x">${esc(c)}</span>`).join("");
  modes.spell = {
    enter() { startScreen("spell"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("spell", r);
      const q = r.qs[r.i]; r.wrong = false; r.done = false;
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div>
        <label for="ans">Your answer</label><input class="answer" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done">
        ${q.dir === "el" ? `<div class="row" aria-label="Insert a vowel with a macron">${[..."āēīōū"].map(c=>`<button class="btn macron" data-char="${c}" aria-label="Insert ${c}">${c}</button>`).join("")}</div><p class="muted">Macrons ${requireMacrons ? "required" : "optional"}. Any listed form qualifies.</p>` : `<p class="muted">Type an English meaning. No word bank.</p>`}
        <button class="btn primary" id="check">Check</button><div class="fb" id="fb"></div><div id="after"></div>`;
      const inp = panel.querySelector("#ans");
      panel.querySelectorAll("[data-char]").forEach(b => {
        b.onpointerdown=e=>e.preventDefault();
        b.onclick=()=>{const a=inp.selectionStart,z=inp.selectionEnd;inp.setRangeText(b.dataset.char,a,z,"end");inp.focus();};
      });
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
        setTimeout(() => { if (modeObj === modes.spell && this.r === r) {r.i++; this.ask();} }, first ? 1000 : 1300);
      } else {
        r.wrong = true; fb.className = "fb bad"; fb.textContent = "Not quite. The right spelling is:";
        panel.querySelector("#after").innerHTML = `<p class="diff">${diffHtml(q.answer, v.trim())}</p><p>Accepted answers: ${q.accepted.map(esc).join("; ")}</p><p class="muted">Type any accepted answer correctly to keep going.</p>`;
        inp.select();
      }
    },
  };
  modes.match = {
    enter() { panel.innerHTML='<h2>Match</h2><p>Match five Latin words with their meanings. Tap one from each column.</p><button class="btn primary" id="match-go">Play a round</button>';panel.querySelector("#match-go").onclick=()=>this.begin(); },
    begin() {
      const vs=shuffle([...VOCAB]).slice(0,5);this.chosen=null;this.matched=0;this.tries=0;
      panel.innerHTML=`<h2>Match the pairs</h2><p>Tap a Latin word and its English meaning.</p><div class="matching"><div>${vs.map(v=>`<button class="btn" data-side="latin" data-id="${v.id}">${esc(v.forms[0])}</button>`).join("")}</div><div>${shuffle([...vs]).map(v=>`<button class="btn" data-side="english" data-id="${v.id}">${esc(v.english)}</button>`).join("")}</div></div><p id="match-feedback" role="status"></p>`;
      panel.querySelectorAll("[data-side]").forEach(b=>b.onclick=()=>this.pick(b));
    },
    pick(b) {
      if (!this.chosen || this.chosen.dataset.side===b.dataset.side) {
        if(this.chosen){this.chosen.classList.remove("selected");this.chosen.setAttribute("aria-pressed","false");}
        this.chosen=b;b.classList.add("selected");b.setAttribute("aria-pressed","true");return;
      }
      this.tries++;const a=this.chosen;this.chosen=null;a.classList.remove("selected");a.setAttribute("aria-pressed","false");
      const fb=panel.querySelector("#match-feedback");
      if(a.dataset.id===b.dataset.id){a.disabled=b.disabled=true;a.classList.add("right");b.classList.add("right");this.matched++;fb.textContent=`${this.matched} of 5 pairs matched!`;}
      else fb.textContent="Try again. Those words do not match.";
      if(this.matched===5){fb.textContent=`All five pairs matched in ${this.tries} tries! 🎉`;const again=document.createElement("button");again.className="btn primary";again.textContent="Play again";again.onclick=()=>this.begin();panel.append(again);}
    }
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
    sheet.innerHTML = `<h2>${esc(GUIDE.title)}${withAnswers ? " -- Answer key" : " -- Vocabulary worksheet"}</h2><p>Name: ____________________</p><p>Write an English meaning for each Latin entry.</p>
      <table class="print-vocab">${VOCAB.map(v=>`<tr><td>${esc(v.latin)}</td><td>${withAnswers ? esc(v.english) : "____________________"}</td></tr>`).join("")}</table>`;
    setTimeout(() => window.print(), 60);
  }

  let modeObj = {};
  function setMode(m) {
    modeObj = modes[m];
    document.querySelectorAll("#modes button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
    modeObj.enter();
  }
  document.querySelectorAll("#modes button").forEach(b => b.onclick = () => setMode(b.dataset.mode));
  setMode("spell");
  const ph = new URLSearchParams(location.hash.slice(1)).get("print");   // index.html#print=blank or #print=key
  if (ph) printSheet(ph === "key");
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
