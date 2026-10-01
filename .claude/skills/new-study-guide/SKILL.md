---
name: new-study-guide
description: Make a new interactive study guide (kid's study app) from a photo of a study sheet, worksheet, map, or diagram, and publish it to the family Study Guides site on GitHub Pages. Use when the user asks for a study guide, study app, quiz app, or help studying for a test for one of the kids (7th grade or 4th grade).
---

# New interactive study guide

Repo: `gabeling121/study-guides` (GitHub Pages serves `docs/`). Read `AGENTS.md` in the repo root first;
it is the full playbook. This skill is the checklist.

## 0. Get into the repo
- Already in a `study-guides` checkout (cloud session or local)? Run `git pull` and continue.
- Local desktop, somewhere else? The checkout lives at
  `C:\Users\GabrielLing\OneDrive - M33 Growth\AI\Code Projects\study-guides`. `cd` there and `git pull`.
  If it's missing: `gh repo clone gabeling121/study-guides`.

## 1. Content first (do not build yet)
1. Read the photo(s). If anything is too small or blurry to read with certainty, ask for a sharper photo.
2. Transcribe everything: facts, numbers, labels, the drawing. Show it as a table.
3. Ask, in one message: unclear words/marks, meaning of odd notes, units, which grade (7th / 4th),
   word bank on the test?, does spelling count?, anything to leave out.
4. Wait for answers. Confirmed content is the source of truth.

## 2. Build
1. Choose the base (map -> `docs/7th-grade/roman-map/`, diagram -> `docs/4th-grade/earth-layers/`,
   facts/words -> `template/`) and copy it to `docs/<grade>/<guide-id>/`.
2. Replace the content block; set a unique localStorage key, service-worker cache name, manifest name, title.
3. Tabs: Learn, tap-to-answer with a word bank, Spelling ★ (harder), Stars; printables blank + key.
4. Write the kid-facing `help.html`.
5. Add the guide to `docs/apps.json` (grade, id, title, subject, emoji, description, added, stats, printables).

## 3. Test (in a browser, before publishing)
Every tab; a full round; a wrong answer; a misspelling + retype; `#print=blank` and `#print=key`;
iPad portrait (768x1024); grade home page shows the new tile; no console errors.

## 4. Publish
1. `git add -A && git commit` (end the message with the attribution line from your instructions) and
   `git push` to `main`.
2. Wait for Pages (`gh api repos/gabeling121/study-guides/pages/builds/latest` if `gh` is available,
   otherwise load the live URL after ~1 minute).
3. The `Make printables` GitHub Action makes the PDFs and commits them. If running locally you can also
   run `python tools/print/make_printables.py <guide-id>` and commit the PDFs yourself.
4. Open the live guide URL and confirm it loads.

## 5. Report
Give the parent: guide link, grade page link, what each tab does, anything added beyond the sheet,
what wasn't tested. Attach the PDFs if the tool can send files.
