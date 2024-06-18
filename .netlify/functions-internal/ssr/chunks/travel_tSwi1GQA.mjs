/* empty css                          */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_CWF3mpvc.mjs';
import 'kleur/colors';
import { G as GlobeComponent } from './Globe_DHr_NAKC.mjs';
import { $ as $$BasicLayout } from './BasicLayout_DsBEllaB.mjs';

const $$Travel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Gianmarco Cavallo - Visited Countries", "description": "A 3d globe showing countries that I have visited so far", "page": "travel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="text-white absolute bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg">Back</a> ${renderComponent($$result2, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Globe", "client:component-export": "default" })} ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/travel.astro", void 0);

const $$file = "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/travel.astro";
const $$url = "/travel";

export { $$Travel as default, $$file as file, $$url as url };
