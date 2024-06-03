import { c as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, i as renderSlot, f as createAstro } from './astro_Clju3mSS.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate, b as $$BasicLayout } from './pages/index_DRv6V1Bd.mjs';

const $$Astro = createAstro();
const $$LayoutBlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutBlogPost;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Gianmarco Cavallo - Blog", "description": "Software developer with strong focus on the user experience animations and micro interactions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-3xl w-full h-screen p-8 text-neutral-100"> <a href="/blog" class="text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg mb-8">Back</a> <div class="my-10"> <h1 class="text-5xl font-semibold">${frontmatter.title}</h1> <div class="flex justify-between pt-4 text-gray-500 text-sm"> <p>${formatDate(new Date(frontmatter.pubDate))}</p> <p>${frontmatter.minutesRead}</p> </div> </div> <article class="prose prose-p:text-red-500 prose-slate prose-invert"> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/layouts/LayoutBlogPost.astro", void 0);

export { $$LayoutBlogPost as $ };
