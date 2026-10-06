(() => {
  "use strict";
  // ================================================================ CONTENT (from the textbook passage)
  const GUIDE = { title: "Mesopotamia & Sumer", storageKey: "sumer_stats" };

  // Key terms: [term, pronunciation (from the text, or ""), meaning, group]
  const VOCAB = [
    ["Mesopotamia", "MEH • suh • puh • TAY • mee • uh", "\"the land between the rivers\" (Greek); between the Tigris and Euphrates Rivers", "land"],
    ["Fertile Crescent", "", "a curving strip of good farmland from the Mediterranean Sea to the Persian Gulf", "land"],
    ["silt", "", "small particles of soil left behind by floods; very good for farming", "land"],
    ["irrigation", "IHR • uh • GAY • shuhn", "watering crops by digging canals that carry water from a water source to the fields", "land"],
    ["surplus", "SUHR • plus", "an extra amount (of food)", "land"],
    ["artisan", "", "a skilled worker who makes things like cloth, pottery, tools, and weapons", "land"],
    ["city-state", "", "a city and the lands around it, with its own government, not part of a larger state", "gov"],
    ["alliance", "uh • LY • uhns", "an agreement to help each other and protect common interests", "gov"],
    ["polytheism", "PAH • lee • thee • ih • zuhm", "worshipping many gods", "gov"],
    ["ziggurat", "ZIG • oo • rat", "a large temple; the name means \"to rise high\"; the top was the god's home", "gov"],
    ["monarchy", "", "a government ruled by a king", "gov"],
    ["hereditary", "", "passed down in a family: when the king died, his son took over", "gov"],
    ["cuneiform", "kyoo • NEE • uh • FAWRM", "Sumerian writing made of wedge-shaped marks cut into damp clay with a sharp reed", "write"],
    ["scribe", "SKRYB", "an official record keeper", "write"],
    ["epic", "", "a long poem that tells the story of a hero", "write"],
    ["cradle of civilization", "", "a name for Mesopotamia: the beginning of organized human society", "write"],
  ];

  // Learn cards
  const TOPICS = [
    { id: "why", name: "Why settle in Mesopotamia?", color: "#5a9bd5", facts: [
      "The need for water for drinking and growing crops influenced where people settled.",
      "The first civilizations developed about 3000 B.C. in the river valleys of Mesopotamia, Egypt, India, and China.",
      "People in these civilizations formed social classes, did specialized work, used better technology, set up governments, and developed values and beliefs."] },
    { id: "rivers", name: "The Two Rivers", color: "#3f86b0", facts: [
      "Mesopotamia, the earliest known civilization, developed in what is now southern Iraq.",
      "Mesopotamia means \"the land between the rivers\" in Greek: the plain between the Tigris and Euphrates Rivers.",
      "The rivers are nearly parallel and flow more than 1,000 miles (1,600 km) southeast to the Persian Gulf.",
      "Mesopotamia was in the eastern part of the Fertile Crescent, a curving strip of good farmland from the Mediterranean Sea to the Persian Gulf.",
      "The Fertile Crescent includes parts of Turkey, Syria, Iraq, Lebanon, Israel, and Jordan."] },
    { id: "settle", name: "Early Valley Dwellers", color: "#8a6d3b", facts: [
      "In the 1800s, archaeologists began to dig up buildings and artifacts.",
      "People first settled Mesopotamia about 7000 B.C. The first settlers were hunters and herders.",
      "By about 4000 B.C., groups moved to the plain and built farming villages along the two rivers."] },
    { id: "taming", name: "Taming the Rivers", color: "#4a9a6a", facts: [
      "Little or no rain fell in summer, so the rivers were low and there wasn't enough water to plant in the fall.",
      "In spring, rain and melting snow from the northern mountains made the rivers flood.",
      "Floods could sweep away crops, homes, and livestock, but they left silt: very good soil for farming.",
      "People built dams to control floods and dug canals to bring water to fields (irrigation).",
      "Irrigation let farmers grow surpluses, so some people became artisans.",
      "Villages near trade grew into cities. By 3000 B.C., several cities developed in Sumer, in southern Mesopotamia."] },
    { id: "cities", name: "Sumer's City-States", color: "#b5651d", facts: [
      "Sumerians built the first cities in Southwest Asia, including Ur, Uruk, and Eridu.",
      "Mudflats and scorching desert made travel and communication hard, so each city became independent: a city-state.",
      "City-states had about 5,000 to 20,000 people.",
      "Each was protected by a large wall made of mud bricks (mud mixed with crushed reeds, dried in the sun), because stone and wood were scarce.",
      "Gates were open in the day and closed at night. The palace, a large temple, and public buildings were in the center.",
      "City-states fought over resources and borders, and traded and formed alliances in peacetime."] },
    { id: "gods", name: "Gods, Priests, and Kings", color: "#9b59b6", facts: [
      "Sumerians worshipped many gods (polytheism). Some gods controlled nature (rain, wind); some guided activities (plowing, brick-making).",
      "Each city-state honored its own god with a ziggurat. Ziggurat means \"to rise high\" in the ancient Akkadian language.",
      "The top of the ziggurat was the god's home; only special priests could go there.",
      "At first, priests ruled the city-states. Later, city-states became monarchies.",
      "Kings claimed their power came from the city's god. The first kings were probably war heroes. Rule became hereditary."] },
    { id: "classes", name: "Social Groups and Families", color: "#c0392b", facts: [
      "Upper class: kings, priests, warriors, and government officials.",
      "Middle class (the largest): merchants, farmers, fishers, and artisans.",
      "Lowest class: enslaved people, mostly captured in war; also criminals and people who couldn't pay debts.",
      "Men headed the home. Boys went to school and trained for a job.",
      "Women ran the home and cared for children; some owned businesses.",
      "The law required parents to care for children, and adult children to care for parents who needed help."] },
    { id: "trade", name: "Farmers and Traders", color: "#d4a017", facts: [
      "Most Sumerians were farmers. Major crops: wheat, barley, and dates. Animals: sheep, goats, and pigs.",
      "Trade routes reached as far as India and Egypt.",
      "Merchants traded wheat, barley, and tools for timber, minerals, and metals.",
      "Carnelian: a red stone from India's Indus Valley. Lapis lazuli: a blue stone from what is now Afghanistan.",
      "Iron and silver came from present-day Turkey."] },
    { id: "writing", name: "Writing", color: "#6d4c41", facts: [
      "Writing is perhaps the most important Sumerian contribution: the earliest known writing system.",
      "Cuneiform had about 1,200 characters for names, objects, and numbers.",
      "It was written by cutting wedge-shaped marks into damp clay with a sharp reed (they had no paper). Cuneiform comes from a Latin word meaning \"wedge.\"",
      "Only a few people, mostly boys from wealthy families, learned to read and write. Some became scribes.",
      "Scribes recorded court records, marriage contracts, business dealings, and important events.",
      "The world's oldest known story, the Epic of Gilgamesh, was written more than 4,000 years ago."] },
    { id: "tech", name: "Technology and Mathematics", color: "#2e7d6b", facts: [
      "Sumerians were the first to use the wheel; a Sumerian illustration from about 3500 B.C. shows a wheeled vehicle.",
      "They built the first carts (pulled by donkeys) and the chariot for war.",
      "They developed the sailboat, a wooden plow, and the potter's wheel.",
      "They were the first to make bronze, from copper and tin.",
      "They used geometry to measure fields and plan buildings, and a number system based on 60.",
      "The 60-minute hour, 60-second minute, and 360-degree circle came from the Sumerians.",
      "They watched the stars to know when to plant and hold ceremonies, and made a 12-month calendar based on the moon.",
      "Mesopotamia is called the \"cradle of civilization.\""] },
  ];

  // ---- Questions
  const Q = [];
  const TERMS = g => VOCAB.filter(v => v[3] === g).map(v => v[0]);
  // Vocabulary: meaning -> pick the word from a word bank
  for (const [term, , def, g] of VOCAB) Q.push({ id: "v-" + term, mode: "quiz", prompt: `Which word means: ${def}?`, answer: term, bank: TERMS(g), topic: "vocab" });
  const DATES = ["about 7000 B.C.", "about 4000 B.C.", "about 3500 B.C.", "about 3000 B.C."];
  const F = (id, prompt, answer, bank, topic) => Q.push({ id: "f-" + id, mode: "quiz", prompt, answer, bank: bank.includes(answer) ? bank : [answer, ...bank], topic });
  F("water", "What most influenced where people settled?", "the need for water for drinking and growing crops", ["gold and silver mines", "stone for building", "forests for wood"], "why");
  F("3000", "About when did the first civilizations develop?", "about 3000 B.C.", DATES, "why");
  F("four", "In which four river valleys did the first civilizations develop?", "Mesopotamia, Egypt, India, and China", ["Greece, Rome, Egypt, and India", "Sumer, Akkad, Turkey, and Syria", "China, Japan, India, and Iraq"], "why");
  F("iraq", "Mesopotamia developed in what is now...", "southern Iraq", ["northern Egypt", "western Turkey", "India"], "rivers");
  F("rivers", "Mesopotamia began on the plain between which two rivers?", "the Tigris and Euphrates", ["the Nile and Jordan", "the Indus and Ganges", "the Tigris and Nile"], "rivers");
  F("gulf", "The Tigris and Euphrates flow southeast into the...", "Persian Gulf", ["Mediterranean Sea", "Red Sea", "Black Sea"], "rivers");
  F("length", "How far do the Tigris and Euphrates flow?", "more than 1,000 miles (1,600 km)", ["about 100 miles (160 km)", "about 300 miles (480 km)", "more than 5,000 miles (8,000 km)"], "rivers");
  F("fcfrom", "The Fertile Crescent stretches from the...", "Mediterranean Sea to the Persian Gulf", ["Red Sea to the Black Sea", "Nile River to the Indus River", "Persian Gulf to India"], "rivers");
  F("fccountries", "Which modern countries include parts of the Fertile Crescent?", "Turkey, Syria, Iraq, Lebanon, Israel, and Jordan",
    ["Egypt, Libya, Sudan, and Chad", "Iran, Afghanistan, Pakistan, and India", "Greece, Italy, Spain, and France"], "rivers");
  F("1800s", "When did archaeologists begin digging up Mesopotamia's buildings and artifacts?", "in the 1800s", ["in 3000 B.C.", "in the 1200s", "in the 1950s"], "settle");
  F("7000", "About when did people first settle Mesopotamia?", "about 7000 B.C.", DATES, "settle");
  F("hunters", "Who were the first settlers of Mesopotamia?", "hunters and herders", ["farmers and traders", "kings and priests", "scribes and artisans"], "settle");
  F("4000", "By about when had groups moved to the plain and built farming villages?", "about 4000 B.C.", DATES, "settle");
  F("summer", "Why didn't farmers have enough water to plant in the fall?", "little or no rain fell in summer, so the rivers were low",
    ["the rivers froze in winter", "the dams broke every year", "it rained too much"], "taming");
  F("spring", "What made the rivers flood in the spring?", "rain and melting snow from the northern mountains", ["ocean tides", "earthquakes", "broken dams"], "taming");
  F("floodgood", "Why were the floods also helpful?", "they left silt, a very good soil for farming", ["they brought fish to the fields", "they made lakes for drinking water", "they washed away the desert"], "taming");
  F("dams", "What did people build to control the seasonal floods?", "dams", ["ziggurats", "city walls", "chariots"], "taming");
  F("canals", "What did farmers dig to bring water from a water source to their fields?", "canals", ["dams", "wells", "tunnels"], "taming");
  F("artisans", "When food was plentiful, some people stopped farming and became...", "artisans", ["hunters", "herders", "nomads"], "taming");
  F("sumercities", "By 3000 B.C., several cities developed in which region of southern Mesopotamia?", "Sumer", ["Egypt", "Akkad", "Turkey"], "taming");
  F("urcities", "Which were Sumerian cities?", "Ur, Uruk, and Eridu", ["Athens, Sparta, and Troy", "Memphis, Thebes, and Giza", "Rome, Carthage, and Alexandria"], "cities");
  F("isolated", "Why did each Sumerian city become independent?", "mudflats and desert made travel and communication hard",
    ["the rivers separated every city", "the kings did not allow travel", "each city spoke a different language"], "cities");
  F("pop", "About how many people lived in a Sumerian city-state?", "about 5,000 to 20,000", ["about 500 to 1,000", "about 100,000", "about 1 million"], "cities");
  F("brick", "What did Sumerians use as their main building material?", "mud bricks mixed with crushed reeds and dried in the sun",
    ["stone blocks", "wooden beams", "bronze sheets"], "cities");
  F("whymud", "Why did Sumerians build with mud?", "stone and wood were in short supply", ["mud was stronger than stone", "their god required it", "mud was easy to carry"], "cities");
  F("gates", "The gates in the city walls were...", "open during the day and closed at night", ["always open", "always closed", "opened only for the king"], "cities");
  F("center", "What was in the center of a Sumerian city?", "the ruler's palace, a large temple, and other public buildings",
    ["the farms and fields", "the city wall", "the homes of enslaved people"], "cities");
  F("war", "City-states often went to war with each other over...", "resources and political borders", ["sports contests", "which language to speak", "the calendar"], "cities");
  F("peace", "In times of peace, city-states...", "traded and formed alliances", ["joined into one big empire", "stopped farming", "tore down their walls"], "cities");
  F("gods", "Some Sumerian gods had power over parts of nature, such as...", "the rain and the wind", ["the stock market", "the printing press", "the Nile River"], "gods");
  F("akkadian", "\"Ziggurat\" means \"to rise high\" in which ancient language?", "Akkadian", ["Greek", "Latin", "Egyptian"], "gods");
  F("top", "What was at the very top of the ziggurat?", "the god's home, where only special priests could go", ["the king's bedroom", "a market", "a school for scribes"], "gods");
  F("firstrule", "Who ruled the city-states in the early days?", "priests", ["kings", "scribes", "merchants"], "gods");
  F("kingpower", "Sumerian kings claimed they got their power to rule from...", "the city's god", ["a vote of the people", "the priests", "the army"], "gods");
  F("firstkings", "The first Sumerian kings were most likely...", "war heroes", ["priests", "scribes", "farmers"], "gods");
  F("queens", "Did the wives of kings usually have political power?", "no, but some controlled their own lands", ["yes, they ruled with the king", "yes, they chose the next king", "no, and they could not own anything"], "gods");
  F("upper", "Who was in Sumer's upper class?", "kings, priests, warriors, and government officials",
    ["merchants, farmers, fishers, and artisans", "enslaved people", "scribes and students"], "classes");
  F("largest", "Which was Sumer's largest social group?", "the middle class", ["the upper class", "the lowest class", "the priests"], "classes");
  F("middle", "Who was in the middle class?", "merchants, farmers, fishers, and artisans", ["kings, priests, warriors, and government officials", "enslaved people", "only scribes"], "classes");
  F("enslaved", "Most enslaved people in Sumer had been...", "captured in war", ["born into the upper class", "scribes who made mistakes", "traders from India"], "classes");
  F("school", "Who went to school in Sumer?", "boys", ["girls", "everyone", "only kings"], "classes");
  F("women", "Which is true about Sumerian women?", "they ran the home and some owned businesses", ["they ruled the city-states", "they could not own anything", "they were the scribes"], "classes");
  F("law", "Sumerian law required adult children to...", "care for their parents if they needed help", ["join the army", "become priests", "move to another city"], "classes");
  F("crops", "What were Sumer's major crops?", "wheat, barley, and dates", ["rice, corn, and beans", "potatoes, carrots, and peas", "olives, grapes, and figs"], "trade");
  F("animals", "Which animals did Sumerian farmers raise?", "sheep, goats, and pigs", ["cows, horses, and chickens", "camels and llamas", "only donkeys"], "trade");
  F("tradefar", "Sumer's trade routes reached as far as...", "India and Egypt", ["China and Japan", "Greece and Rome", "the Americas"], "trade");
  F("traded", "Sumerians traded wheat, barley, and tools for...", "timber, minerals, and metals", ["gold coins", "horses and camels", "paper and ink"], "trade");
  F("carnelian", "Which red stone came from India's Indus Valley?", "carnelian", ["lapis lazuli", "bronze", "silver"], "trade");
  F("lapis", "Which blue stone came from what is now Afghanistan?", "lapis lazuli", ["carnelian", "bronze", "iron"], "trade");
  F("ironsilver", "Traders brought back iron and silver from present-day...", "Turkey", ["India", "Egypt", "Afghanistan"], "trade");
  F("mostimportant", "What is perhaps the most important Sumerian contribution?", "writing", ["the wheel", "bronze", "the sailboat"], "writing");
  F("1200", "About how many characters did cuneiform have?", "about 1,200", ["about 26", "about 60", "about 12"], "writing");
  F("reed", "Cuneiform was written by cutting marks into damp clay with a...", "sharp reed", ["feather pen", "paint brush", "bronze chisel"], "writing");
  F("nopaper", "Why did Sumerians write on clay?", "they did not have paper", ["clay was holy", "their god required it", "clay was easier to carry"], "writing");
  F("wedge", "The name \"cuneiform\" comes from a Latin word meaning...", "wedge", ["write", "clay", "king"], "writing");
  F("whoread", "Who learned to read and write cuneiform?", "only a few people, mostly boys from wealthy families", ["everyone in Sumer", "only girls", "only the kings"], "writing");
  F("records", "What did scribes record?", "court records, marriage contracts, business dealings, and important events", ["only poems", "only prayers", "only maps"], "writing");
  F("gilgamesh", "What is the world's oldest known story?", "the Epic of Gilgamesh", ["the Odyssey", "the Iliad", "the Book of the Dead"], "writing");
  F("gilgage", "The Epic of Gilgamesh was written more than ___ years ago.", "4,000", ["400", "1,000", "40,000"], "writing");
  F("wheel", "Sumerians were the first people to use the...", "wheel", ["compass", "printing press", "telescope"], "tech");
  F("3500", "A Sumerian illustration from about 3500 B.C. shows a...", "wheeled vehicle", ["sailboat", "ziggurat", "map of the world"], "tech");
  F("carts", "The first Sumerian carts were pulled by...", "donkeys", ["horses", "oxen", "camels"], "tech");
  F("chariot", "Sumerians brought vehicles into military use with the...", "chariot", ["sailboat", "plow", "potter's wheel"], "tech");
  F("sailboat", "For river travel, Sumerians developed the...", "sailboat", ["canoe", "steamboat", "raft"], "tech");
  F("potter", "What did the potter's wheel help shape?", "clay into bowls and jars", ["metal into tools", "wood into wheels", "stone into bricks"], "tech");
  F("bronze", "Sumerians were the first to make bronze out of...", "copper and tin", ["iron and silver", "gold and copper", "tin and clay"], "tech");
  F("geometry", "Sumerians used geometry to...", "measure fields and plan buildings", ["write stories", "make bronze", "train horses"], "tech");
  F("base60", "The Sumerian number system was based on...", "60", ["10", "12", "100"], "tech");
  F("today", "Which Sumerian ideas do we still use today?", "the 60-minute hour, 60-second minute, and 360-degree circle",
    ["the 10-day week and 100-minute hour", "the alphabet and paper", "coins and paper money"], "tech");
  F("tables", "Sumerians made tables for calculating...", "multiplication and division", ["the weather", "taxes on bronze", "the distance to India"], "tech");
  F("stars", "Watching the stars showed Sumerians the best times to...", "plant crops and hold religious ceremonies", ["go to war", "build walls", "crown a new king"], "tech");
  F("calendar", "How many months did the Sumerian moon calendar have?", "12", ["10", "13", "60"], "tech");

  // Spelling: clue -> type the word
  const S = (id, prompt, answer, topic) => Q.push({ id: "s-" + id, mode: "spell", prompt, answer, topic });
  for (const [term, pron, def] of VOCAB) S(term, `${def[0].toUpperCase() + def.slice(1)}.${pron ? `  (Say it: ${pron})` : ""}`, term, "vocab");
  S("tigris", "One of the two rivers of Mesopotamia (TY • gruhs).", "Tigris", "rivers");
  S("euphrates", "The other river of Mesopotamia (yu • FRAY • teez).", "Euphrates", "rivers");
  S("persiangulf", "The body of water where the two rivers end (PUR • zhuhn).", "Persian Gulf", "rivers");
  S("iraq", "The modern country where Mesopotamia developed (ih • RAHK).", "Iraq", "rivers");
  S("sumer", "The region in southern Mesopotamia where the first cities grew (SOO • mer).", "Sumer", "taming");
  S("gilgamesh", "The hero of the world's oldest known story: the Epic of ______ (GIHL • guh • MEHSH).", "Gilgamesh", "writing");
  S("archaeologist", "A scientist who digs up old buildings and artifacts.", "archaeologist", "settle");
  S("bronze", "A metal Sumerians made from copper and tin.", "bronze", "tech");
  S("chariot", "A wheeled vehicle Sumerians used in war.", "chariot", "tech");
  S("carnelian", "A red stone from India's Indus Valley.", "carnelian", "trade");
  S("lapis", "A blue stone from what is now Afghanistan.", "lapis lazuli", "trade");
  // ================================================================ end of CONTENT

  const MASTER = 3;
  const panel = document.getElementById("panel");
  const byTopic = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const qById = Object.fromEntries(Q.map(q => [q.id, q]));
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
  const vocabCard = () => `<div class="card" style="--c:#8a5a1e"><h3>Key Words</h3><dl class="vocab">${VOCAB.map(([t, p, d]) =>
    `<dt>${esc(t)}${p ? ` <span class="pron">(${esc(p)})</span>` : ""}</dt><dd>${esc(d)}</dd>`).join("")}</dl></div>`;
  const card = id => {
    if (id === "vocab") return "";
    const t = byTopic[id];
    return t ? `<div class="card" style="--c:${t.color}"><h3>${esc(t.name)}</h3><ul>${t.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>` : "";
  };
  const reviewFor = q => q.topic === "vocab" ? (() => { const v = VOCAB.find(v => v[0] === q.answer); return v ? `<div class="card" style="--c:#8a5a1e"><h3>${esc(v[0])}</h3><p>${esc(v[2])}</p></div>` : ""; })() : card(q.topic);
  const header = r => `<div class="row"><span class="muted">Question ${Math.min(r.i + 1, r.qs.length)} of ${r.qs.length}</span>
    <span class="muted" style="margin-left:auto">Score: ${r.score}</span></div><div class="bar"><div style="width:${100 * r.i / r.qs.length}%"></div></div>`;
  const INFO = {
    quiz: ["Quiz", "Tap your answer from the word bank."],
    spell: ["Spelling ★", "The harder round! Read the clue and type the word. Spelling counts (capital letters don't)."],
  };

  function startScreen(mode) {
    const all = ofMode(mode), weak = all.filter(q => stat(q.id).box < MASTER), size = Math.min(10, all.length);
    const vocab = all.filter(q => q.topic === "vocab");
    panel.innerHTML = `<h2>${INFO[mode][0]}</h2><p>${INFO[mode][1]}</p>
      <button class="btn primary" id="go">Start (${size} questions)</button>
      <button class="btn" id="go-vocab">Key words only (${vocab.length})</button>
      <button class="btn" id="go-all">All ${all.length} questions</button>
      ${all.some(q => stats[q.id]) && weak.length && weak.length < all.length ? `<button class="btn" id="go-weak">Practice weak spots (${weak.length})</button>` : ""}
      <p class="muted">Each round asks the questions you know least first.</p>`;
    panel.querySelector("#go").onclick = () => modeObj.begin(weakFirst(all).slice(0, size));
    panel.querySelector("#go-vocab").onclick = () => modeObj.begin(weakFirst(vocab));
    panel.querySelector("#go-all").onclick = () => modeObj.begin(weakFirst(all));
    const gw = panel.querySelector("#go-weak"); if (gw) gw.onclick = () => modeObj.begin(weakFirst(weak));
  }
  function endScreen(mode, r) {
    const n = r.qs.length, pct = Math.round(100 * r.score / n);
    panel.innerHTML = `<h2>Round complete!</h2><div class="big">${r.score} / ${n}</div>
      <p>${pct === 100 ? "Perfect score! 🏆" : pct >= 80 ? "Great job! ⭐" : pct >= 50 ? "Good work -- keep practicing!" : "Nice try -- practice makes perfect!"}</p>
      ${r.missed.length ? `<p class="muted">To review:</p><ul>${r.missed.map(id => `<li>${esc(qById[id].prompt)} <b>${esc(qById[id].answer)}</b></li>`).join("")}</ul>
      <button class="btn primary" id="again-miss">Practice these ${r.missed.length}</button>` : ""}
      <button class="btn" id="again">Play again</button>`;
    const am = panel.querySelector("#again-miss"); if (am) am.onclick = () => modeObj.begin(shuffle([...r.missed]));
    panel.querySelector("#again").onclick = () => startScreen(mode);
  }

  const modes = {};
  modes.learn = {
    enter() {
      panel.innerHTML = `<h2>Learn</h2><p class="muted">Read each section, then try the Quiz and the Match game!</p>
        <div class="row">${TOPICS.map(t => `<button class="btn small" data-jump="${t.id}">${esc(t.name)}</button>`).join("")}<button class="btn small" data-jump="vocabcard">Key Words</button></div>
        ${TOPICS.map(t => `<div id="sec-${t.id}">${card(t.id)}</div>`).join("")}
        <div id="sec-vocabcard">${vocabCard()}</div>
        <div class="row"><button class="btn small" id="print-blank">Print key words worksheet</button><button class="btn small" id="print-key">Print answer key</button></div>`;
      panel.querySelectorAll("[data-jump]").forEach(b => b.onclick = () => document.getElementById("sec-" + b.dataset.jump).scrollIntoView({ behavior: "smooth" }));
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
        <div class="fb" id="fb"></div><div id="after"></div>`;
      panel.querySelectorAll("[data-a]").forEach(b => b.onclick = () => this.answer(b, q));
      panel.scrollTop = 0;
    },
    answer(btn, q) {
      const r = this.r, ok = btn.dataset.a === q.answer;
      record(q.id, ok); if (ok) r.score++; else r.missed.push(q.id);
      panel.querySelectorAll("[data-a]").forEach(b => { b.disabled = true; if (b.dataset.a === q.answer) b.classList.add("right"); else if (b === btn) b.classList.add("nope"); });
      const fb = panel.querySelector("#fb"); fb.className = "fb " + (ok ? "good" : "bad"); fb.textContent = ok ? "Correct!" : `The answer is: ${q.answer}`;
      const next = () => { r.i++; this.ask(); };
      if (ok) setTimeout(next, 1000);
      else { panel.querySelector("#after").innerHTML = `${reviewFor(q)}<button class="btn primary" id="next">Next</button>`; panel.querySelector("#next").onclick = next; }
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

  // ---------------------------------------------------------------- Match game: pair each word with its meaning, beat your best time
  const SHORT = {
    "Mesopotamia": "the land between the rivers", "Fertile Crescent": "curving strip of good farmland",
    "silt": "small bits of soil left by floods", "irrigation": "watering crops with canals",
    "surplus": "an extra amount", "artisan": "a skilled worker",
    "city-state": "a city with its own government", "alliance": "agreement to help each other",
    "polytheism": "worshipping many gods", "ziggurat": "temple; \"to rise high\"",
    "monarchy": "government ruled by a king", "hereditary": "the king's son takes over",
    "cuneiform": "wedge-shaped writing on clay", "scribe": "official record keeper",
    "epic": "long poem about a hero", "cradle of civilization": "beginning of organized society",
  };
  modes.match = {
    enter() {
      const best = localStorage.getItem("sumer_match_best");
      panel.innerHTML = `<h2>Match</h2><p>Tap a word, then tap its meaning. Match all 6 pairs as fast as you can!</p>
        ${best ? `<p class="muted">Your best time: <b>${(best / 1000).toFixed(1)} seconds</b></p>` : ""}
        <button class="btn primary" id="go">Start</button>`;
      panel.querySelector("#go").onclick = () => this.begin();
    },
    begin() {
      const pairs = shuffle(VOCAB.map(v => v[0])).slice(0, 6);
      this.g = { left: pairs.length, sel: null, misses: 0, t0: performance.now() };
      const tiles = shuffle([...pairs.map(t => ({ k: t, side: "w", text: t })), ...pairs.map(t => ({ k: t, side: "m", text: SHORT[t] }))]);
      panel.innerHTML = `<div class="row"><b>Match the pairs</b><span class="muted" style="margin-left:auto" id="clock">0.0 s</span></div>
        <div class="match">${tiles.map(t => `<button class="tile ${t.side}" data-k="${esc(t.k)}" data-side="${t.side}">${esc(t.text)}</button>`).join("")}</div>
        <div class="fb" id="fb"></div>`;
      clearInterval(this.timer);
      this.timer = setInterval(() => { const c = document.getElementById("clock"); if (c) c.textContent = ((performance.now() - this.g.t0) / 1000).toFixed(1) + " s"; else clearInterval(this.timer); }, 100);
      panel.querySelectorAll(".tile").forEach(b => b.onclick = () => this.pick(b));
    },
    pick(b) {
      const g = this.g;
      if (b.classList.contains("done")) return;
      if (!g.sel) { g.sel = b; b.classList.add("sel"); return; }
      if (g.sel === b) { b.classList.remove("sel"); g.sel = null; return; }
      if (g.sel.dataset.side === b.dataset.side) { g.sel.classList.remove("sel"); g.sel = b; b.classList.add("sel"); return; }
      const a = g.sel; g.sel = null; a.classList.remove("sel");
      if (a.dataset.k === b.dataset.k) {
        a.classList.add("done"); b.classList.add("done"); g.left--;
        if (!g.left) this.finish();
      } else {
        g.misses++;
        [a, b].forEach(x => { x.classList.add("wrongpair"); setTimeout(() => x.classList.remove("wrongpair"), 500); });
      }
    },
    finish() {
      clearInterval(this.timer);
      const ms = performance.now() - this.g.t0, best = +localStorage.getItem("sumer_match_best") || Infinity;
      const record = ms < best;
      if (record) localStorage.setItem("sumer_match_best", Math.round(ms));
      panel.querySelector("#fb").className = "fb good";
      panel.querySelector("#fb").innerHTML = `${record ? "🏆 New best time! " : "All matched! "}${(ms / 1000).toFixed(1)} seconds, ${this.g.misses} miss${this.g.misses === 1 ? "" : "es"}.
        <br><button class="btn primary" id="again">Play again</button>`;
      panel.querySelector("#again").onclick = () => this.begin();
    },
  };

  // ---------------------------------------------------------------- Map (bonus): learn or find places
  const M = window.SUMERMAP, NS = "http://www.w3.org/2000/svg";
  const sv = (tag, attrs = {}, parent) => { const e = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); if (parent) parent.appendChild(e); return e; };
  function drawMap(svg) {
    const defs = sv("defs", {}, svg);
    sv("path", { d: M.land, "clip-rule": "evenodd" }, sv("clipPath", { id: "landClip" }, defs));
    sv("path", { d: M.frame + M.land, "clip-rule": "evenodd" }, sv("clipPath", { id: "seaClip" }, defs));
    sv("rect", { x: 0, y: 0, width: M.w, height: M.h, class: "msea" }, svg);
    sv("path", { d: M.land, class: "mland", "fill-rule": "evenodd" }, svg);
    sv("path", { d: M.lakes, class: "mlake" }, svg);
    sv("path", { d: M.rivers, class: "mbgriver" }, svg);
    const layers = { sea: sv("g", {}, svg), region: sv("g", {}, svg), river: sv("g", {}, svg), city: sv("g", {}, svg), label: sv("g", {}, svg) };
    const els = {};
    for (const p of M.places) {
      const g = sv("g", { class: "mplace " + p.kind, "data-id": p.id }, layers[p.kind]);
      if (p.kind === "region" || p.kind === "sea") sv("path", { d: p.path, class: "mregion", "clip-path": `url(#${p.kind === "sea" ? "seaClip" : "landClip"})` }, g);
      if (p.kind === "river") { sv("path", { d: p.path, class: "mriverhit" }, g); sv("path", { d: p.path, class: "mriver" }, g); }
      if (p.kind === "city") { sv("circle", { cx: p.at[0], cy: p.at[1], r: 2.2, class: "mhit" }, g); sv("circle", { cx: p.at[0], cy: p.at[1], r: 0.9, class: "mdot" }, g); }
      const [lx, ly] = p.lab || p.at;
      const t = sv("text", { x: lx, y: ly, class: "mlbl " + p.kind, "text-anchor": p.kind === "city" ? "start" : "middle",
        dx: p.kind === "city" ? "0.6em" : 0, dy: "0.35em" }, layers.label);
      t.textContent = p.name;
      els[p.id] = { g, t };
    }
    return els;
  }
  modes.map = {
    enter() {
      panel.innerHTML = `<h2>Map <span class="muted">(bonus -- probably not on the test)</span></h2>
        <div class="row"><button class="btn small" id="v-all">Whole map</button><button class="btn small" id="v-sumer">Zoom in on Sumer</button>
          <label class="row" style="font-size:15px"><input type="checkbox" id="m-lbl" checked> Show names</label>
          <button class="btn small primary" id="m-quiz">Find it! quiz</button></div>
        <div class="mapbox"><svg id="msvg" xmlns="${NS}"></svg></div>
        <div id="minfo" class="fb"></div>`;
      const svg = this.svg = panel.querySelector("#msvg");
      this.els = drawMap(svg);
      this.view("all");
      panel.querySelector("#v-all").onclick = () => this.view("all");
      panel.querySelector("#v-sumer").onclick = () => this.view("sumer");
      panel.querySelector("#m-lbl").onchange = e => svg.classList.toggle("nolabels", !e.target.checked);
      panel.querySelector("#m-quiz").onclick = () => this.quiz();
      svg.addEventListener("click", e => this.tap(e));
      this.q = null;
    },
    view(v) {
      const [x, y, w, h] = v === "sumer" ? M.zoom : [0, 0, M.w, M.h];
      this.svg.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);
      this.svg.style.setProperty("--ms", (w / M.w).toFixed(3));
      this.svg.classList.toggle("zoomed", v === "sumer");
    },
    hits(e) {
      return [...new Set(document.elementsFromPoint(e.clientX, e.clientY).map(el => el.closest && el.closest(".mplace")).filter(Boolean).map(g => g.dataset.id))];
    },
    tap(e) {
      const hits = this.hits(e), info = panel.querySelector("#minfo");
      Object.values(this.els).forEach(x => { x.g.classList.remove("on"); x.t.classList.remove("on"); });
      if (!this.q) {
        if (!hits.length) { info.textContent = ""; return; }
        const p = M.places.find(p => p.id === hits[0]);
        this.els[p.id].g.classList.add("on"); this.els[p.id].t.classList.add("on");
        info.className = "fb"; info.textContent = p.name + (hits.length > 1 ? `  (also: ${hits.slice(1).map(id => M.places.find(p => p.id === id).name).join(", ")})` : "");
        return;
      }
      const q = this.q, target = q.order[q.i];
      if (!hits.length) return;
      if (hits.includes(target)) {
        if (q.tries === 0) q.score++;
        this.els[target].g.classList.add("on"); this.els[target].t.classList.add("on");
        info.className = "fb good"; info.textContent = "Correct! " + M.places.find(p => p.id === target).name;
        q.i++; setTimeout(() => this.ask(), 900);
      } else {
        q.tries++;
        info.className = "fb bad"; info.textContent = `That's ${M.places.find(p => p.id === hits[0]).name}. Try again!` +
          (q.tries >= 2 ? " (Hint: it glows now.)" : "");
        if (q.tries >= 2) this.els[target].g.classList.add("hint");
      }
    },
    quiz() {
      panel.querySelector("#m-lbl").checked = false; this.svg.classList.add("nolabels");
      this.q = { order: shuffle(M.places.map(p => p.id)), i: 0, score: 0, tries: 0 };
      this.ask();
    },
    ask() {
      const q = this.q, info = panel.querySelector("#minfo");
      Object.values(this.els).forEach(x => x.g.classList.remove("on", "hint"));
      if (q.i >= q.order.length) {
        info.className = "fb good"; info.textContent = `Done! ${q.score} / ${q.order.length} on the first try.`;
        this.q = null; this.svg.classList.remove("nolabels"); panel.querySelector("#m-lbl").checked = true;
        return;
      }
      q.tries = 0;
      const p = M.places.find(p => p.id === q.order[q.i]);
      this.view(p.kind === "city" ? "sumer" : "all");
      info.className = "fb"; info.innerHTML = `Tap on the map: <b>${esc(p.name)}</b>`;
    },
  };

  modes.progress = {
    enter() {
      const mastered = Q.filter(q => stat(q.id).box >= MASTER).length;
      const section = (m, name) => {
        const qs = ofMode(m), done = qs.filter(q => stat(q.id).box >= MASTER).length;
        return `<p style="margin-top:14px"><b>${name}</b>: ${done} / ${qs.length} mastered</p>
          <table class="prog">${[...qs].sort((a, b) => stat(a.id).box - stat(b.id).box).map(q => `<tr><td>${esc(q.prompt)} <span class="muted">${esc(q.answer)}</span></td><td class="stars">${stars(q.id)}</td></tr>`).join("")}</table>`;
      };
      const best = localStorage.getItem("sumer_match_best");
      panel.innerHTML = `<h2>Your stars</h2><div class="big">${mastered} / ${Q.length} mastered</div>
        <div class="bar"><div style="width:${100 * mastered / Q.length}%"></div></div>
        <p class="muted">Right on the first try = +1 star. A miss = -1 star. 3 stars = mastered!</p>
        ${best ? `<p>Match game best time: <b>${(best / 1000).toFixed(1)} seconds</b></p>` : ""}
        ${section("quiz", "Quiz")}${section("spell", "Spelling ★")}
        <p><button class="btn small" id="reset">Reset stars</button></p>`;
      panel.querySelector("#reset").onclick = () => { if (confirm("Erase all stars and start over?")) { stats = {}; localStorage.removeItem(GUIDE.storageKey); this.enter(); } };
    },
  };

  // Printable key words worksheet: word bank + meanings with blanks (or the answers, for the key)
  function printSheet(withAnswers) {
    const sheet = document.getElementById("worksheet");
    const terms = VOCAB.map(v => v[0]);
    const order = [...VOCAB].sort((a, b) => a[2].localeCompare(b[2]));   // same order on worksheet and key
    sheet.innerHTML = `<h2>Mesopotamia &amp; Sumer -- Key Words${withAnswers ? " (Answer key)" : ""}</h2><p>Name: ____________________</p>
      <div class="wsbank"><b>Word bank:</b> ${[...terms].sort((a, b) => a.localeCompare(b)).map(esc).join(" &middot; ")}</div>
      <p>Write the word from the word bank that matches each meaning.</p>
      <ol>${order.map(v => `<li>${esc(v[2][0].toUpperCase() + v[2].slice(1))}<div class="ans">${withAnswers ? esc(v[0]) : "&nbsp;"}</div></li>`).join("")}</ol>`;
    setTimeout(() => window.print(), 60);
  }

  let modeObj = {};
  function setMode(m) {
    if (modes.match.timer) clearInterval(modes.match.timer);
    modeObj = modes[m];
    document.querySelectorAll("#modes button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
    modeObj.enter();
    panel.scrollTop = 0;
  }
  document.querySelectorAll("#modes button").forEach(b => b.onclick = () => setMode(b.dataset.mode));
  setMode("learn");
  const ph = new URLSearchParams(location.hash.slice(1)).get("print");   // index.html#print=blank or #print=key
  if (ph) printSheet(ph === "key");
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
