import { Article, Dashboard, TableRows } from '@mui/icons-material';
import { lazy } from 'react';
import { RouteItem } from '../interface/common.interface';
const HomePage = lazy(() => import('../pages/home'));
const SamplePage = lazy(() => import('../pages/sample'));

export const drawerRoutes: Array<RouteItem> = [
  {
    id: 'dashboard',
    path: '/',
    icon: <Dashboard />,
    element: <HomePage />,
    title: 'Dashboard',
  },
  {
    id: 'posts-module',
    path: '#',
    icon: <Article />,
    element: <></>,
    title: 'Post',
    children: [
      {
        id: 'post-category',
        path: '/post-category',
        icon: <TableRows />,
        element: <SamplePage />,
        title: 'Post Category',
      },
      {
        id: 'post',
        path: '/post',
        icon: <Article />,
        element: <SamplePage />,
        title: 'Post',
      },
    ],
  },
];

export default [...drawerRoutes];
