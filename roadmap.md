# Roadmap

## Open questions (hosting)
- [x] Answered: GitHub Pages is possible but needs the static rework (code sync via Project Settings → GitHub, static export, media committed in repo) and gives up any future backend.
- [x] Answered: Cloudflare hosting is free; a custom domain is a separate registration fee either way.
- [x] pritikakhatri.com purchased and registered; connected as primary, www redirects to it.
- [x] Published; pritikakhatri.com serves the site (200, correct title), /chatbot 200, www redirects to the root, media assets 200.
- [x] GitHub connected; static rework done: media now lives in public/media/ (17 files), portfolio.ts references /media/ paths, vite.config.static.ts + `bun run build:static` + .github/workflows/deploy-pages.yml added.
- [ ] User enables GitHub Pages: repo Settings → Pages → Source: "GitHub Actions". First push to main then deploys. Optional: point pritikakhatri.com DNS at Pages later.

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
