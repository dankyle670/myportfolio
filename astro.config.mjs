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
  site: 'https://daniel-komoe-dev.netlify.app', // Ensure your site URL is correctly set here
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: ['https://daniel-komoe-dev.netlify.app/sitemap.xml'],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    netlify(), // Add Netlify adapter for static site generation
  ],
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
//import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";
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
//  markdown: {
//    remarkPlugins: [remarkReadingTime],
//  },
//  output: "static", // Generate static HTML files
//});
