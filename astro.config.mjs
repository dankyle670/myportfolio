import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
//import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    robotsTxt({ sitemap: [] }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    netlify(),
  ],
  vite: {
    optimizeDeps: { noDiscovery: true },
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static",
  build: {
    onEnd: () => {
      console.log('Build complete. Listing dist directory contents:');
      const fs = require('fs');
      const path = require('path');
      const distPath = path.join(__dirname, 'dist');
      fs.readdir(distPath, (err, files) => {
        if (err) {
          console.error('Error reading dist directory:', err);
        } else {
          console.log('dist directory contents:', files);
        }
      });
    }
  }
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
