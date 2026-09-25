// Static-export build for GitHub Pages (and any plain static host).
// The default vite.config.ts stays on the Cloudflare preset for Lovable;
// this one is used only by `bun run build:static` and the Pages workflow.
//
// TanStack prerenders every listed route to plain HTML inside dist/client —
// the same folder the build already fills with hashed assets and public/media,
// so GitHub Pages can serve it as-is. The server bundle it writes alongside is
// simply never uploaded.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    pages: [{ path: "/" }, { path: "/chatbot" }],
    prerender: { enabled: true },
  },
});
