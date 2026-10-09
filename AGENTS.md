# Interactive Study Guides -- playbook

This repo holds **interactive study guides**: small study apps a parent makes from a kid's study
sheet (a photo of a worksheet, map, or diagram). They run on a school Chromebook and an iPad, in any browser.

- **Live site:** https://gabeling121.github.io/study-guides/ (GitHub Pages serves `docs/` from `main`)
- **Grade home pages:** `/7th-grade/`, `/4th-grade/`. Each kid installs her grade page to the home screen.
- **Every guide:** `docs/<grade>/<guide-id>/` -> `https://gabeling121.github.io/study-guides/<grade>/<guide-id>/`

Call them "study guides" (or "interactive study guides") in everything kids or parents see, not "apps".

## Repo map

```
docs/                     the website (GitHub Pages)
  index.html              home: pick a grade (launcher.js + launcher.css draw it from apps.json)
  apps.json               THE REGISTRY: grades + every guide (title, emoji, stats key, printables)
  7th-grade/, 4th-grade/  grade home pages + one folder per guide
    roman-map/            reference: map quiz (SVG map from Natural Earth data, see tools/roman-map)
    earth-layers/         reference: diagram quiz (hand-drawn SVG diagram, content at top of app.js)
template/                 starter for plain fact/word guides (no map/diagram); content block at top of app.js
tools/print/              make_printables.py -- PDFs via headless Chrome (runs in GitHub Actions too)
tools/icons/              make_icons.py -- launcher/grade icons
tools/roman-map/          build.py for the Roman map data (needs Natural Earth geojson, gitignored)
.github/workflows/        printables.yml -- remakes PDFs in the cloud on every push
.claude/skills/new-study-guide/  the step-by-step skill (Claude); Codex: follow "Making a new guide" below
```

## Making a new guide (the process -- follow it in order)

1. **Get the sheet.** Need a sharp photo. If text is too small to read for sure, ask for a better photo. Never guess at content.
2. **Transcribe exactly.** Write out every fact, number, label, and drawing on the sheet. Show the parent the
   full list as a table and **ask about anything unclear** (cut-off words, faint marks, meaning of a note,
   units, whether spelling counts). Wait for answers before building. Kids memorize what the app shows,
   so a wrong fact is worse than a missing one. If you add anything not on the sheet, say so.
3. **Ask the few setup questions** if not already answered: which grade; does the test have a word bank;
   does spelling count; units; anything to leave out.
4. **Pick a starting point:**
   - map to label -> copy `docs/7th-grade/roman-map/`
   - diagram/illustration to label -> copy `docs/4th-grade/earth-layers/`
   - facts / vocabulary / lists -> copy `template/`
5. **Build** in `docs/<grade>/<guide-id>/` (lowercase-with-dashes id). Change the localStorage key prefix,
   the service-worker cache name, `manifest.json` names, and title. Keep the `⌂` home link (`../`) in the header.
6. **Register it** in `docs/apps.json`: grade, id, title, subject, emoji, one-line description, `added` date,
   `stats: { key, total }` (key = the guide's localStorage key, total = number of questions/places),
   and `printables` (file name + the `#print=...` hash that renders it).
7. **Write `help.html`** for the kid: short, friendly, at her reading level. Explain each tab and a study plan.
8. **Test** in a browser before publishing: every tab, a full round, a wrong answer, a misspelling, the
   printables (`index.html#print=blank` / `#print=key`), iPad-portrait size, no console errors.
9. **Publish:** commit to `main` and push (no PR needed unless the tool requires one). Pages updates in ~1 min.
   The `Make printables` workflow then makes the PDFs and commits them. Check the live URL loads.
10. **Report** to the parent: the guide link, the grade page link, what each tab does, anything added
    beyond the sheet, and what wasn't tested (e.g. real touch on her device).

## Working without a browser (Codex cloud and similar sandboxes)

- You may not have a browser or internet. Still check what you can: `node --check <file>.js` on every
  JS file you touched, `python -m json.tool docs/apps.json`, and that every path in `apps.json` exists.
  Read through the code paths for each tab carefully.
- Say clearly in your summary what you could NOT test, so the parent knows to check it on the live site.
- Deliver as a pull request into `main` if you can't push directly. Pages only updates after it is merged.
  The PDFs are made by the `Make printables` workflow after the merge; you don't need to make them.
- If you can't see an attached image clearly enough to read every word, ask for a sharper photo.

## Standard features (what parents liked -- keep these)

- **Learn** tab: tap anything to see its facts; a "hide labels" test-yourself switch.
- **Tap-to-answer with a word bank** (tests usually have one) as the main quiz.
- **Spelling ★** as a separate, harder tab: spelling counts, capitals and spacing do not matter; a miss shows the right
  spelling with wrong letters in red and she must retype it correctly to continue.
- **Stars:** +1 for right on the first try, -1 for a miss, 3 = mastered. Rounds ask weakest first;
  "Practice these" after a round; "Practice weak spots".
- **Plain test-style look** when the test is black-and-white (option to switch to color).
- **Hints off by default** where hints exist (type of place, "Show me", letter hints).
- **Printables:** blank + answer key PDFs, letter size, one page each, title + "Name: ____" line.
- Kid-friendly: big tap targets, short sentences, encouraging messages.

## Rules

- Static files only: HTML/CSS/vanilla JS. No build step, no npm, no frameworks, no server, no accounts.
- Must work offline after the first visit (service worker, network-first) and install to the home screen.
- Bump the `?v=N` on css/js links in `index.html` when you change them.
- The repo and site are **public**: never put the kids' names, photos, school, or teacher in any file.
- Each guide keeps its own localStorage key so stars never collide. Don't rename an existing key (it erases stars).
- Don't break existing guides; if you change shared files (`launcher.*`, `apps.json`), check the home pages.
- Writing style: no em dashes (use `--`).

## Written-answer checking (all future guides)

- Check knowledge and spelling, not formatting. Ignore capitalization and missing, extra, or misplaced whitespace, including tabs and newlines. For example, `apartmentbuilding` = `apartment building`, and `s heis` = `she is`. Preserve the order of letters within each meaning so misspellings still fail.
- Accept any listed form or meaning and confirmed equivalent wording. Keep the original sheet wording in Learn and answer keys; document supplemental equivalents in help.html and the parent report. Use explicit per-question accepted answers, not fuzzy matching or automatic broad synonyms.
- When the answer lists alternative meanings, accept any valid subset in any order, with slash, comma, semicolon, `or`, `and`, or `&` separators. Every supplied meaning must be valid. Reorder alternatives, not words within phrases (`in front of` must not become `front of in`). Support shared wording where appropriate: `she/he/it is` = `he/she/it is`, while `he/she are` is wrong.
- Ignore incidental punctuation when it does not change meaning. Preserve meaningful signs, units, decimal points, and required language marks. Macrons remain a separately configurable requirement; ignoring spaces must not bypass strict macron checking.
- Start from template/app.js: `q.answer` preserves the sheet answer, optional `q.accepted` lists equivalent complete answers, and optional `q.answerGroups` groups equivalent phrasings for each alternative meaning. Adapt language-specific contractions and shared words explicitly, following the Suburani guide example.
- Verify missing/extra spaces, reordered alternatives, equivalent wording, one real misspelling, and an answer containing an incorrect extra meaning. Also verify strict language marks when enabled. Do not change existing localStorage keys.
