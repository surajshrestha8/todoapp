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
  image?: string;
  link?: string;
  children?: Array<RouteItem>;
}

export interface MutationOptions {
  onError?: (error: any) => Promise<unknown> | void;
  onSuccess?: (data: any) => Promise<unknown> | void;
  id?: string | number;
  editing?: boolean;
}

export interface PaginationProps {
  page: number;
  perPage: number;
  totalRecords: number;
}

export interface SelectOption {
  label: string;
  value: string | number;
}
