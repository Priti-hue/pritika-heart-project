<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Static export (GitHub Pages)
- Media is served from public/media/ via /media/<name> paths in src/content/portfolio.ts — never reintroduce src/assets/*.asset.json Lovable-hosted URLs; they 404 off Lovable.
- Static build: `bun run build:static` (vite.config.static.ts) prerenders "/" and "/chatbot" through TanStack's `pages` + `prerender: { enabled: true }`, writing plain HTML into `.output/public`; the Pages workflow uploads that folder. Do not go back to nitro `preset: "static"` — it 404s every prerendered route and then dies with "rolldownOptions.input should not be an html file".
- The sandbox forces the cloudflare preset and its own output dirs, so the CI shape is only reproducible locally with `env -u DEV_SERVER__PROJECT_PATH -u LOVABLE_SANDBOX bun run build:static`.

