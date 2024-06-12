export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/index_IlEgiDAt.mjs').then(n => n.i);

export { page };
