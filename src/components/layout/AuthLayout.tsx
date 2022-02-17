import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth/auth.hooks';
import Header from './Header';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthLayout;
