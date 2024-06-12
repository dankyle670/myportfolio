

  import { defineConfig } from "astro/config";
  import sitemap from "@astrojs/sitemap";
  import netlify from "@astrojs/netlify";
  import robotsTxt from "astro-robots-txt";
  import UnoCSS from "@unocss/astro";
  import icon from "astro-icon";

  import solidJs from "@astrojs/solid-js";
  import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

  // https://astro.build/config
  export default defineConfig({
    integrations: [
      sitemap('daniel-komoe-dev.netlify.app'),
      robotsTxt({
        sitemap: [],
      }),
      solidJs(),
      UnoCSS({ injectReset: true }),
      icon(),
      netlify(), // Add Netlify adapter for static site generation
    ],
    vite: {
      optimizeDeps: {
        noDiscovery: true,
      },
    },
    markdown: {
      remarkPlugins: [remarkReadingTime],
    },
    output: "static", // Generate static HTML files
  });
