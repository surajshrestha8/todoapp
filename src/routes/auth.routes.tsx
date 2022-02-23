import { Article, Dashboard, ManageAccounts, Person, TableRows } from '@mui/icons-material';
import { lazy } from 'react';
import { RouteItem } from '../interface/common.interface';
const HomePage = lazy(() => import('../pages/home'));
const SamplePage = lazy(() => import('../pages/sample'));
const AdminsListingPage = lazy(() => import('~/pages/user-management/admin/admins'));
const CreateAdminPage = lazy(() => import('~/pages/user-management/admin/create-admin'));

export const drawerRoutes: Array<RouteItem> = [
  {
    id: 'dashboard',
    path: '/',
    icon: <Dashboard />,
    element: <HomePage />,
    title: 'Dashboard',
  },
  {
    id: 'user-mgmt',
    path: '#',
    icon: <ManageAccounts />,
    element: <></>,
    title: 'User Management',
    children: [
      {
        id: 'admin',
        path: '/admin',
        icon: <Person />,
        element: <AdminsListingPage />,
        title: 'Admins',
      },
    ],
  },
  {
    id: 'post-module',
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

export const appRoutes: Array<RouteItem> = [
  {
    id: 'create-admin',
    path: '/admin/create',
    element: <CreateAdminPage />,
    title: 'Create Admin',
  },
];

export default [...drawerRoutes, ...appRoutes];
