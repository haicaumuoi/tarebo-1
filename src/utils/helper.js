import { AppRoutes } from '~/app/routes';

export const getAppRoutes = () => {
  const subDomain = getSubDomain();

  const main = AppRoutes.find((route) => route.main);
  if (!main) throw new Error('must have a main route');
  if (subDomain === '') return main.router;

  const app = AppRoutes.find((route) => route.subDomain === subDomain);
  if (!app) return main.router;
  return app.router;
};

export const getSubDomain = () => {
  const host = window.location.host;
  const hostName = window.location.hostname;
  return host
    .split('.')
    .slice(0, host.includes(hostName) ? -1 : -2)
    .join('');
};
