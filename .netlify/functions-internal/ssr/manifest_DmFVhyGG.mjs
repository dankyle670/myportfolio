import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_CWF3mpvc.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
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
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.10.3_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DihDR3eT.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BTI232GC.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CAJRQFxh.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BTI232GC.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CKFp7RBq.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BTI232GC.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/servicesprice","isIndex":false,"type":"page","pattern":"^\\/servicesPrice\\/?$","segments":[[{"content":"servicesPrice","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicesPrice.astro","pathname":"/servicesPrice","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DOomVC_7.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BTI232GC.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BnU8hv8y.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BTI232GC.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/travel","isIndex":false,"type":"page","pattern":"^\\/travel\\/?$","segments":[[{"content":"travel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/travel.astro","pathname":"/travel","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-pQSLvS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BTI232GC.css"},{"type":"inline","content":"@font-face{font-family:CabinetGrotesk;src:url(/fonts/CabinetGrotesk-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-Variable.ttf) format(\"truetype-variations\");font-weight:400;font-style:normal;font-display:swap;font-weight:100 1000}body{margin:0;font-family:Satoshi,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,sans-serif}p{font-family:Satoshi}b{font-weight:700!important}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://gianmarco.xyz/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/login.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/login@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/signup.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/signup@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/servicesPrice.astro",{"propagation":"none","containsHead":true}],["/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/pages/travel.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.10.3_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/servicesPrice@_@astro":"pages/servicesprice.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/travel@_@astro":"pages/travel.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DmFVhyGG.mjs","/node_modules/.pnpm/astro@4.10.3_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_V3woGy-o.mjs","/src/pages/blog/index.astro":"chunks/index_DS4d1n6a.mjs","/src/pages/blog/[...slug].astro":"chunks/_...slug__DRb685nG.mjs","/src/pages/login.astro":"chunks/login_Mg04_Fu6.mjs","/src/pages/rss.xml.js":"chunks/rss.xml_YYmIt6-b.mjs","/src/pages/servicesPrice.astro":"chunks/servicesPrice_BywhxvuG.mjs","/src/pages/signup.astro":"chunks/signup_FXsWCMkv.mjs","/src/pages/travel.astro":"chunks/travel_tSwi1GQA.mjs","/src/pages/index.astro":"chunks/index_BLMz9jPz.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md?astroContentCollectionEntry=true":"chunks/post1_DfcGjdvp.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post2.md?astroContentCollectionEntry=true":"chunks/post2_CyQzlFWa.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md?astroPropagatedAssets":"chunks/post1_UJM2ALlr.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post2.md?astroPropagatedAssets":"chunks/post2_9uGtL_ID.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md":"chunks/post1_DcwZvn4F.mjs","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post2.md":"chunks/post2_BfcPHXkZ.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DihDR3eT.js","@astrojs/solid-js/client.js":"_astro/client.DX4xmfRr.js","/astro/hoisted.js?q=3":"_astro/hoisted.DOomVC_7.js","/astro/hoisted.js?q=1":"_astro/hoisted.CAJRQFxh.js","/astro/hoisted.js?q=2":"_astro/hoisted.CKFp7RBq.js","/astro/hoisted.js?q=4":"_astro/hoisted.BnU8hv8y.js","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Tooltip/index":"_astro/index.DkTIE2wH.js","/astro/hoisted.js?q=5":"_astro/hoisted.D-pQSLvS.js","/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/components/Globe":"_astro/Globe.BvOEgrr4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.BTI232GC.css","/favicon.ico","/globe_preview.png","/me.webp","/og-image.png","/preview.png","/_astro/Globe.BvOEgrr4.js","/_astro/client.Cx1FBVJX.js","/_astro/client.DX4xmfRr.js","/_astro/constants.CbTSZZC9.js","/_astro/hoisted.BnU8hv8y.js","/_astro/hoisted.CAJRQFxh.js","/_astro/hoisted.CKFp7RBq.js","/_astro/hoisted.D-pQSLvS.js","/_astro/hoisted.DOomVC_7.js","/_astro/hoisted.DihDR3eT.js","/_astro/index.DkTIE2wH.js","/_astro/index.es.B26ups-i.js","/_astro/solid.CcY7TwE7.js","/_astro/web.BsJRVe4A.js","/fonts/CabinetGrotesk-Variable.ttf","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
