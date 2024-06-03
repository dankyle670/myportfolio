import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_vfcgEWtY.mjs';

const _page0  = () => import('./chunks/generic_B8TfrS_g.mjs');
const _page1  = () => import('./chunks/index_oIg3N8VU.mjs');
const _page2  = () => import('./chunks/servicesPrice_CCMIcNHD.mjs');
const _page3  = () => import('./chunks/firebase-config_BxGJrExF.mjs');
const _page4  = () => import('./chunks/signup-login_2pLBbR15.mjs');
const _page5  = () => import('./chunks/rss_DMBM_gLG.mjs');
const _page6  = () => import('./chunks/signup_Xgix_Kkf.mjs');
const _page7  = () => import('./chunks/travel_BIp2nFMM.mjs');
const _page8  = () => import('./chunks/login_zMxMaMTi.mjs');
const _page9  = () => import('./chunks/index_C-7GBYms.mjs');
const _page10  = () => import('./chunks/_.._DTpML3-L.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/servicesPrice.astro", _page2],["src/pages/back-end/firebase-config.js", _page3],["src/pages/back-end/signup-login.js", _page4],["src/pages/rss.xml.js", _page5],["src/pages/signup.astro", _page6],["src/pages/travel.astro", _page7],["src/pages/login.astro", _page8],["src/pages/blog/index.astro", _page9],["src/pages/blog/[...slug].astro", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
