import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    path: '/',
    component: lazy(() => import('./layouts/BaseLayout')),
    routes: [
      {
        path: '/',
        component: lazy(() => import('./views/home')),
        exact: true,
      },
      {
        path: '/profile',
        component: lazy(() => import('./views/profile')),
      },
      {
        path: '/archived',
        component: lazy(() => import('./views/user')),
      },
      {
        path: '/user/:id',
        component: lazy(() => import('./views/user')),
      },
      {
        path: '/subscription',
        component: lazy(() => import('./views/subscription')),
        exact: true,
      },
      {
        path: '/subscription/new',
        component: lazy(() => import('./views/subscription_new')),
      },
    ],
  },
];

export default routes;
