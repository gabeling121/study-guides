(() => {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.getElementById("diag");
  const panel = document.getElementById("panel");
  const MASTER = 3; // stars needed to count as mastered

  // ================================================================ content (from her study sheet)
  const LAYERS = [
    { id: "litho", name: "Lithosphere", r1: 880, r2: 770, color: "#9cc97a", km: "100 km",
      facts: ["Includes the crust (soil / water)", "\"Lithos\" means stone (Greek)", "Mostly granite and basalt",
        "1100°F at the bottom", "Supports all life on Earth", "100 km thick"] },
    { id: "astheno", name: "Asthenosphere", r1: 770, r2: 700, color: "#f4b26a", km: "250 km",
      facts: ["Part of the mantle", "Soft and tar-like", "\"Asthenos\" means weak (Greek)", "250 km thick"] },
    { id: "lower", name: "Lower Mantle", r1: 700, r2: 450, color: "#e8754a", km: "3000 km",
      facts: ["Part of the mantle", "Soft rock", "3000 km thick (the thickest layer)", "3000°F at the top, 5000°F at the bottom"] },
    { id: "outer", name: "Outer Core", r1: 450, r2: 250, color: "#f7c94a", km: "2250 km",
      facts: ["Up to 9900°F", "Liquid", "Metallic nickel and iron", "Produces Earth's magnetic field (the magnet in the drawing)", "2250 km thick"] },
    { id: "inner", name: "Inner Core", r1: 250, r2: 0, color: "#fff27e", km: "1250 km",
      facts: ["Solid iron because of pressure", "Pressure releases heat", "10,000°F (the hottest layer)", "About the size of the Moon", "1250 km thick"] },
  ];
  const MANTLE = { id: "mantle", name: "Mantle", color: "#e8754a",
    facts: ["Divided into the soft, tar-like asthenosphere (250 km) and the soft-rock lower mantle (3000 km)", "\"Asthenos\" means weak (Greek)"] };
  const EARTH = { id: "earth", name: "The whole Earth", color: "#2a5a8c",
    facts: ["6850 km from the surface to the center", "The deepest hole people have ever drilled is about 12 km (7.6 miles) deep",
      "Heavy elements like iron and nickel sink toward the center"] };
  const KEYWORDS = [["Molten", "melted; so hot that rock or metal becomes liquid"]];
  const byLayer = Object.fromEntries([...LAYERS, MANTLE, EARTH].map(l => [l.id, l]));

  // Word banks
  const NAMES = ["Lithosphere", "Asthenosphere", "Mantle", "Lower Mantle", "Outer Core", "Inner Core"];
  const KMS = ["100 km", "250 km", "1250 km", "2250 km", "3000 km", "6850 km"];
  const TEMPS = ["1100°F", "3000°F", "5000°F", "9900°F", "10,000°F"];

  // Each question: id, mode, prompt, answer, bank (tap modes), slot / layer to highlight, why (shown after)
  const Q = [];
  const add = q => Q.push(q);
  // ---- Label it: build the diagram
  for (const l of LAYERS) add({ id: "lab-n-" + l.id, mode: "label", slot: "n-" + l.id, layer: l.id, prompt: "What is the name of the glowing layer?", answer: l.name, bank: NAMES });
  add({ id: "lab-n-mantle", mode: "label", slot: "n-mantle", prompt: "The glowing bracket covers two layers. What are they called together?", answer: "Mantle", bank: NAMES });
  for (const l of LAYERS) add({ id: "lab-k-" + l.id, mode: "label", slot: "k-" + l.id, layer: l.id, prompt: "How thick is the glowing layer?", answer: l.km, bank: KMS });
  add({ id: "lab-total", mode: "label", slot: "total", prompt: "How far is it from the surface to the center of the Earth?", answer: "6850 km", bank: KMS });
  add({ id: "lab-t3000", mode: "label", slot: "t3000", prompt: "What temperature goes in the glowing box (the bottom of the asthenosphere)?", answer: "3000°F", bank: TEMPS });
  add({ id: "lab-t5000", mode: "label", slot: "t5000", prompt: "What temperature goes in the glowing box (the bottom of the mantle)?", answer: "5000°F", bank: TEMPS });

  // ---- Facts: tap the answer from the word bank
  const F = (id, prompt, answer, bank, layer, why) => add({ id: "f-" + id, mode: "facts", prompt, answer, bank, layer, why });
  F("crust", "Which layer includes the crust?", "Lithosphere", NAMES, "litho");
  F("life", "Which layer supports all life on Earth?", "Lithosphere", NAMES, "litho");
  F("lithos", "In Greek, \"lithos\" means...", "stone", ["stone", "weak", "hot", "metal"], "litho");
  F("granite", "The lithosphere is mostly made of...", "granite and basalt", ["granite and basalt", "nickel and iron", "liquid metal", "ice and snow"], "litho");
  F("1100", "How hot is it at the bottom of the lithosphere?", "1100°F", TEMPS, "litho");
  F("thin", "Which layer is the thinnest (100 km)?", "Lithosphere", NAMES, "litho");
  F("tar", "Which layer is soft and tar-like?", "Asthenosphere", NAMES, "astheno");
  F("asthenos", "In Greek, \"asthenos\" means...", "weak", ["weak", "stone", "strong", "deep"], "astheno");
  F("twoparts", "The mantle is divided into which two layers?", "Asthenosphere and Lower Mantle",
    ["Asthenosphere and Lower Mantle", "Lithosphere and Crust", "Outer Core and Inner Core", "Crust and Inner Core"], "mantle");
  F("mantle", "Which layer is made of the asthenosphere and the lower mantle together?", "Mantle", NAMES, "mantle");
  F("softrock", "Which layer is made of soft rock and is 3000 km thick?", "Lower Mantle", NAMES, "lower");
  F("thick", "Which layer is the thickest?", "Lower Mantle", NAMES, "lower");
  F("liquid", "Which layer is liquid?", "Outer Core", NAMES, "outer");
  F("9900", "How hot does the outer core get?", "9900°F", TEMPS, "outer");
  F("nickel", "The outer core is made of metallic...", "nickel and iron", ["nickel and iron", "granite and basalt", "soil and water", "gold and silver"], "outer");
  F("magfield", "Which layer produces Earth's magnetic field?", "Outer Core", NAMES, "outer");
  F("magnet", "The magnet drawn in the outer core stands for Earth's...", "magnetic field", ["magnetic field", "gravity", "oceans", "mountains"], "outer");
  F("solidiron", "Which layer is solid iron?", "Inner Core", NAMES, "inner");
  F("whysolid", "Why is the inner core solid?", "because of pressure", ["because of pressure", "because it is cold", "because it is made of ice", "because it is small"], "inner");
  F("releases", "In the inner core, what releases heat?", "pressure", ["pressure", "sunlight", "water", "wind"], "inner");
  F("10000", "How hot is the inner core?", "10,000°F", TEMPS, "inner");
  F("hottest", "Which layer is the hottest?", "Inner Core", NAMES, "inner");
  F("moon", "The inner core is about the size of...", "the Moon", ["the Moon", "the Sun", "a football field", "the whole Earth"], "inner");
  F("sink", "Heavy elements like iron and nickel...", "sink toward the center", ["sink toward the center", "float to the surface", "turn into gas", "stay in the crust"], "earth");
  F("center", "How far is it from the surface to the center of the Earth?", "6850 km", KMS, "earth");
  F("drill", "How deep is the deepest hole people have ever drilled?", "about 12 km (7.6 miles)", ["about 12 km (7.6 miles)", "100 km", "1250 km", "6850 km"], "earth");
  F("molten", "What does \"molten\" mean?", "melted; so hot that rock or metal becomes liquid",
    ["melted; so hot that rock or metal becomes liquid", "frozen solid", "very heavy", "made of stone"], null);

  // ---- Spelling (harder): type the word
  const S = (id, prompt, answer, layer, slot) => add({ id: "s-" + id, mode: "spell", prompt, answer, layer, slot });
  for (const l of LAYERS) S("n-" + l.id, "Spell the name of the glowing layer.", l.name, l.id, "n-" + l.id);
  S("n-mantle", "Spell the name of the glowing bracket (it covers two layers).", "Mantle", null, "n-mantle");
  S("crust", "The lithosphere includes the ______.", "crust", "litho");
  S("granite", "The lithosphere is mostly ______ and basalt.", "granite", "litho");
  S("basalt", "The lithosphere is mostly granite and ______.", "basalt", "litho");
  S("stone", "In Greek, \"lithos\" means ______.", "stone", "litho");
  S("tar", "The asthenosphere is soft and ______-like.", "tar", "astheno");
  S("weak", "In Greek, \"asthenos\" means ______.", "weak", "astheno");
  S("liquid", "The outer core is ______ (not solid).", "liquid", "outer");
  S("nickel", "The outer core is made of metallic ______ and iron.", "nickel", "outer");
  S("magnetic", "The outer core produces Earth's ______ field.", "magnetic", "outer");
  S("iron", "The inner core is solid ______.", "iron", "inner");
  S("pressure", "The inner core is solid because of ______.", "pressure", "inner");
  S("moon", "The inner core is about the size of the ______.", "Moon", "inner");
  S("molten", "______ means melted; so hot that rock or metal becomes liquid.", "molten", null);
  const qById = Object.fromEntries(Q.map(q => [q.id, q]));

  // ================================================================ storage
  const store = {
    get(k, d) { try { const v = localStorage.getItem("elq_" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("elq_" + k, JSON.stringify(v)); } catch {} },
  };
  let stats = store.get("stats", {});
  const stat = id => stats[id] || { box: 0 };
  function record(id, firstTry) {
    const s = stats[id] ||= { box: 0, right: 0, wrong: 0 };
    if (firstTry) { s.right++; s.box = Math.min(MASTER, s.box + 1); } else { s.wrong++; s.box = Math.max(0, s.box - 1); }
    store.set("stats", stats);
  }

  // ================================================================ diagram
  const el = (tag, attrs = {}, parent = svg) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (parent) parent.appendChild(e);
    return e;
  };
  const CX = 500, CY = 960, HALF = 20; // wedge apex and half-angle (degrees)
  const pt = (r, deg) => { const a = deg * Math.PI / 180; return [CX + r * Math.sin(a), CY - r * Math.cos(a)]; };
  const P = p => p[0].toFixed(1) + "," + p[1].toFixed(1);
  function bandPath(r1, r2) {
    let d = `M${P(pt(r1, -HALF))}A${r1},${r1} 0 0 1 ${P(pt(r1, HALF))}`;
    d += r2 > 0 ? `L${P(pt(r2, HALF))}A${r2},${r2} 0 0 0 ${P(pt(r2, -HALF))}Z` : `L${CX},${CY}Z`;
    return d;
  }
  const arcPts = (r, a0, a1, n = 12) => Array.from({ length: n + 1 }, (_, i) => pt(r, a0 + (a1 - a0) * i / n));

  const bandEls = {};
  for (const l of LAYERS) {
    bandEls[l.id] = el("path", { d: bandPath(l.r1, l.r2), class: "band", fill: l.color, "data-layer": l.id });
  }
  // dashed line between asthenosphere and lower mantle, like the sheet
  el("path", { d: `M${P(pt(700, -HALF))}A700,700 0 0 1 ${P(pt(700, HALF))}`, class: "dash" });
  // surface: mountain on the left, ocean on the right
  const mt = [...arcPts(880, -16, -4, 10)].reverse();
  el("path", { class: "mountain", "data-layer": "litho",
    d: `M${P(pt(880, -16))}L${P(pt(902, -13.5))}L${P(pt(935, -10.5))}L${P(pt(915, -8.5))}L${P(pt(905, -6.5))}L${P(pt(880, -4))}` +
       mt.map(p => "L" + P(p)).join("") + "Z" });
  const seaTop = arcPts(880, 2, 18, 12);
  const seaBottom = Array.from({ length: 13 }, (_, i) => pt(880 - 50 * Math.sin(Math.PI * i / 12), 18 - 16 * i / 12));
  el("path", { class: "ocean", "data-layer": "litho", d: "M" + seaTop.map(P).join("L") + "L" + seaBottom.map(P).join("L") + "Z" });
  // circling arrows in the asthenosphere
  for (const a of [-12, 12]) {
    const [x, y] = pt(735, a);
    el("path", { class: "illus", d: `M${x - 14},${y + 6}A16,13 0 1 1 ${x + 4},${y + 13}M${x + 4},${y + 13}l-9,2M${x + 4},${y + 13}l-3,-9` });
  }
  // magnet in the outer core
  const mg = el("g", { class: "magnet", "data-layer": "outer" });
  el("rect", { x: 548, y: 545, width: 34, height: 40, fill: "#c0392b" }, mg);
  el("rect", { x: 548, y: 585, width: 34, height: 40, fill: "#2a5a8c" }, mg);
  el("text", { x: 565, y: 565 }, mg).textContent = "N";
  el("text", { x: 565, y: 605 }, mg).textContent = "S";
  // wavy arrow rising from the inner core
  el("path", { class: "illus", d: "M500,760q-10,-10 0,-20q10,-10 0,-20q-10,-10 0,-20l-8,10M500,700l8,10" });
  // mantle bracket on the left
  const bt = pt(770, -HALF), bb = pt(450, -HALF);
  const bx = 175;
  el("path", { class: "bracket", d: `M${bx + 18},${bt[1]}H${bx}V${bb[1]}H${bx + 18}` });
  el("rect", { class: "hitzone", x: 30, y: bt[1], width: bx + 25 - 30, height: bb[1] - bt[1], "data-layer": "mantle" });
  // total box
  el("rect", { class: "totalbox", x: 760, y: 840, width: 260, height: 120, rx: 10, "data-layer": "earth" });

  // Label slots (names, thicknesses, temperatures, total)
  const SLOTS = {};
  function slot(id, x, y, text, opts = {}) {
    const g = el("g", { class: "slot" + (opts.small ? " small" : ""), "data-slot": id, "data-layer": opts.layer || "" });
    const w = opts.w || 200, h = opts.h || 40;
    const ax = opts.anchor === "start" ? x : opts.anchor === "end" ? x - w : x - w / 2;
    el("rect", { class: "box", x: ax - 6, y: y - h / 2 - 4, width: w + 12, height: h + 8, rx: 8 }, g);
    el("text", { class: "qmark", x: ax + w / 2, y }, g).textContent = "?";
    const t = el("text", { x, y, "text-anchor": opts.anchor || "middle", "dominant-baseline": "central" }, g);
    t.textContent = text;
    SLOTS[id] = g;
  }
  slot("n-litho", 500, 150, "Lithosphere", { layer: "litho", w: 190 });
  slot("n-astheno", 500, 228, "Asthenosphere", { layer: "astheno", w: 220 });
  slot("n-lower", 500, 380, "Lower Mantle", { layer: "lower", w: 200 });
  slot("n-outer", 455, 600, "Outer Core", { layer: "outer", w: 150, small: true });
  slot("n-inner", 500, 820, "Inner Core", { layer: "inner", w: 120, small: true, h: 34 });
  slot("n-mantle", bx - 12, (bt[1] + bb[1]) / 2, "Mantle", { layer: "mantle", anchor: "end", w: 110 });
  for (const l of LAYERS) {
    const rm = (l.r1 + l.r2) / 2, [x, y] = pt(rm, HALF);
    slot("k-" + l.id, x + 22, y, l.km, { layer: l.id, anchor: "start", w: 120, small: true });
  }
  const [t3x, t3y] = pt(700, -HALF), [t5x, t5y] = pt(450, -HALF);
  slot("t3000", t3x + 14, t3y - 18, "3000°F", { anchor: "start", w: 100, small: true, layer: "astheno" });
  slot("t5000", t5x + 14, t5y - 18, "5000°F", { anchor: "start", w: 100, small: true, layer: "lower" });
  slot("total", 890, 880, "6850 km", { layer: "earth", w: 150 });
  const tl = el("text", { x: 890, y: 930, "text-anchor": "middle", "font-size": 20, fill: "#333", "data-layer": "earth" });
  tl.textContent = "to the center";
  el("text", { x: 890, y: 1000, "text-anchor": "middle", "font-size": 19, fill: "#333" }).textContent = "Deepest hole drilled: about 12 km";

  const setSlot = (id, ...cls) => { const g = SLOTS[id]; g.classList.remove("blank", "target", "done", "picked"); cls.forEach(c => c && g.classList.add(c)); };
  const allSlots = cls => Object.keys(SLOTS).forEach(id => setSlot(id, cls));
  const clearBands = () => Object.values(bandEls).forEach(b => b.classList.remove("target", "picked", "right"));
  function markLayer(id, cls) {
    if (bandEls[id]) bandEls[id].classList.add(cls);
    if (id === "mantle") { bandEls.astheno.classList.add(cls); bandEls.lower.classList.add(cls); }
  }

  svg.addEventListener("click", e => {
    const s = e.target.closest("[data-slot]");
    const l = e.target.closest("[data-layer]");
    if (modeObj.tap) modeObj.tap({ slot: s && s.dataset.slot, layer: (s && s.dataset.layer) || (l && l.dataset.layer) || null });
  });

  // ================================================================ helpers
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const stars = id => "★".repeat(stat(id).box) + "☆".repeat(MASTER - stat(id).box);
  const ofMode = m => Q.filter(q => q.mode === m);
  const weakFirst = qs => shuffle([...qs]).sort((a, b) => stat(a.id).box - stat(b.id).box);
  function layerCard(id) {
    const l = byLayer[id];
    return `<div class="card" style="--c:${l.color}"><h3>${esc(l.name)}</h3><ul>${l.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>`;
  }
  const header = r => `<div class="row"><span class="muted">Question ${Math.min(r.i + 1, r.qs.length)} of ${r.qs.length}</span>
      <span class="muted" style="margin-left:auto">Score: ${r.score}</span></div>
      <div class="bar"><div style="width:${100 * r.i / r.qs.length}%"></div></div>`;

  const INFO = {
    label: ["Label it", "Build the diagram! A box or layer will glow. Tap the right word from the word bank."],
    facts: ["Facts", "Answer questions about each layer. Tap your answer from the word bank."],
    spell: ["Spelling ★", "The harder round! Type the answer. Spelling counts (capital letters don't)."],
  };
  function startScreen(mode) {
    const all = ofMode(mode), weak = all.filter(q => stat(q.id).box < MASTER);
    const size = mode === "label" ? all.length : 10;
    const tried = all.some(q => stats[q.id]);
    panel.innerHTML = `<h2>${INFO[mode][0]}</h2><p>${INFO[mode][1]}</p>
      <button class="btn primary" id="go">Start (${Math.min(size, all.length)} questions)</button>
      ${mode !== "label" ? `<button class="btn" id="go-all">All ${all.length} questions</button>` : ""}
      ${tried && weak.length && weak.length < all.length ? `<button class="btn" id="go-weak">Practice weak spots (${weak.length})</button>` : ""}`;
    panel.querySelector("#go").onclick = () => modeObj.begin(weakFirst(all).slice(0, size));
    const ga = panel.querySelector("#go-all"); if (ga) ga.onclick = () => modeObj.begin(weakFirst(all));
    const gw = panel.querySelector("#go-weak"); if (gw) gw.onclick = () => modeObj.begin(weakFirst(weak));
  }
  function endScreen(mode, r) {
    clearBands();
    const n = r.qs.length, pct = Math.round(100 * r.score / n);
    const cheer = pct === 100 ? "Perfect score! 🌋" : pct >= 80 ? "Great job! 🌎" : pct >= 50 ? "Good work -- keep practicing!" : "Nice try -- practice makes perfect!";
    panel.innerHTML = `<h2>Round complete!</h2><div class="big">${r.score} / ${n}</div><p>${cheer}</p>
      ${r.missed.length ? `<p class="muted">To review:</p><ul>${r.missed.map(id => `<li>${esc(qById[id].prompt)} <b>${esc(qById[id].answer)}</b></li>`).join("")}</ul>
      <button class="btn primary" id="again-miss">Practice these ${r.missed.length}</button>` : ""}
      <button class="btn" id="again">Play again</button>`;
    const am = panel.querySelector("#again-miss");
    if (am) am.onclick = () => modeObj.begin(shuffle([...r.missed]));
    panel.querySelector("#again").onclick = () => startScreen(mode);
  }
  function highlight(q) {
    clearBands();
    if (q.slot) setSlot(q.slot, "target");
    if (q.layer && (q.mode === "label" || (q.mode === "spell" && q.slot))) markLayer(q.layer, "target");
    if (q.slot === "n-mantle") markLayer("mantle", "target");
  }

  // ================================================================ modes
  const modes = {};

  modes.learn = {
    enter() { allSlots(); clearBands(); this.render(null); },
    render(id) {
      panel.innerHTML = `<h2>Learn the layers</h2>
        <p class="muted">Tap any layer, number, or picture on the diagram to see its facts.</p>
        <label style="display:flex;gap:8px;align-items:center;font-size:16px;margin:8px 0;cursor:pointer"><input type="checkbox" id="hide" style="width:22px;height:22px;flex:none"> Hide the names and numbers (test yourself!)</label>
        ${id ? layerCard(id) : `<div class="card muted">Start at the top (the lithosphere) and work your way down to the inner core.</div>`}
        <div class="row">${[...LAYERS, MANTLE, EARTH].map(l => `<button class="btn small" data-go="${l.id}">${esc(l.name)}</button>`).join("")}</div>
        <div class="wordbox"><b>Key word</b><br>${KEYWORDS.map(([w, d]) => `<b>${w}</b> = ${esc(d)}`).join("<br>")}</div>
        <div class="row"><button class="btn small" id="print-blank">Print blank diagram</button><button class="btn small" id="print-key">Print answer key</button></div>`;
      const hide = panel.querySelector("#hide");
      hide.checked = this.hidden || false;
      hide.onchange = () => { this.hidden = hide.checked; allSlots(this.hidden ? "blank" : null); };
      panel.querySelectorAll("[data-go]").forEach(b => b.onclick = () => this.pick(b.dataset.go));
      panel.querySelector("#print-blank").onclick = () => printDiagram(false);
      panel.querySelector("#print-key").onclick = () => printDiagram(true);
    },
    pick(id) {
      clearBands(); markLayer(id, "picked");
      this.render(id);
    },
    tap(t) {
      if (this.hidden && t.slot) { setSlot(t.slot, "picked"); }
      if (t.layer) this.pick(t.layer);
    },
  };

  // Tap-to-answer round (Label it + Facts share this)
  function tapMode(mode) {
    return {
      enter() { clearBands(); allSlots(mode === "label" ? "blank" : null); startScreen(mode); },
      begin(qs) {
        clearBands(); allSlots(mode === "label" ? "blank" : null);
        this.r = { qs, i: 0, score: 0, missed: [] };
        this.ask();
      },
      ask() {
        const r = this.r;
        if (r.i >= r.qs.length) return endScreen(mode, r);
        const q = r.qs[r.i];
        highlight(q);
        const bank = q.bank.length > 4 ? q.bank : shuffle([...q.bank]);
        const wide = bank.some(b => b.length > 22);
        panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div>
          <p class="muted">Word bank:</p>
          <div class="bank ${wide ? "wide" : ""}">${bank.map(b => `<button class="btn" data-a="${esc(b)}">${esc(b)}</button>`).join("")}</div>
          <div class="fb" id="fb"></div><div id="after"></div>`;
        panel.querySelectorAll("[data-a]").forEach(b => b.onclick = () => this.answer(b, q));
      },
      answer(btn, q) {
        const r = this.r, ok = btn.dataset.a === q.answer;
        record(q.id, ok);
        if (ok) r.score++; else r.missed.push(q.id);
        panel.querySelectorAll("[data-a]").forEach(b => {
          b.disabled = true;
          if (b.dataset.a === q.answer) b.classList.add("right"); else if (b === btn) b.classList.add("nope");
        });
        if (q.slot) setSlot(q.slot, "done");
        clearBands();
        if (q.layer) markLayer(q.layer, "right");
        const fb = panel.querySelector("#fb");
        fb.className = "fb " + (ok ? "good" : "bad");
        fb.textContent = ok ? "Correct!" : `The answer is: ${q.answer}`;
        const next = () => { r.i++; this.ask(); };
        if (ok) setTimeout(next, 1000);
        else {
          panel.querySelector("#after").innerHTML = `${q.layer ? layerCard(q.layer) : ""}<button class="btn primary" id="next">Next</button>`;
          panel.querySelector("#next").onclick = next;
        }
      },
    };
  }
  modes.label = tapMode("label");
  modes.facts = tapMode("facts");

  // Spelling: strict letters, capitals and extra spaces don't matter, "the" is optional
  const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim().replace(/^the /, "");
  function diffHtml(want, got) {
    let out = "";
    for (let i = 0; i < want.length; i++) {
      const ok = got[i] !== undefined && got[i].toLowerCase() === want[i].toLowerCase();
      out += ok ? esc(want[i]) : `<span class="x">${esc(want[i])}</span>`;
    }
    return out;
  }
  modes.spell = {
    enter() { clearBands(); allSlots(); startScreen("spell"); },
    begin(qs) {
      clearBands(); allSlots();
      // hide the layer names so they can't be copied
      for (const id of ["n-litho", "n-astheno", "n-lower", "n-outer", "n-inner", "n-mantle"]) setSlot(id, "blank");
      this.r = { qs, i: 0, score: 0, missed: [] };
      this.ask();
    },
    ask() {
      const r = this.r;
      if (r.i >= r.qs.length) return endScreen("spell", r);
      const q = r.qs[r.i];
      r.wrong = false; r.done = false;
      highlight(q);
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div>
        <input class="answer" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done">
        <button class="btn primary" id="check">Check</button>
        <div class="fb" id="fb"></div><div id="after"></div>`;
      const inp = panel.querySelector("#ans");
      inp.addEventListener("keydown", e => { if (e.key === "Enter") this.check(); });
      panel.querySelector("#check").onclick = () => this.check();
      if (window.matchMedia("(pointer: fine)").matches) inp.focus();
    },
    check() {
      const r = this.r, q = r.qs[r.i];
      if (r.done) return;
      const inp = panel.querySelector("#ans"), fb = panel.querySelector("#fb"), v = inp.value;
      if (!v.trim()) return;
      if (norm(v) === norm(q.answer)) {
        r.done = true;
        const first = !r.wrong;
        record(q.id, first);
        if (first) r.score++; else r.missed.push(q.id);
        if (q.slot) setSlot(q.slot, "done");
        clearBands(); if (q.layer) markLayer(q.layer, "right");
        fb.className = "fb good"; fb.textContent = first ? `Correct! ${q.answer}` : "Now you've got it!";
        panel.querySelector("#after").innerHTML = "";
        inp.blur();
        setTimeout(() => { r.i++; this.ask(); }, first ? 1000 : 1300);
      } else {
        r.wrong = true;
        fb.className = "fb bad"; fb.textContent = "Not quite. The right spelling is:";
        panel.querySelector("#after").innerHTML = `<p class="diff">${diffHtml(q.answer, v.trim().replace(/^the /i, ""))}</p><p class="muted">Type it correctly to keep going.</p>`;
        inp.select();
      }
    },
  };

  modes.progress = {
    enter() { clearBands(); allSlots(); this.render(); },
    render() {
      const all = Q.length, mastered = Q.filter(q => stat(q.id).box >= MASTER).length;
      const section = m => {
        const qs = ofMode(m), done = qs.filter(q => stat(q.id).box >= MASTER).length;
        const rows = [...qs].sort((a, b) => stat(a.id).box - stat(b.id).box);
        return `<p style="margin-top:14px"><b>${INFO[m][0]}</b>: ${done} / ${qs.length} mastered</p>
          <table class="prog">${rows.map(q => `<tr><td>${esc(q.prompt)} <span class="muted">${esc(q.answer)}</span></td><td class="stars">${stars(q.id)}</td></tr>`).join("")}</table>`;
      };
      panel.innerHTML = `<h2>Your stars</h2><div class="big">${mastered} / ${all} mastered</div>
        <div class="bar"><div style="width:${100 * mastered / all}%"></div></div>
        <p class="muted">Right on the first try = +1 star. A miss = -1 star. 3 stars = mastered!</p>
        ${["label", "facts", "spell"].map(section).join("")}
        <p><button class="btn small" id="reset">Reset stars</button></p>`;
      panel.querySelector("#reset").onclick = () => { if (confirm("Erase all stars and start over?")) { stats = {}; store.set("stats", stats); this.render(); } };
    },
  };

  // ================================================================ printing
  function printDiagram(withAnswers) {
    clearBands();
    allSlots(withAnswers ? null : "blank");
    document.getElementById("printkey").textContent = withAnswers ? " -- Answer key" : "";
    setTimeout(() => window.print(), 60);
  }
  window.addEventListener("afterprint", () => { if (modeObj === modes.learn) allSlots(modes.learn.hidden ? "blank" : null); });

  let modeObj = {};
  function setMode(m) {
    modeObj = modes[m];
    document.querySelectorAll("#modes button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
    modeObj.enter();
  }
  document.querySelectorAll("#modes button").forEach(b => b.onclick = () => setMode(b.dataset.mode));
  setMode("learn");

  // Direct print link: index.html#print=blank or #print=key
  const ph = new URLSearchParams(location.hash.slice(1)).get("print");
  if (ph) printDiagram(ph === "key");

  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
