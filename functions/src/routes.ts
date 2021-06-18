import AdminJS from 'adminjs';
import { match } from 'path-to-regexp';

const { routes, assets } = AdminJS.Router;

export const AppRoutes = routes.map(r => ({
  match: match(r.path.replace(/{/g, ':').replace(/}/g, ''), {
    decode: decodeURIComponent,
  }),
  ...r,
}));

export const AppAssets = assets.map(r => ({
  match: match(r.path.replace(/{/g, ':').replace(/}/g, ''), {
    decode: decodeURIComponent,
  }),
  ...r,
}));
