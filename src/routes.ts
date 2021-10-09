import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    path: '/register',
    component: lazy(() => import('./views/register')),
    exact: true,
  },
  {
    path: '/login',
    component: lazy(() => import('./views/login')),
    exact: true,
  },
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
        path: '/new/subscription',
        component: lazy(() => import('./views/new_subscription')),
      },
      {
        path: '/new/source',
        component: lazy(() => import('./views/new_source')),
      },
    ],
  },
];

export default routes;
