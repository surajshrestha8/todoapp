import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import http from '../../http';
import { AUTH } from '../../http/endpoints';
import queryClient from '../../http/queryClient';
import { User } from '../../interface/auth.interface';
import { HttpError } from '../../interface/common.interface';
import { useNotificationStore } from '../../store/app.store';
import { useAuthStore } from '../../store/auth.store';

export interface AuthRequest {
  email: string;
  password: string;
}

export const useProfile = () => {
  const { isLoading, data } = useQuery(['profile'], () => http.get(AUTH.PROFILE));

  return { isLoading, user: data as User };
};

export const useLogout = () => {
  const { setErrorMessage } = useNotificationStore();
  const navigate = useNavigate();
  const { setAccessToken } = useAuthStore();

  const response = useMutation(() => http.delete(AUTH.LOGOUT), {
    onSuccess: () => {
      setAccessToken(null);
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },
    onError: (error: HttpError) => {
      setErrorMessage(error?.response?.data?.message);
    },
  });
  return response;
};

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

  return {
    accessToken,
    isAuthenticated,
    setAccessToken,
    isLoading,
    login,
  };
};

export default useAuth;
