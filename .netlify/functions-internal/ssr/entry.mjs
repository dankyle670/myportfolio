import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_X0h8UtIR.mjs';

const _page0  = () => import('./chunks/generic__ZxVH3NQ.mjs');
const _page1  = () => import('./chunks/index_0ryGkyzb.mjs');
const _page2  = () => import('./chunks/rss_NnOg2nd6.mjs');
const _page3  = () => import('./chunks/travel_fPkVFCAH.mjs');
const _page4  = () => import('./chunks/index_DAWxmmvU.mjs');
const _page5  = () => import('./chunks/_.._Zlsm55Iw.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/travel.astro", _page3],["src/pages/blog/index.astro", _page4],["src/pages/blog/[...slug].astro", _page5]]);
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
