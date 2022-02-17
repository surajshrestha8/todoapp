// import { clearLocalStorage, getAuthToken } from '@/util/localStorage.util';
import axios from 'axios';
import { API_BASE_URL } from '../config/app';
import { useAuthStore } from '../store/auth.store';

const baseURL = API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken: token } = useAuthStore();
  if (token && config && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      useAuthStore().setAccessToken(null);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
