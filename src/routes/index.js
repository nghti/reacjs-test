import React from 'react';

import loadable from '../utils/loadable';
import LoadingPage from '../components/LoadingPage/LoadingPage';

const PageNotFound = loadable(() => import('../pages/Error/PageNotFound'), {
  fallback: <LoadingPage />,
});

const ServerNotFound = loadable(() => import('../pages/Error/ServerError'), {
  fallback: <LoadingPage />,
});

/**
 * Get list route modules
 *
 * @return [{}]
 */

const modulesRoute = () => {
  const requireModule = require.context('./modules', true, /\.js$/);
  const modules = [];

  requireModule.keys().forEach((file) => {
    const module = requireModule(file).default;
    modules.push(...module);
  });

  return modules;
};

const routes = [
  ...modulesRoute(),
  { path: '/404', exact: true, component: PageNotFound },
  { path: '/500', exact: true, component: ServerNotFound },
  { path: '*', component: PageNotFound },
];

export default routes
