import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export const tokenKey = localStorage.getItem('auth-storage')?.slice(25, 68);
const DGN_URL = 'https://dgn-api.nepbuzz.com/';

export const fetchList = (urlbase: any) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: DGN_URL + urlbase,
    headers: {
      Authorization: 'Bearer ' + tokenKey,
    },
  };
  return axios(config);
};

export const deleteUser = (id: any) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: DGN_URL + 'admin/' + id,
    headers: {
      Authorization: 'Bearer ' + tokenKey,
    },
  };
  return axios(config);
};
export const useFetchItem = (id: any, urlbase: any) => {
  const [data, setData] = useState('');
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: DGN_URL + urlbase + id,
      headers: {
        Authorization: 'Bearer ' + tokenKey,
      },
    };
    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error.response.data.message);
      });
  }, []);
  return { data };
};

export const saveAdmin = (data: any, urlbase: any) => {
  console.log(data);
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: DGN_URL + urlbase,
    headers: {
      Authorization: 'Bearer ' + tokenKey,
    },
    data: data,
  };
  return axios(config);
};

export const editAdmin = (data: any, urlbase: any) => {
  console.log(data.id);
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: DGN_URL + urlbase + data.id,
    headers: {
      Authorization: 'Bearer ' + tokenKey,
    },
    data: data,
  };

  return axios(config);
};
