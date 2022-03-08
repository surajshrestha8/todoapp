import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminUserList, useDeleteAdminUser } from '~/hooks/user/admin.hook';
import { GridColumns } from '@mui/x-data-grid';
import Grid from '~/components/grid/Grid';
import { Button, Stack } from '@mui/material';
import EditButton from '~/components/action/EditButton';
import DeleteButton from '~/components/action/DeleteButton';

const AdminList = () => {
  const { isLoading, items: data, pagination } = useAdminUserList();
  const { isLoading: isDeleting, mutate: deleteAdmin } = useDeleteAdminUser();
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState<number>();

  const handleDelete = (id: number) => {
    console.log(id);
    setDeleteId(id);
    deleteAdmin(id);
  };

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
    },
    {
      field: 'role',
      headerName: 'Role',
      valueGetter: ({ row }) => row.role.name,
    },
    {
      field: 'email',
      headerName: 'Email',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => {
        if (row.role.isSuperAdmin) {
          return null;
        }
        return (
          <Stack spacing={2} direction="row">
            <EditButton to={`/newadmins/${row.id}/edit`} />
            <DeleteButton
              loading={isDeleting && deleteId === row.id}
              onConfirm={() => handleDelete(row.id)}
            />
          </Stack>
        );
      },
    },
  ];

  const handleAddNew = () => {
    navigate('/newadmins/create');
  };

  return (
    <>
      <Grid
        columns={columns}
        rows={data || []}
        onAddNew={handleAddNew}
        loading={isLoading}
        pageSize={pagination?.perPage}
      />
    </>
  );
};

export default AdminList;
