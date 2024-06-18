/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from './astro/server_CWF3mpvc.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_CNkdrsmy.mjs';
/* empty css                          */

const $$Astro = createAstro("https://gianmarco.xyz/");
const prerender = true;
async function getStaticPaths() {
  return (await getCollection("blog")).map(({ slug }) => ({
    params: { slug }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("slug is missing");
  }
  const posts = (await getCollection("blog")).sort(
    (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
  );
  const entry = posts.find((entry2) => entry2.slug === slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})} `;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
