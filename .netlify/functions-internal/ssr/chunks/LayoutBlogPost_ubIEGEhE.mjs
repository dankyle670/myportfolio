import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, h as renderSlot } from './astro/server_CWF3mpvc.mjs';
import 'kleur/colors';
import { f as formatDate } from './helpers_D6AROieQ.mjs';
import { $ as $$BasicLayout } from './BasicLayout_DsBEllaB.mjs';

const $$Astro = createAstro("https://gianmarco.xyz/");
const $$LayoutBlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutBlogPost;
  const { slug } = Astro2.params;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "frontmatter": frontmatter, "slug": slug, "page": "blog", "title": `Gianmarco Cavallo - ${frontmatter.title}`, "description": frontmatter.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-3xl w-full h-screen p-8 text-neutral-100"> <a href="/blog" class="text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg mb-8">Back</a> <div class="my-10"> <h1 class="text-5xl font-semibold">${frontmatter.title}</h1> <div class="flex justify-between pt-4 text-gray-500 text-sm"> <p>${formatDate(new Date(frontmatter.pubDate))}</p> <p>${frontmatter.minutesRead}</p> </div> </div> <article class="prose prose-p:text-red-500 prose-slate prose-invert"> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/layouts/LayoutBlogPost.astro", void 0);

export { $$LayoutBlogPost as $ };
