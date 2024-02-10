import { i as createAstro, d as createComponent, g as renderTemplate, h as renderComponent, m as maybeRenderHead, p as renderSlot } from './astro_7dR3x1wZ.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate, $ as $$BasicLayout } from './pages/index_nwmH69hD.mjs';

const $$Astro = createAstro("https://gianmarco.xyz/");
const $$LayoutBlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutBlogPost;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Gianmarco Cavallo - Blog", "description": "Software developer with strong focus on the user experience animations and micro interactions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-3xl w-full h-screen p-8 text-neutral-100"> <a href="/blog" class="text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg mb-8">Back</a> <div class="my-10"> <h1 class="text-5xl font-semibold">${frontmatter.title}</h1> <div class="flex justify-between pt-4 text-gray-500 text-sm"> <p>${formatDate(new Date(frontmatter.pubDate))}</p> <p>${frontmatter.minutesRead}</p> </div> </div> <article class="prose prose-p:text-red-500 prose-slate prose-invert"> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/layouts/LayoutBlogPost.astro", void 0);

export { $$LayoutBlogPost as $ };
