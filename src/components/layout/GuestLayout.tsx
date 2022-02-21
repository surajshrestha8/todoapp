import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/auth/auth.hooks';

const GuestLayout = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default GuestLayout;
