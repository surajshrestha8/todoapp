import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import http from '../../http';
import { AUTH } from '../../http/endpoints';
import { HttpError } from '../../interface/common.interface';
import { useNotificationStore } from '../../store/app.store';
import { useAuthStore } from '../../store/auth.store';

export interface AuthRequest {
  email: string;
  password: string;
}

const useAuth = () => {
  const { accessToken, setAccessToken } = useAuthStore();
  const { resetMessage, setErrorMessage } = useNotificationStore();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!accessToken);
  useEffect(() => {
    setIsAuthenticated(!!accessToken);
  }, [accessToken]);

  const { isLoading, mutate: login } = useMutation(
    (data: AuthRequest) => {
      resetMessage();
      return http.post(AUTH.LOGIN, data);
    },
    {
      onSuccess: (response) => {
        setAccessToken(response.token);
      },
      onError: (error: HttpError) => {
        setErrorMessage(error?.response?.data?.message);
      },
    }
  );

  return { accessToken, isAuthenticated, setAccessToken, isLoading, login };
};

export default useAuth;
