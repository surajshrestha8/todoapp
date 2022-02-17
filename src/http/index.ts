import { AxiosRequestConfig } from 'axios';
import axios from './axios';

const get = async (url: string, config?: AxiosRequestConfig) => {
  const { data } = await axios.get(url, config);
  return data;
};

const post = async (url: string, requestData: any, config?: AxiosRequestConfig) => {
  const { data } = await axios.post(url, requestData, config);
  return data;
};

const put = async (url: string, requestData: any, config?: AxiosRequestConfig) => {
  const { data } = await axios.put(url, requestData, config);
  return data;
};

const destroy = async (url: string, config?: AxiosRequestConfig) => {
  const { data } = await axios.delete(url, config);
  return data;
};

const http = {
  get,
  post,
  put,
  delete: destroy,
};

export default http;
