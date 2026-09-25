# Roadmap

## Open questions (hosting)
- [x] Answered: GitHub Pages is possible but needs the static rework (code sync via Project Settings → GitHub, static export, media committed in repo) and gives up any future backend.
- [x] Answered: Cloudflare hosting is free; a custom domain is a separate registration fee either way.
- [x] pritikakhatri.com purchased and registered; connected as primary, www redirects to it.
- [x] Published; pritikakhatri.com serves the site (200, correct title), /chatbot 200, www redirects to the root, media assets 200.
- [x] GitHub connected; media committed to public/media/ (17 files), portfolio.ts references /media/ paths.
- [x] User enabled Pages: repo Settings → Pages → Source "GitHub Actions" (repo made public, so Pages is available).
- [ ] GitHub Pages deployment goes green: run #1 failed (artifact path `dist/client` did not exist). Fixed the build (TanStack prerender into `.output/public`) and pointed the workflow at it; run #2 must be confirmed green.
- [ ] Optional later: point pritikakhatri.com DNS at GitHub Pages if Lovable hosting is ever dropped.

## Done this pass
- [x] Removed the empty About gap by flowing both supporting paragraphs directly beneath the lead, beside the portrait on desktop.
- [x] Headshot lifted to align with the About text; Education and Languages moved into their own panel.
- [x] Removed the oversized gap between section 04 (Selected writing) and section 05 (Beyond work).
- [x] About text reformatted: side labels rail, lead statement, two quiet passages, portrait beside the lead.

## Waiting on user
- [ ] Whether to drop one of the two near-identical Lincoln monument photos from the gallery.
- [ ] Thesis document has not been supplied — thesis download link stays hidden until a real file exists.

## Notes
- Chatbot stays a purposeful coming-soon page: no AI service, no input, no waitlist.
- Poetry uses the real "Khursani" recording — never revert to "coming soon".
- Pages serves the site from the domain root, so all paths stay root-absolute; the
  priti-hue.github.io/pritika-heart-project address is only a deployment artefact.
