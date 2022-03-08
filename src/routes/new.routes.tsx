import {
  Dashboard,
  Facebook,
  GitHub,
  Google,
  Instagram,
  LinkedIn,
  PersonOutlined,
} from '@mui/icons-material';
import { RouteItem } from '~/interface/common.interface';

export const newRoutes: Array<RouteItem> = [
  {
    id: 'google',
    title: 'Google',
    path: '/roles',
    element: <></>,
    icon: <Google />,
    link: 'www.google.com',
  },
  {
    id: 'facebook',
    title: 'Facebook',
    path: '#',
    icon: <Facebook />,
    element: <></>,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    path: '#',
    icon: <LinkedIn />,
    element: <></>,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    path: '#',
    icon: <Instagram />,
    element: <></>,
  },
  {
    id: 'github',
    title: 'Github',
    path: 'http://www.github.com',
    icon: <GitHub />,
    element: <></>,
  },
];

export default [...newRoutes];
