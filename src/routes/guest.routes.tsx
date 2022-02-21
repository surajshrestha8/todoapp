import { lazy } from 'react';
import { RouteItem } from '../interface/common.interface';

const LoginPage = lazy(() => import('../pages/auth/login'));

const guestRoutes: Array<RouteItem> = [
  {
    id: 'login',
    path: '/login',
    element: <LoginPage />,
  },
];

export default guestRoutes;
