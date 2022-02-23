import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import http from '~/http';
import queryClient from '~/http/queryClient';
import { MutationOptions, PaginationProps } from '~/interface/common.interface';
import { useNotificationStore } from '~/store/app.store';
import { parseHttpError } from '~/utils/httpParser.utils';
import { formatPagination } from '~/utils/pagination.utils';

export function useFetchList<M = unknown>(key: string[], endpoint: string, query?: any) {
  const [items, setItems] = useState<M>();
  const [pagination, setPagination] = useState<PaginationProps>();

  const response = useQuery(key, () => http.get(endpoint, { params: query }));
  const { isLoading, isSuccess, data } = response;

  useEffect(() => {
    if (isSuccess) {
      setItems(data.data);
      setPagination(formatPagination(data));
    }
  }, [isLoading, isSuccess, data]);

  return { ...response, items, pagination };
}

export function useFetchItem<M = unknown>(key: string[], endpoint: string) {
  const [item, setItem] = useState<M>();

  const response = useQuery(key, () => http.get(endpoint));
  const { isLoading, isSuccess, data } = response;

  useEffect(() => {
    if (isSuccess) {
      setItem(data);
    }
  }, [isLoading, isSuccess, data]);

  return { ...response, item };
}

export function useSaveRequest(endpoint: string, options?: MutationOptions) {
  const httpMethod = options?.editing ? 'put' : 'post';
  const { setSuccessMessage, setErrorMessage } = useNotificationStore();

  return useMutation((data: any) => http[httpMethod](endpoint, data), {
    onSuccess: (response: any) => {
      setSuccessMessage('Data successfully saved.');
      if (options?.onSuccess) {
        options.onSuccess(response);
      }
    },
    onError: (error: AxiosError) => {
      setErrorMessage(parseHttpError(error));
      if (options?.onError) {
        options.onError(error);
      }
    },
  });
}

export const useDeleteRequest = (
  queryKey: string,
  endpoint: (id: string | number) => string,
  options?: MutationOptions
) => {
  const { setSuccessMessage } = useNotificationStore();
  return useMutation((id: string | number) => http.delete(endpoint(id)), {
    onSuccess() {
      setSuccessMessage('Data successfully removed.');
      queryClient.refetchQueries(queryKey, { exact: true });
    },
    onError: options?.onError,
  });
};
