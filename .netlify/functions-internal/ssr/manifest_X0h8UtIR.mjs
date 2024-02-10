import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_7dR3x1wZ.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.k0Y1VDl-.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.WGTy2I1L.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0eXQHYCW.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.WGTy2I1L.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/travel","type":"page","pattern":"^\\/travel\\/?$","segments":[[{"content":"travel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/travel.astro","pathname":"/travel","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.pr0yoSqF.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.WGTy2I1L.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.WGTy2I1L.css"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://gianmarco.xyz/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/travel.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_PwWqTdei.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_SuxZns1i.mjs","/src/pages/travel.astro":"chunks/pages/travel_90IvZl7E.mjs","\u0000@astrojs-manifest":"manifest_X0h8UtIR.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic__ZxVH3NQ.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_0ryGkyzb.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_NnOg2nd6.mjs","\u0000@astro-page:src/pages/travel@_@astro":"chunks/travel_fPkVFCAH.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_DAWxmmvU.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._Zlsm55Iw.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md?astroContentCollectionEntry=true":"chunks/post1_bYrOjwQK.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post2.md?astroContentCollectionEntry=true":"chunks/post2_xWw8ZM6K.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md?astroPropagatedAssets":"chunks/post1_pYmu9HvM.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post2.md?astroPropagatedAssets":"chunks/post2_RNSAhC7z.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md":"chunks/post1_usOHPO1E.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post2.md":"chunks/post2_4SHaPSb-.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.0eXQHYCW.js","/astro/hoisted.js?q=2":"_astro/hoisted.pr0yoSqF.js","/astro/hoisted.js?q=0":"_astro/hoisted.k0Y1VDl-.js","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Tooltip/index":"_astro/index.lM3M0u24.js","@astrojs/solid-js/client.js":"_astro/client.yc9oxgd_.js","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Globe":"_astro/Globe.MomUqRWB.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_slug_.WGTy2I1L.css","/HEIF Image (1).jpeg","/HEIF Image (2).jpeg","/bitmo-fotor.webp","/bitmo.jpeg","/favicon.ico","/globe_preview.webp","/me.webp","/preview.png","/_astro/Globe.MomUqRWB.js","/_astro/client.yc9oxgd_.js","/_astro/constants.1OzcJoq-.js","/_astro/hoisted.0eXQHYCW.js","/_astro/hoisted.k0Y1VDl-.js","/_astro/hoisted.pr0yoSqF.js","/_astro/index.es.Q4I3jrLV.js","/_astro/index.lM3M0u24.js","/_astro/solid.N_zzL4Jr.js","/_astro/web.X9AL-vsO.js","/fonts/CabinetGrotesk-Variable.ttf","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf"]});

export { manifest };
