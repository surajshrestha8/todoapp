import { lazy } from 'react';
import { RouteItem } from '../interface/common.interface';
const HomePage = lazy(() => import('../pages/home'));

const drawerRoutes: Array<RouteItem> = [
  {
    id: 'dashboard',
    path: '/',
    element: <HomePage />,
    title: 'Dashboard',
  },
];

export default [...drawerRoutes];
