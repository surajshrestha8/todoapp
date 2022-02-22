import { GridColumns } from '@mui/x-data-grid';
import Grid from '~/components/grid/Grid';
import { useAdminUserList } from '~/hooks/user/admin.hook';

const AdminsListingPage = () => {
  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
    },
    { field: 'email', headerName: 'Email' },
  ];

  const { isLoading, items: admins, pagination } = useAdminUserList();

  return (
    <Grid
      columns={columns}
      rows={admins || []}
      loading={isLoading}
      page={pagination?.page}
      pageSize={pagination?.perPage}
      rowCount={pagination?.totalRecords}
    />
  );
};

export default AdminsListingPage;
