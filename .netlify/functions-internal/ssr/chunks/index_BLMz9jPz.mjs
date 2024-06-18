/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, h as renderSlot, d as renderComponent } from './astro/server_CWF3mpvc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_Dzyd_HUM.mjs';
import { $ as $$Index$1, a as $$Icon } from './index_Dah-CZvs.mjs';
import 'clsx';
import { ssr, ssrHydrationKey, escape, createComponent as createComponent$1 } from 'solid-js/web';
import { createSignal, Show } from 'solid-js';
import { a as formatTimeForItaly, g as getCurrentTimeInItaly } from './helpers_D6AROieQ.mjs';
import { G as GlobeComponent } from './Globe_DHr_NAKC.mjs';

const $$Astro$2 = createAstro("https://gianmarco.xyz/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { rounded } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`custom-btn text-xl max-h-[50px] shadow-custom shadow-primary-500 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-gray-200 px-5 py-2 border border-primary-500 hover:text-primary-500 transition-colors duration-100 ease-in-out bg-gray-900 cursor-pointer ${rounded ? "rounded-full" : "rounded-lg"}`, "class")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Button.astro", void 0);

const LINKS = {
  github: "https://github.com/Ladvace",
  linkedin: "https://www.linkedin.com/in/gianmarco-cavallo/",
  medium: "https://ladvace.medium.com/",
  discord: "https://discordapp.com/users/163300027618295808",
  dribble: "https://dribbble.com/Ladvace_Jace"
};

var _tmpl$ = ["<div", ` class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20"><p class="w-max">`, "</p></div>"], _tmpl$2 = ["<div", ' class="relative inline-block"><div>', "</div><!--$-->", "<!--/--></div>"];
function Tooltip(props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);
  const messages = ["Hi there!", "Clicked again?", "Still here?", "Persistent, aren't you?", "What's up?", "Again? Really?", "You're curious!", "Not cool!", "Give it a break!", "That's annoying!", "Hands off!", "No more clicks!", "Seriously?!", "Ouch! That hurts!", "You're persistent!", "Why the curiosity?", "I'm getting tired!", "I'm bored!", "Enough's enough!", "Find another hobby!", "Stop, please!", "Okay, last one!", "That's it, I'm done!"];
  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };
  return ssr(_tmpl$2, ssrHydrationKey(), escape(props.children), escape(createComponent$1(Show, {
    get when() {
      return isVisible();
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(currentMessage()));
    }
  })));
}

const $$IntroCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-4", "rowSpan": "md:row-span-0.5" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-black-500 border-b border-black/5"> <div class="w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16"> <nav :class="{'flex': open, 'hidden': !open}" class="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row"> <p class="m-0 font-light text-xl">
You can sign up to receive a 20% discount on each services.
</p> <div class="inline-flex items-center gap-2 list-none lg:ml-auto"> <a href="/signup" class="block px-4 py-2 mt-2 text-sm font-medium text-white md:mt-0 hover:bg-black hover:text-accent-400 focus:outline-none focus:shadow-outline">
Sign up
</a> <a href="/login" class="inline-flex items-center h-8 justify-center px-4 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-400 active:bg-white active:text-accent-400 focus-visible:outline-black">
Log in
</a> </div> </nav> </div> </section> ` })} ${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-3", "rowSpan": "md:row-span-4" }, { "default": ($$result2) => renderTemplate` <div class="flex w-full h-full"> <div class="flex flex-col justify-between md:max-h-[300px] gap-4"> <div class="flex flex-col h-full"> <h6 class="text-sm font-light m-0 text-gray-500">welcome</h6> <p class="m-0 font-light text-xl">
Hi, I'm <b class="font-bold">Daniel K</b>, a software
          developer/ Web developer, you need any website or app i'm your guys.
</p> </div> <div class="flex gap-4"> <a${addAttribute(LINKS.Github, "href")} aria-label="github profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:github-fill", "class": "h-6" })} <span class="sr-only">GitHub Profile</span> ` })} </a> <a${addAttribute(LINKS.Linkedin, "href")} aria-label="linkeding profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "linkedin profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:linkedin-box-fill", "class": "h-6" })} <span class="sr-only">Linkedin Profile</span> ` })} </a> <a${addAttribute(LINKS.Instagram, "href")} aria-label="IG profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:instagram-fill", "class": "h-6" })} <span class="sr-only">Instram Profile</span> ` })} </a> ${renderComponent($$result2, "Tooltip", Tooltip, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Tooltip/index", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "aria-label": "easter egg btn" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": "ri:emotion-laugh-line", "class": "h-6" })} <span class="sr-only">Easter egg button</span> ` })} ` })} </div> </div> <img width="300" height="300" src="/me.webp" class="w-auto max-h-[300px] select-none absolute right-[-110px] bottom-[-20px] z-[-1] opacity-50 md:opacity-100 md:relative md:right-auto md:bottom-auto md:z-auto pointer-events-none" alt="memoji of gianmarco"> </div> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/IntroCard.astro", void 0);

const $$ContactsCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-full"> <header class="flex items-center"> <h1 class="text-white text-xl font-bold">
Let's start working together!
</h1> </header> <address class="flex flex-col mt-4"> <h2 class="text-gray-500">Contact Details</h2> <p>cavallogianmarco@gmail.com</p> <p>Italy</p> </address> <div class="flex flex-col mt-4 w-fit"> <h2 class="text-gray-500">Socials</h2> <ul> <li> <a${addAttribute(LINKS.linkedin, "href")} target="_blank">Linkedin</a> </li> <li> <a${addAttribute(LINKS.github, "href")} target="_blank">Github</a> </li> <li> <a${addAttribute(LINKS.medium, "href")} target="_blank">Medium</a> </li> <li> <a${addAttribute(LINKS.discord, "href")} target="_blank">Discord</a> </li> </ul> </div> </div> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/ContactsCard.astro", void 0);

const $$TimeZoneCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Card", $$Index$1, { "colSpan": "lg:col-span-2", "rowSpan": "md:row-span-2", "title": "Time zone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<time datetime="" id="timeDisplay" class="text-2xl xl:text-5xl xl:whitespace-nowrap w-50 xl:w-100 h-[calc(100%-28px)] font-serif flex justify-center items-center"> ${formatTimeForItaly(getCurrentTimeInItaly())} </time> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/TimeZoneCard.astro", void 0);

const $$Astro$1 = createAstro("https://gianmarco.xyz/");
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-6", "title": "About me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-2"> <p class="text-sm font-light">
Hi, I'm Gianmarco, a front-end software developer from Italy.
<br>
My primary tools of choice includes:
</p><ul class="list-disc list-inside"> <li>JavaScript</li> <li>React</li> <li>Solidjs</li> <li>Astro</li> <li>svelte</li> <li>Nodejs</li> </ul>  <p class="text-sm font-light">
Beyond coding, I'm passionate about design, illustration, animation and 3D modelling and traveling.
      An unusual hobby of mine is collecting vintage passports, they're
      interesting pieces of history to me.
</p> <p class="text-sm font-light">
While I have some preferred tools, I always choose the best one for the
      job, even if it's not on my usual list. My goal is to find the right
      solution for each project.
</p> </div> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/AboutMe.astro", void 0);

const $$Pulse = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="relative flex h-3 w-3"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span>`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Pulse.astro", void 0);

const $$Now = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between w-full items-start mb-2"> <div class="flex flex-col"> <h2>Now</h2> <a href="https://sive.rs/nowff" target="_blank"> <span class="text-xs text-gray-500 cursor-pointer">what's that ?</span> </a> </div> ${renderComponent($$result2, "Pulse", $$Pulse, {})} </div> <p class="text-xs">Currently working as freelancer</p> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Now.astro", void 0);

const $$Astro = createAstro("https://gianmarco.xyz/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Gianmarco Cavallo - Freelance front-end Developer", "description": "I'm a developer based in Italy, passionate about user experience and specializing in engaging animations and micro-interactions. My primary tools of choice include: JavaScript, React, Solid.js, Astro, Svelte, and Node.js." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]"> ${renderComponent($$result2, "IntroCard", $$IntroCard, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "ContactsCard", $$ContactsCard, {})} ${renderComponent($$result2, "TimeZone", $$TimeZoneCard, {})} ${renderComponent($$result2, "Now", $$Now, {})} ${renderComponent($$result2, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1", "title": "Countries I visited", "href": "travel", "colorText": "text-neutral-900" }, { "default": ($$result3) => renderTemplate` <div class="h-full w-full absolute inset-0 -z-10"> ${renderComponent($$result3, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Globe", "client:component-export": "default" })} </div> ` })} ${renderComponent($$result2, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2 flex gap-4", "title": "Blog", "href": "/blog" })} ${renderComponent($$result2, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1" }, { "default": ($$result3) => renderTemplate` <p class="text-xs">
© 2024 · Crafted with ♥️ using <a href="https://astro.build/" target="_blank" class="text-red-500">Astro</a> by Gianmarco.
</p> ` })} </main> ` })}`;
}, "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/index.astro", void 0);

const $$file = "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
