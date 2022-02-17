import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/auth.store';

const useAuth = () => {
  const { accessToken, setAccessToken } = useAuthStore();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!accessToken);
  useEffect(() => {
    setIsAuthenticated(!!accessToken);
  }, [accessToken]);

  return { accessToken, isAuthenticated, setAccessToken };
};

export default useAuth;
