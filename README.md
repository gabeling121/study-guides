# Interactive Study Guides

Study apps made from the kids' study sheets. Works on Chromebook, iPad, and any browser.

**Open:** https://gabeling121.github.io/study-guides/
(7th grade: `/7th-grade/` -- 4th grade: `/4th-grade/`)

## Make a new study guide

Start a Claude Code session on this repo (desktop, web, or mobile app), or a Codex task, and say:

> Make a new study guide for my 4th grader from this photo [attach photo]

Claude: the `new-study-guide` skill runs. Codex: it follows `AGENTS.md`. Either way it will
show you the transcribed content to confirm, then build, test, and publish it, and it appears on
the grade home page. PDFs are made automatically by GitHub Actions.

See `AGENTS.md` for the full playbook and repo layout.

Map data in the Roman map guide: Natural Earth (public domain). To rebuild it, download
`ne_10m_land`, `ne_10m_lakes`, `ne_10m_rivers_lake_centerlines` GeoJSON from
https://github.com/nvkelso/natural-earth-vector into `tools/roman-map/` and run `python tools/roman-map/build.py`.
