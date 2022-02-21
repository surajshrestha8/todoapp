import { Fragment } from 'react';
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
            <Fragment key={route.id}>
              {!route.children && <Route path={route.path} element={route.element} />}
              {route.children?.map((child) => (
                <Route key={`${route.id}-${child.id}`} path={child.path} element={child.element} />
              ))}
            </Fragment>
          ))}
        </Route>
      </Wrapper>
    </>
  );
};

export default Routes;
