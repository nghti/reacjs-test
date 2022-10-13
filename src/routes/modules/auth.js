import React from 'react';

import loadable from '../../utils/loadable';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const PageNotSignIn = loadable(() => import('../../pages/Auth/SignIn'), {
  fallback: <LoadingPage />,
});
const PageNotSignUp = loadable(() => import('../../pages/Auth/SignUp'), {
  fallback: <LoadingPage />,
});

const auth = [
  {
    path: '/login',
    exact: true,
    component: PageNotSignIn,
    restricted: true,
  },
  {
    path: '/signup',
    exact: true,
    component: PageNotSignUp,
    restricted: true,
  },
];
export default auth
