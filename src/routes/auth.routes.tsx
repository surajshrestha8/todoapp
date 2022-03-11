import {
  Article,
  BarChartSharp,
  Dashboard,
  Google,
  ManageAccounts,
  Person,
  TableRows,
  Twitter,
} from '@mui/icons-material';
import { lazy } from 'react';
import { RouteItem } from '../interface/common.interface';
const HomePage = lazy(() => import('../pages/home'));
const SamplePage = lazy(() => import('../pages/sample'));
const AdminsListingPage = lazy(() => import('~/pages/user-management/admin/admins'));
const CreateAdminPage = lazy(() => import('~/pages/user-management/admin/create-admin'));
const EditAdminPage = lazy(() => import('~/pages/user-management/admin/edit-admin'));
const AdminPage = lazy(() => import('~/pages/users/admin/adminform'));
const Admins = lazy(() => import('~/pages/users/admin/admins'));
const EditAdmin = lazy(() => import('~/pages/users/admin/editadmin'));
const CreateAdmin = lazy(() => import('~/pages/users/admin/create-admin'));
const AdminList = lazy(() => import('~/pages/usersmanagement/admin/adminlist'));
const CreateAdmins = lazy(() => import('~/pages/usersmanagement/admin/admin-create'));
const EditNewAdmin = lazy(() => import('~/pages/usersmanagement/admin/editadmin'));
const Roles = lazy(() => import('~/pages/roles/rolelist'));
const CreateRole = lazy(() => import('~/pages/roles/create-roles'));
const SparkLine = lazy(() => import('~/components/sparklines/spark'));

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
  {
    id: 'newadmins',
    path: '#',
    title: 'Users',
    icon: <Person />,
    element: <></>,
    children: [
      {
        id: 'newadmins',
        path: '/newadmins',
        element: <AdminList />,
        title: 'Admin List',
      },
    ],
  },
  {
    id: 'role-module',
    path: '#',
    title: 'Roles',
    element: <></>,
    children: [
      {
        id: 'roles',
        path: '/roles',
        element: <Roles />,
        title: 'Role list',
      },
    ],
  },
  {
    id: 'twitter',
    path: '#',
    title: 'Twitter',
    icon: <Twitter />,
    element: <></>,
  },
  {
    id: 'google',
    path: '/www.google.com',
    title: 'Google',
    icon: <Google />,
    element: <></>,
  },
  {
    id: 'sparkline',
    path: '/sparkline',
    title: 'SparkLine',
    icon: <BarChartSharp />,
    element: <SparkLine />,
  },
];

export const appRoutes: Array<RouteItem> = [
  {
    id: 'create-admin',
    path: '/admin/create',
    element: <CreateAdminPage />,
    title: 'Create Admin',
  },
  {
    id: 'edit-admin',
    path: '/admin/:id/edit',
    element: <EditAdminPage />,
    title: 'Edit Admin',
  },
  {
    id: 'edit-newadmin',
    path: '/newadmin/:id/edit',
    element: <EditAdmin />,
    title: 'Edit Admin',
  },
  {
    id: 'create-newadmins',
    path: 'newadmins/create',
    element: <CreateAdmins />,
    title: 'Create new admin',
  },
  {
    id: 'edit-newadmins',
    path: '/newadmins/:id/edit',
    element: <EditNewAdmin />,
    title: 'Edit new admin',
  },
  {
    id: 'create-role',
    path: '/roles/create',
    element: <CreateRole />,
    title: 'Create Role',
  },
];

export default [...drawerRoutes, ...appRoutes];
