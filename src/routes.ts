import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    path: '/',
    name: 'Home',
    component: lazy(() => import('./views/home')),
    exact: true,
  },
  {
    path: '/detail',
    component: lazy(() => import('./views/detail')),
    exact: true,
  },
];

export default routes;
