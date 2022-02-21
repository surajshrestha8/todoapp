import { PaginationProps } from '@mui/material';

export const formatPagination = (data: any): PaginationProps => {
  const { page = 1, perPage = 20, totalRecords = 0 } = data;
  return {
    page: parseInt(page, 10),
    count: totalRecords / perPage,
  };
};
