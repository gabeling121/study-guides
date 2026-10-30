(() => {
  "use strict";
  // ================================================================ CONTENT -- edit this block for each new study guide
  // Everything the kid sees comes from here. Copy the study sheet EXACTLY (confirm with the parent first).
  const GUIDE = {"title": "Suburani Chapters 1-2: Grammar", "storageKey": "suburani_grammar12_stats"};
  const TOPICS = [{"id": "grammar", "name": "Grammar essentials", "color": "#8c1c22", "facts": ["Present tense: An action happening now or regularly.", "Person: Whether the subject is speaking, being spoken to, or being spoken about.", "1st person: The speaker.", "2nd person: The person being spoken to.", "3rd person: Someone or something being spoken about.", "Singular: One.", "Plural: More than one.", "Nominative case: Subject; predicate nominative.", "Accusative case: Direct object.", "These definitions supply the answers left blank on the worksheet."]}, {"id": "chart", "name": "Present active chart", "color": "#8c1c22", "facts": ["1st singular: -ō = I", "2nd singular: -s = you", "3rd singular: -t = he/she/it", "1st plural: -mus = we", "2nd plural: -tis = you (plural)", "3rd plural: -nt = they", "The 1st singular also uses -m in some verbs, such as sum. The regular identifying ending practiced here is -ō.", "Singular you means one person; plural you means more than one."]}, {"id": "conjugations", "name": "Recognize the conjugations", "color": "#8c1c22", "facts": ["1st: -ō, -āre; example on your notes: labōrō.", "2nd: -eō, -ēre; example on your notes: videō.", "3rd: -ō, -ere; example on your notes: legō.", "3rd -iō: -iō, -ere; no example listed.", "4th: -iō, -īre; example on your notes: dormīs.", "The final words are examples. dormīs is a 2nd-person singular form, not a 1st-person -iō form.", "Compare -ēre (2nd) with -ere (3rd). The macron changes the answer.", "Use both identifying endings to distinguish 3rd -iō from 4th."]}, {"id": "nouns", "name": "Noun charts: singular only", "color": "#8c1c22", "facts": ["1st declension feminine: nominative -a; accusative -am.", "2nd declension masculine: nominative -us / -er; accusative -um.", "3rd declension masculine/feminine: nominative varies; accusative -em.", "Nominative: subject; predicate nominative. Accusative: direct object.", "The 2nd-declension -us / -er answers and the 1st-declension chart are standard completions of the blank worksheet."]}, {"id": "third", "name": "Third-declension nominative endings", "color": "#8c1c22", "facts": ["Your confirmed class list: -er, -or, -is, -x, -ō, -ns.", "Use -ō with a macron. This is the class list to memorize, not a rule that every noun with one of these endings must be 3rd declension."]}];
  const KEYWORDS = [];
  const CHART = [["1st singular", "-ō", "I"], ["2nd singular", "-s", "you"], ["3rd singular", "-t", "he/she/it"], ["1st plural", "-mus", "we"], ["2nd plural", "-tis", "you (plural)"], ["3rd plural", "-nt", "they"]];
  const CONJ = [["1st", "-ō", "-āre", "labōrō"], ["2nd", "-eō", "-ēre", "videō"], ["3rd", "-ō", "-ere", "legō"], ["3rd -iō", "-iō", "-ere", ""], ["4th", "-iō", "-īre", "dormīs"]];
  const NOUNS = [["1st declension feminine", "-a", "-am"], ["2nd declension masculine", "-us / -er", "-um"], ["3rd declension masculine/feminine", "varies", "-em"]];
  const BASE = [{"id": "g0", "topic": "grammar", "prompt": "Which grammar term means: an action happening now or regularly?", "answer": "Present tense", "bank": ["Present tense", "Person", "1st person", "2nd person"], "accepted": ["Present tense", "Present"]}, {"id": "g1", "topic": "grammar", "prompt": "Which grammar term means: whether the subject is speaking, being spoken to, or being spoken about?", "answer": "Person", "bank": ["Person", "Present tense", "1st person", "2nd person"], "accepted": ["Person", "Person"]}, {"id": "g2", "topic": "grammar", "prompt": "Which grammar term means: the speaker?", "answer": "1st person", "bank": ["1st person", "Present tense", "Person", "2nd person"], "accepted": ["1st person", "1st person"]}, {"id": "g3", "topic": "grammar", "prompt": "Which grammar term means: the person being spoken to?", "answer": "2nd person", "bank": ["2nd person", "Present tense", "Person", "1st person"], "accepted": ["2nd person", "2nd person"]}, {"id": "g4", "topic": "grammar", "prompt": "Which grammar term means: someone or something being spoken about?", "answer": "3rd person", "bank": ["3rd person", "Present tense", "Person", "1st person"], "accepted": ["3rd person", "3rd person"]}, {"id": "g5", "topic": "grammar", "prompt": "Which grammar term means: one?", "answer": "Singular", "bank": ["Singular", "Present tense", "Person", "1st person"], "accepted": ["Singular", "Singular"]}, {"id": "g6", "topic": "grammar", "prompt": "Which grammar term means: more than one?", "answer": "Plural", "bank": ["Plural", "Present tense", "Person", "1st person"], "accepted": ["Plural", "Plural"]}, {"id": "g7", "topic": "grammar", "prompt": "Which grammar term means: subject; predicate nominative?", "answer": "Nominative case", "bank": ["Nominative case", "Present tense", "Person", "1st person"], "accepted": ["Nominative case", "Nominative"]}, {"id": "g8", "topic": "grammar", "prompt": "Which grammar term means: direct object?", "answer": "Accusative case", "bank": ["Accusative case", "Present tense", "Person", "1st person"], "accepted": ["Accusative case", "Accusative"]}, {"id": "gd0", "topic": "grammar", "prompt": "What does present tense mean?", "answer": "An action happening now or regularly", "bank": ["An action happening now or regularly", "past tense", "future tense", "plural"], "only": "quiz"}, {"id": "gd1", "topic": "grammar", "prompt": "What does person mean?", "answer": "Whether the subject is speaking, being spoken to, or being spoken about", "bank": ["Whether the subject is speaking, being spoken to, or being spoken about", "number", "tense", "case"], "only": "quiz"}, {"id": "gd2", "topic": "grammar", "prompt": "What does 1st person mean?", "answer": "The speaker", "bank": ["The speaker", "the listener", "someone being spoken about", "a direct object"], "only": "quiz"}, {"id": "gd3", "topic": "grammar", "prompt": "What does 2nd person mean?", "answer": "The person being spoken to", "bank": ["The person being spoken to", "the speaker", "someone being spoken about", "a subject ending"], "only": "quiz"}, {"id": "gd4", "topic": "grammar", "prompt": "What does 3rd person mean?", "answer": "Someone or something being spoken about", "bank": ["Someone or something being spoken about", "the speaker", "the listener", "a verb tense"], "only": "quiz"}, {"id": "gd5", "topic": "grammar", "prompt": "What does singular mean?", "answer": "One", "bank": ["One", "more than one", "past time", "a direct object"], "only": "quiz"}, {"id": "gd6", "topic": "grammar", "prompt": "What does plural mean?", "answer": "More than one", "bank": ["More than one", "one", "present time", "the speaker"], "only": "quiz"}, {"id": "gd7", "topic": "grammar", "prompt": "What does nominative case mean?", "answer": "Subject; predicate nominative", "bank": ["Subject; predicate nominative", "direct object", "verb tense", "plural only"], "only": "quiz"}, {"id": "gd8", "topic": "grammar", "prompt": "What does accusative case mean?", "answer": "Direct object", "bank": ["Direct object", "subject", "predicate nominative", "the speaker"], "only": "quiz"}, {"id": "ce0", "topic": "chart", "prompt": "Present active chart: 1st singular ending = _____.", "answer": "-ō", "bank": ["-ō", "-s", "-t", "-mus"], "accepted": ["-ō", "ō"]}, {"id": "cp0", "topic": "chart", "prompt": "Present active chart: English pronoun for 1st singular = _____.", "answer": "I", "bank": ["I", "you", "he/she/it", "we"], "accepted": ["I"]}, {"id": "cr0", "topic": "chart", "prompt": "The ending -ō identifies which person and number?", "answer": "1st singular", "bank": ["1st singular", "2nd singular", "3rd singular", "1st plural"], "accepted": ["1st singular", "first singular"]}, {"id": "ce1", "topic": "chart", "prompt": "Present active chart: 2nd singular ending = _____.", "answer": "-s", "bank": ["-s", "-ō", "-t", "-mus"], "accepted": ["-s", "s"]}, {"id": "cp1", "topic": "chart", "prompt": "Present active chart: English pronoun for 2nd singular = _____.", "answer": "you", "bank": ["you", "I", "he/she/it", "we"], "accepted": ["you"]}, {"id": "cr1", "topic": "chart", "prompt": "The ending -s identifies which person and number?", "answer": "2nd singular", "bank": ["2nd singular", "1st singular", "3rd singular", "1st plural"], "accepted": ["2nd singular", "second singular"]}, {"id": "ce2", "topic": "chart", "prompt": "Present active chart: 3rd singular ending = _____.", "answer": "-t", "bank": ["-t", "-ō", "-s", "-mus"], "accepted": ["-t", "t"]}, {"id": "cp2", "topic": "chart", "prompt": "Present active chart: English pronoun for 3rd singular = _____.", "answer": "he/she/it", "bank": ["he/she/it", "I", "you", "we"], "accepted": ["he/she/it"], "answerGroups": [["he"], ["she"], ["it"]]}, {"id": "cr2", "topic": "chart", "prompt": "The ending -t identifies which person and number?", "answer": "3rd singular", "bank": ["3rd singular", "1st singular", "2nd singular", "1st plural"], "accepted": ["3rd singular", "third singular"]}, {"id": "ce3", "topic": "chart", "prompt": "Present active chart: 1st plural ending = _____.", "answer": "-mus", "bank": ["-mus", "-ō", "-s", "-t"], "accepted": ["-mus", "mus"]}, {"id": "cp3", "topic": "chart", "prompt": "Present active chart: English pronoun for 1st plural = _____.", "answer": "we", "bank": ["we", "I", "you", "he/she/it"], "accepted": ["we"]}, {"id": "cr3", "topic": "chart", "prompt": "The ending -mus identifies which person and number?", "answer": "1st plural", "bank": ["1st plural", "1st singular", "2nd singular", "3rd singular"], "accepted": ["1st plural", "first plural"]}, {"id": "ce4", "topic": "chart", "prompt": "Present active chart: 2nd plural ending = _____.", "answer": "-tis", "bank": ["-tis", "-ō", "-s", "-t"], "accepted": ["-tis", "tis"]}, {"id": "cp4", "topic": "chart", "prompt": "Present active chart: English pronoun for 2nd plural = _____.", "answer": "you (plural)", "bank": ["you (plural)", "I", "he/she/it", "we"], "accepted": ["you (plural)", "you", "you all", "y’all", "yall", "you plural"]}, {"id": "cr4", "topic": "chart", "prompt": "The ending -tis identifies which person and number?", "answer": "2nd plural", "bank": ["2nd plural", "1st singular", "2nd singular", "3rd singular"], "accepted": ["2nd plural", "second plural"]}, {"id": "ce5", "topic": "chart", "prompt": "Present active chart: 3rd plural ending = _____.", "answer": "-nt", "bank": ["-nt", "-ō", "-s", "-t"], "accepted": ["-nt", "nt"]}, {"id": "cp5", "topic": "chart", "prompt": "Present active chart: English pronoun for 3rd plural = _____.", "answer": "they", "bank": ["they", "I", "you", "he/she/it"], "accepted": ["they"]}, {"id": "cr5", "topic": "chart", "prompt": "The ending -nt identifies which person and number?", "answer": "3rd plural", "bank": ["3rd plural", "1st singular", "2nd singular", "3rd singular"], "accepted": ["3rd plural", "third plural"]}, {"id": "ci0", "topic": "conjugations", "prompt": "1st conjugation: infinitive ending = _____.", "answer": "-āre", "bank": ["-āre", "-ēre", "-ere", "-īre"], "accepted": ["-āre", "āre"]}, {"id": "cf0", "topic": "conjugations", "prompt": "1st conjugation: 1st-person singular identifying ending = _____.", "answer": "-ō", "bank": ["-ō", "-eō", "-iō", "-s"], "accepted": ["-ō", "ō"]}, {"id": "cc0", "topic": "conjugations", "prompt": "Which conjugation has the identifying pair -ō, -āre?", "answer": "1st", "bank": ["1st", "2nd", "3rd", "3rd -iō"], "accepted": ["1st", "1st conjugation", "first"]}, {"id": "cx0", "topic": "conjugations", "prompt": "The example labōrō belongs to which conjugation?", "answer": "1st", "bank": ["1st", "2nd", "3rd", "4th"], "accepted": ["1st", "1st conjugation", "first"]}, {"id": "ci1", "topic": "conjugations", "prompt": "2nd conjugation: infinitive ending = _____.", "answer": "-ēre", "bank": ["-ēre", "-āre", "-ere", "-īre"], "accepted": ["-ēre", "ēre"]}, {"id": "cf1", "topic": "conjugations", "prompt": "2nd conjugation: 1st-person singular identifying ending = _____.", "answer": "-eō", "bank": ["-eō", "-ō", "-iō", "-s"], "accepted": ["-eō", "eō"]}, {"id": "cc1", "topic": "conjugations", "prompt": "Which conjugation has the identifying pair -eō, -ēre?", "answer": "2nd", "bank": ["2nd", "1st", "3rd", "3rd -iō"], "accepted": ["2nd", "2nd conjugation", "second"]}, {"id": "cx1", "topic": "conjugations", "prompt": "The example videō belongs to which conjugation?", "answer": "2nd", "bank": ["2nd", "1st", "3rd", "4th"], "accepted": ["2nd", "2nd conjugation", "second"]}, {"id": "ci2", "topic": "conjugations", "prompt": "3rd conjugation: infinitive ending = _____.", "answer": "-ere", "bank": ["-ere", "-āre", "-ēre", "-īre"], "accepted": ["-ere", "ere"]}, {"id": "cf2", "topic": "conjugations", "prompt": "3rd conjugation: 1st-person singular identifying ending = _____.", "answer": "-ō", "bank": ["-ō", "-eō", "-iō", "-s"], "accepted": ["-ō", "ō"]}, {"id": "cc2", "topic": "conjugations", "prompt": "Which conjugation has the identifying pair -ō, -ere?", "answer": "3rd", "bank": ["3rd", "1st", "2nd", "3rd -iō"], "accepted": ["3rd", "3rd conjugation", "third"]}, {"id": "cx2", "topic": "conjugations", "prompt": "The example legō belongs to which conjugation?", "answer": "3rd", "bank": ["3rd", "1st", "2nd", "4th"], "accepted": ["3rd", "3rd conjugation", "third"]}, {"id": "ci3", "topic": "conjugations", "prompt": "3rd -iō conjugation: infinitive ending = _____.", "answer": "-ere", "bank": ["-ere", "-āre", "-ēre", "-īre"], "accepted": ["-ere", "ere"]}, {"id": "cf3", "topic": "conjugations", "prompt": "3rd -iō conjugation: 1st-person singular identifying ending = _____.", "answer": "-iō", "bank": ["-iō", "-ō", "-eō", "-s"], "accepted": ["-iō", "iō"]}, {"id": "cc3", "topic": "conjugations", "prompt": "Which conjugation has the identifying pair -iō, -ere?", "answer": "3rd -iō", "bank": ["3rd -iō", "1st", "2nd", "3rd"], "accepted": ["3rd -iō", "3rd -iō conjugation", "third -iō"]}, {"id": "ci4", "topic": "conjugations", "prompt": "4th conjugation: infinitive ending = _____.", "answer": "-īre", "bank": ["-īre", "-āre", "-ēre", "-ere"], "accepted": ["-īre", "īre"]}, {"id": "cf4", "topic": "conjugations", "prompt": "4th conjugation: 1st-person singular identifying ending = _____.", "answer": "-iō", "bank": ["-iō", "-ō", "-eō", "-s"], "accepted": ["-iō", "iō"]}, {"id": "cc4", "topic": "conjugations", "prompt": "Which conjugation has the identifying pair -iō, -īre?", "answer": "4th", "bank": ["4th", "1st", "2nd", "3rd"], "accepted": ["4th", "4th conjugation", "fourth"]}, {"id": "cx4", "topic": "conjugations", "prompt": "The example dormīs belongs to which conjugation?", "answer": "4th", "bank": ["4th", "1st", "2nd", "3rd"], "accepted": ["4th", "4th conjugation", "fourth"]}, {"id": "na0", "topic": "nouns", "prompt": "1st declension feminine: accusative singular ending = _____.", "answer": "-am", "bank": ["-am", "-um", "-em", "-a"], "accepted": ["-am", "am"]}, {"id": "nn0", "topic": "nouns", "prompt": "1st declension feminine: nominative singular ending = _____.", "answer": "-a", "bank": ["-a", "-us / -er", "varies", "-em"], "accepted": ["-a", "a"]}, {"id": "na1", "topic": "nouns", "prompt": "2nd declension masculine: accusative singular ending = _____.", "answer": "-um", "bank": ["-um", "-am", "-em", "-a"], "accepted": ["-um", "um"]}, {"id": "nn1", "topic": "nouns", "prompt": "2nd declension masculine: nominative singular endings = _____.", "answer": "-us / -er", "bank": ["-us / -er", "-a", "varies", "-em"], "answerGroups": [["-us", "us"], ["-er", "er"]]}, {"id": "na2", "topic": "nouns", "prompt": "3rd declension masculine/feminine: accusative singular ending = _____.", "answer": "-em", "bank": ["-em", "-am", "-um", "-a"], "accepted": ["-em", "em"]}, {"id": "nn2", "topic": "nouns", "prompt": "3rd declension masculine/feminine: nominative singular ending = _____.", "answer": "varies", "bank": ["varies", "-a", "-us / -er", "-em"], "accepted": ["varies", "varies", "variable"]}, {"id": "te0", "topic": "third", "prompt": "Complete the class list of 3rd-declension nominative singular endings: _____, -or, -is, -x, -ō, -ns", "answer": "-er", "bank": ["-er", "-a", "-us", "-um"], "accepted": ["-er", "er"]}, {"id": "te1", "topic": "third", "prompt": "Complete the class list of 3rd-declension nominative singular endings: -er, _____, -is, -x, -ō, -ns", "answer": "-or", "bank": ["-or", "-a", "-us", "-um"], "accepted": ["-or", "or"]}, {"id": "te2", "topic": "third", "prompt": "Complete the class list of 3rd-declension nominative singular endings: -er, -or, _____, -x, -ō, -ns", "answer": "-is", "bank": ["-is", "-a", "-us", "-um"], "accepted": ["-is", "is"]}, {"id": "te3", "topic": "third", "prompt": "Complete the class list of 3rd-declension nominative singular endings: -er, -or, -is, _____, -ō, -ns", "answer": "-x", "bank": ["-x", "-a", "-us", "-um"], "accepted": ["-x", "x"]}, {"id": "te4", "topic": "third", "prompt": "Complete the class list of 3rd-declension nominative singular endings: -er, -or, -is, -x, _____, -ns", "answer": "-ō", "bank": ["-ō", "-a", "-us", "-um"], "accepted": ["-ō", "ō"]}, {"id": "te5", "topic": "third", "prompt": "Complete the class list of 3rd-declension nominative singular endings: -er, -or, -is, -x, -ō, _____", "answer": "-ns", "bank": ["-ns", "-a", "-us", "-um"], "accepted": ["-ns", "ns"]}, {"id": "tall", "topic": "third", "prompt": "Type all SIX third-declension nominative singular endings from the class list, in any order.", "answer": "-er, -or, -is, -x, -ō, -ns", "bank": ["-er, -or, -is, -x, -ō, -ns"], "allRequired": ["-er", "-or", "-is", "-x", "-ō", "-ns"], "only": "spell"}, {"id": "tcase", "topic": "third", "prompt": "These endings belong to which case: -er, -or, -is, -x, -ō, -ns?", "answer": "Nominative", "bank": ["Nominative", "Accusative", "Genitive", "Ablative"], "accepted": ["nominative", "nominative case"]}];
  const Q = BASE.flatMap(q => ["quiz", "spell"].filter(mode => !q.only || q.only === mode).map(mode => ({...q, id: q.id+"_"+mode, mode})));
  let focus = "all";
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
  const ofMode = m => Q.filter(q => q.mode === m && (focus === "all" || q.topic === focus));
  const weakFirst = qs => shuffle([...qs]);
  const card = id => { const t = byTopic[id]; return t ? `<div class="card" style="--c:${t.color}"><h3>${esc(t.name)}</h3><ul>${t.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>` : ""; };
  const header = r => `<div class="row"><span class="muted">Question ${Math.min(r.i + 1, r.qs.length)} of ${r.qs.length}</span>
    <span class="muted" style="margin-left:auto">Score: ${r.score}</span></div><div class="bar"><div style="width:${100 * r.i / r.qs.length}%"></div></div>`;
  const INFO = { quiz: ["Multiple choice", "Choose one answer. Questions and choices shuffle each round."], spell: ["Fill in the blank ★", "Type from memory. No word bank. Macrons and spelling count; capitals and spaces do not."] };

  function startScreen(mode) {
    const all = ofMode(mode), weak = all.filter(q => stat(q.id).box < MASTER), size = Math.min(10, all.length);
    panel.innerHTML = `<h2>${INFO[mode][0]}</h2><p>${INFO[mode][1]}</p>
      <p><label>Focus: <select id="focus"><option value="all">All topics</option>${TOPICS.map(t => `<option value="${t.id}">${esc(t.name)}</option>`).join("")}</select></label></p>
      <button class="btn primary" id="go">Start (${size} questions)</button>
      <button class="btn" id="go-all">All ${all.length} questions</button>
      ${all.some(q => stats[q.id]) && weak.length ? `<button class="btn" id="go-weak">Practice weak spots (${weak.length})</button>` : ""}`;
    panel.querySelector("#focus").value = focus;
    panel.querySelector("#focus").onchange = e => { focus = e.target.value; startScreen(mode); };
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
  function table(head, rows, hide = false) {
    return `<div class="tablewrap"><table class="reference"><thead><tr>${head.map(h=>`<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr><th scope="row">${esc(row[0])}</th>${row.slice(1).map(v=>`<td><span class="reveal">${hide ? "________________" : esc(v)}</span></td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  function charts(blank = false) {
    return `<h3>Present active: endings and English pronouns</h3>${table(["Person", "Singular", "Plural"], [0,1,2].map(i=>[["1st","2nd","3rd"][i], CHART[i][1]+" = "+CHART[i][2], CHART[i+3][1]+" = "+CHART[i+3][2]]), blank)}
    <h3>Conjugation identifiers</h3>${table(["Conjugation", "1st singular", "Infinitive", "Example in notes"],CONJ.map(c=>[c[0],c[1],c[2],c[3] || "Not listed"]), blank)}
    <h3>Noun endings: singular</h3>${table(["Declension", "Nominative", "Accusative"], NOUNS, blank)}
    <h3>Third-declension nominative singular</h3><p class="reveal">${blank ? "________________________________________________" : "-er, -or, -is, -x, -ō, -ns"}</p>`;
  }
  modes.learn = {
    enter() {
      panel.innerHTML = `<p class="eyebrow">LATIN • CHAPTERS 1-2</p><h2>Build your grammar skills</h2><p>Study the charts. Hide the answers, then say them from memory.</p><label class="toggle"><input type="checkbox" id="hide"> Hide chart answers</label><div id="charts">${charts()}</div>
      <h3>Review cards</h3>${TOPICS.map(t=>`<details><summary>${esc(t.name)}</summary>${card(t.id)}</details>`).join("")}
      <p class="muted">Definitions and blank chart answers are standard Latin completions. The six third-declension endings follow your confirmed class notes.</p>
      <div class="row"><button class="btn" id="print-blank">Print practice sheet</button><button class="btn" id="print-key">Print answer key</button></div>`;
      panel.querySelector("#hide").onchange = e => { panel.querySelector("#charts").classList.toggle("conceal", e.target.checked); };
      panel.querySelector("#print-blank").onclick = () => printSheet(false);
      panel.querySelector("#print-key").onclick = () => printSheet(true);
    },
  };
  modes.quiz = {
    enter() { startScreen("quiz"); },
    begin(qs) { this.r = { qs, i: 0, score: 0, missed: [] }; this.ask(); },
    ask() {
      const r = this.r; if (r.i >= r.qs.length) return endScreen("quiz", r);
      r.done = false;
      const q = r.qs[r.i], bank = shuffle([q.answer, ...shuffle(q.bank.filter(a => a !== q.answer)).slice(0,3)]);
      panel.innerHTML = `${header(r)}<div class="big">${esc(q.prompt)}</div><p class="muted">Choose one:</p>
        <div class="bank ${bank.some(b => b.length > 22) ? "wide" : ""}">${bank.map(b => `<button class="btn" data-a="${esc(b)}">${esc(b)}</button>`).join("")}</div>
        <div class="fb" id="fb" role="status"></div><div id="after"></div>`;
      panel.querySelectorAll("[data-a]").forEach(b => b.onclick = () => this.answer(b, q));
    },
    answer(btn, q) {
      const r = this.r, ok = btn.dataset.a === q.answer;
      if (r.done) return; r.done = true;
      record(q.id, ok); if (ok) r.score++; else r.missed.push(q.id);
      panel.querySelectorAll("[data-a]").forEach(b => { b.disabled = true; if (b.dataset.a === q.answer) b.classList.add("right"); else if (b === btn) b.classList.add("nope"); });
      const fb = panel.querySelector("#fb"); fb.className = "fb " + (ok ? "good" : "bad"); fb.textContent = ok ? "Correct!" : `The answer is: ${q.answer}`;
      const next = () => { r.i++; this.ask(); };
      if (ok) pendingTimer = setTimeout(next, 1000);
      else { panel.querySelector("#after").innerHTML = `${card(q.topic)}<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
    },
  };
  // Preserve letters, accents, digits, and meaningful symbols. Ignore spacing and case.
  // Put confirmed equivalent wordings in q.accepted; keep q.answer as the sheet's answer.
  // Ignore formatting, but preserve macrons, digits, and the order within phrases.
  const norm = s => s.normalize("NFC").toLowerCase().replace(/[.,!?;:()\-–—]/g, "").replace(/\s+/g, "");
  const splitAnswers = value => value.split(/\s*[,/;&]\s*|\s+(?:or|and)\s+/i);
  function acceptsWritten(q, value) {
    if (q.allRequired) {
      const parts = splitAnswers(value).map(norm);
      const wanted = q.allRequired.map(norm);
      return parts.length === wanted.length && new Set(parts).size === wanted.length && wanted.every(a => parts.includes(a));
    }
    if ((q.accepted || [q.answer]).some(a => norm(value) === norm(a))) return true;
    if (!q.answerGroups) return false;
    const parts = splitAnswers(value);
    return parts.length > 0 && parts.every(p => norm(p) && q.answerGroups.some(g => g.some(a => norm(p) === norm(a))));
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
        <div class="row" aria-label="Macron keyboard">${[..."āēīōū"].map(c => `<button class="btn macron" data-char="${c}" aria-label="Insert ${c}">${c}</button>`).join("")}</div><p class="muted">Macrons required. Use the buttons to insert them at your cursor.</p>
        <button class="btn primary" id="check">Check</button><div class="fb" id="fb" role="status"></div><div id="after"></div>`;
      const inp = panel.querySelector("#ans");
      panel.querySelectorAll("[data-char]").forEach(b => {
        b.onpointerdown = e => e.preventDefault();
        b.onclick = () => { inp.setRangeText(b.dataset.char, inp.selectionStart, inp.selectionEnd, "end"); inp.focus(); };
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
        pendingTimer = setTimeout(() => { r.i++; this.ask(); }, first ? 1000 : 1300);
      } else {
        r.wrong = true; fb.className = "fb bad"; fb.textContent = "Not quite. Check the spelling and macrons:";
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
    sheet.innerHTML = `<h2>Suburani Chapters 1-2: Grammar${withAnswers ? " -- Answer key" : " -- Practice"}</h2><p>Name: ____________________</p>${charts(!withAnswers)}<h3>Grammar review</h3><ol>${BASE.filter(q=>q.id.startsWith("g") && !q.id.startsWith("gd")).map(q=>`<li>${esc(q.prompt)} <b>${withAnswers ? esc(q.answer) : "________________"}</b></li>`).join("")}</ol><p class="print-note">Macrons count. The conjugation columns ask for identifying endings, not full conjugations.</p>`;
    setTimeout(() => window.print(), 60);
  }

  let pendingTimer;
  let modeObj = {};
  function setMode(m) {
    clearTimeout(pendingTimer);
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
