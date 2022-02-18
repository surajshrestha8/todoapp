import { lazy } from 'react';
import { Route, Routes as Wrapper } from 'react-router-dom';
import Snackbar from '../components/elements/feedback/Snackbar';
import AuthLayout from '../components/layout/AuthLayout';
import GuestLayout from '../components/layout/GuestLayout';
import { useNotificationStore } from '../store/app.store';
const HomePage = lazy(() => import('../pages/home'));
const LoginPage = lazy(() => import('../pages/auth/login'));

const Routes = () => {
  const { message, type } = useNotificationStore();

  return (
    <>
      <Snackbar message={message || ''} type={type} />
      <Wrapper>
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Wrapper>
    </>
  );
};

export default Routes;
