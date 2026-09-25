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
- Static build: `bun run build:static` (vite.config.static.ts, nitro preset "static"). The sandbox forces the cloudflare preset, so static output can only be verified in GitHub Actions (.github/workflows/deploy-pages.yml), not locally.
