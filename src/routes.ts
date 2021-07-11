import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  // {
  //   path: '/',
  //   component: lazy(() => import('./views/home')),
  // },
  {
    path: '/',
    component: lazy(() => import('./layouts/BaseLayout')),
    routes: [
      {
        path: '/following',
        component: lazy(() => import('./views/following')),
      },
      {
        path: '/user',
        component: lazy(() => import('./views/user')),
      },
      {
        path: '/subscription',
        component: lazy(() => import('./views/subscription')),
      },
      {
        path: '/subscription/new',
        component: lazy(() => import('./views/subscription_new')),
      },
    ],
  },
];

export default routes;
