import {
  Dashboard,
  Facebook,
  GitHub,
  Google,
  Instagram,
  LinkedIn,
  Microwave,
  PersonOutlined,
  Twitter,
} from '@mui/icons-material';
import { RouteItem } from '~/interface/common.interface';
import Roles from '~/pages/roles/rolelist';
import google from '../components/links/images/google.png';
import twitter from '../components/links/images/twitter.png';
import instagram from '../components/links/images/instagram.png';
import facebook from '../components/links/images/facebook.png';
import github from '../components/links/images/github.png';
import linkedin from '../components/links/images/linkedin.png';
export const newRoutes: Array<RouteItem> = [
  {
    id: 'google',
    title: 'Google',
    path: '/roles',
    element: <></>,
    icon: <Google />,
    image: google,
    link: 'www.google.com',
  },
  {
    id: 'facebook',
    title: 'Facebook',
    path: 'roles',
    image: facebook,
    icon: <Facebook />,
    element: <Roles />,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    path: '/linkedin',
    image: linkedin,
    icon: <LinkedIn />,
    element: <></>,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    path: '#',
    image: instagram,
    icon: <Instagram />,
    element: <></>,
  },
  {
    id: 'github',
    title: 'Github',
    path: '',
    icon: <GitHub />,
    image: github,
    link: 'www.github.com',
    element: <></>,
  },
  {
    id: 'twitter',
    title: 'Twitter',
    path: '/',
    image: twitter,
    icon: <Twitter />,
    link: 'www.twitter.com',
    element: <></>,
  },
  {
    id: 'outlook',
    title: 'Outlook',
    path: '/',
    icon: <Microwave />,
    link: 'www.outlook.com',
    element: <></>,
  },
];

export default [...newRoutes];
