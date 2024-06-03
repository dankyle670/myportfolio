export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/index_DRv6V1Bd.mjs').then(n => n.c);

export { page };
