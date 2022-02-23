import { GridColumns } from '@mui/x-data-grid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '~/components/action/DeleteButton';
import Grid from '~/components/grid/Grid';
import { useAdminUserList, useDeleteAdminUser } from '~/hooks/user/admin.hook';

const AdminsListingPage = () => {
  const [deletingId, setDeletingId] = useState<number | string | null>();
  const navigate = useNavigate();
  const { isLoading, items: admins, pagination } = useAdminUserList();
  const { isLoading: isDeleting, mutate: deleteAdmin } = useDeleteAdminUser();

  const handleConfirmDelete = (id: number) => {
    setDeletingId(id);
    deleteAdmin(id);
  };

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
    },
    { field: 'email', headerName: 'Email' },
    { field: 'role', headerName: 'Role', valueGetter: ({ row }) => row.role.name },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: ({ row }) => {
        if (row.role.isSuperAdmin) {
          return null;
        }

        return (
          <DeleteButton
            loading={isDeleting && deletingId === row.id}
            onConfirm={() => handleConfirmDelete(row.id)}
          />
        );
      },
    },
  ];

  const handleAddNew = () => {
    navigate('/admin/create');
  };

  return (
    <Grid
      onAddNew={handleAddNew}
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
