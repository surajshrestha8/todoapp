import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

export type HttpResponse = AxiosResponse;

export type HttpError = AxiosError;

export interface RouteItem {
  id: string;
  path: string;
  icon?: React.ReactNode;
  element: React.ReactNode;
  title?: string;
  children?: Array<RouteItem>;
}
