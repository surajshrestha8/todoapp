import { AxiosError } from 'axios';

export const parseHttpError = ({ response }: AxiosError) => {
  let error = 'Something went wrong. Please try again.';
  if (response?.data?.message) {
    error = response.data.message;
  }

  return error;
};
