import React from 'react';

import loadable from '../../utils/loadable';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const PageDashboard = loadable(() => import('../../pages/index'), {
  fallback: <LoadingPage />,
});

const Dashboard = [
  {
    path: '/',
    exact: true,
    component: PageDashboard,
    requiredAuth: true,
    layout: true,
  },
];
export default Dashboard
