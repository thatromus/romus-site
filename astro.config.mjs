// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // For ghp
  ///
   site: "https://thatromus.github.io",
   base: "/romus-site",
  ///
  // dev
  //site: "https://towinok.github.io",
  //base: "/s",
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
