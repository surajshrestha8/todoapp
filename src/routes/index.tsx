import { Route, Routes as Wrapper } from 'react-router-dom';
import Snackbar from '../components/elements/feedback/Snackbar';
import AuthLayout from '../components/layout/AuthLayout';
import GuestLayout from '../components/layout/GuestLayout';
import { useNotificationStore } from '../store/app.store';
import authRoutes from './auth.routes';
import guestRoutes from './guest.routes';

const Routes = () => {
  const { message, type } = useNotificationStore();

  return (
    <>
      <Snackbar message={message || ''} type={type} />
      <Wrapper>
        <Route element={<GuestLayout />}>
          {guestRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route element={<AuthLayout />}>
          {authRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
      </Wrapper>
    </>
  );
};

export default Routes;
