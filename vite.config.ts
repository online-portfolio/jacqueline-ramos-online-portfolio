import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/jacqueline-ramos-online-portfolio/",
  },

  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
    },
  },

  nitro: true,
});