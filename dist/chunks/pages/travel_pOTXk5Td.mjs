/* empty css                           */
import { f as createAstro, c as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_13fsRVDA.mjs';
import 'kleur/colors';
import 'clsx';
import { G as GlobeComponent, b as $$BasicLayout } from './index_a6ADItfy.mjs';

const $$Astro = createAstro();
const $$Travel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Travel;
  return renderTemplate` ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Daniel Komoe - Visited Countries", "description": "A 3d globe showing countries that I have visited so far", "page": "travel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="text-white absolute bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg">Back</a> ${renderComponent($$result2, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Globe", "client:component-export": "default" })} ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/travel.astro", void 0);

const $$file = "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/travel.astro";
const $$url = "/travel";

export { $$Travel as default, $$file as file, $$url as url };
