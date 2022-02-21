import axios from 'axios';
import { API_BASE_URL } from '../config/app';
import { getToken, resetToken } from '../store/auth.store';

const baseURL = API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (location.pathname !== '/login' && error?.response?.status === 401) {
      resetToken();
      window.location.replace('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
