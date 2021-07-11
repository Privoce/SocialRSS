import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    path: '/',
    component: lazy(() => import('./views/home')),
    exact: true,
  },
  {
    path: '/following',
    component: lazy(() => import('./views/following')),
    exact: true,
  },
  {
    path: '/user',
    component: lazy(() => import('./views/user')),
    exact: true,
  },
  {
    path: '/subscription',
    component: lazy(() => import('./views/subscription')),
    exact: true,
  },
  {
    path: '/subscription/new',
    component: lazy(() => import('./views/subscription_new')),
    exact: true,
  },
];

export default routes;
