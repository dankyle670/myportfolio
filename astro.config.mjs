import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";
//import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: 'https://daniel-komoe-dev.netlify.app', // Add your site URL here
  integrations: [
    sitemap({
      hostname: 'https://daniel-komoe-dev.netlify.app', // Ensure sitemap has the correct hostname
    }),
    robotsTxt({
      sitemap: ['https://daniel-komoe-dev.netlify.app/sitemap.xml'], // Provide the sitemap URL
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    netlify(), // Netlify adapter for static site generation
  ],
  vite: {
    optimizeDeps: {
      include: ["@astrojs/solid-js"], // Include solid-js for better optimization
    },
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static", // Generate static HTML files
});




  //import { defineConfig } from "astro/config";
  //import sitemap from "@astrojs/sitemap";
  //import netlify from "@astrojs/netlify";
  //import robotsTxt from "astro-robots-txt";
  //import UnoCSS from "@unocss/astro";
  //import icon from "astro-icon";
//
  //import solidJs from "@astrojs/solid-js";
//
  //// https://astro.build/config
  //export default defineConfig({
  //  integrations: [
  //    sitemap(),
  //    robotsTxt({
  //      sitemap: [],
  //    }),
  //    solidJs(),
  //    UnoCSS({ injectReset: true }),
  //    icon(),
  //    netlify(), // Add Netlify adapter for static site generation
  //  ],
  //  vite: {
  //    optimizeDeps: {
  //      noDiscovery: true,
  //    },
  //  },
  //  markdown: {
  //    remarkPlugins: [remarkReadingTime],
  //  },
  //  output: "static", // Generate static HTML files
  //});
