// Static-export build for GitHub Pages (and any plain static host).
// The default vite.config.ts stays on the Cloudflare preset for Lovable;
// this one is used only by `bun run build:static` and the Pages workflow.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/", "/chatbot"],
      crawlLinks: true,
    },
  },
});
