import { Button, Stack, Modal, Box, Typography } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchList, deleteUser } from './adminhooks';
import { useAdminUserList, useDeleteAdminUser } from '~/hooks/user/admin.hook';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  opacity: 1,
  boxShadow: '24 red',
  p: 4,
};

const Admins = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(false);
  const [open, setOpen] = useState(false);

  const [newId, setNewId] = useState('');

  const handleOpen = (id: any) => {
    setOpen(true);
    setNewId(id);
  };
  const handleClose = () => {
    setOpen(false);
    setNewId('');
  };

  useEffect(() => {
    fetchList('admin')
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [count]);

  const toCreate = () => {
    navigate('/newadmin/create');
  };

  const deleteAdmin = (id: any) => {
    deleteUser(id)
      .then(function (response) {
        console.log(response);
        setCount(!count);
        handleClose();
      })
      .catch(function (error) {
        console.log(error.response.data.message);
      });
  };

  const editAdmin = (id: any) => {
    console.log(id);
    navigate(`/newadmin/${id}/edit`);
  };

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
      width: 200,
    },
    { field: 'role', headerName: 'Role', valueGetter: ({ row }) => row.role.name, width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: ({ row }) => {
        return (
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary" onClick={() => editAdmin(row.id)}>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={() => handleOpen(row.id)}>
              Delete
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Are you sure you want to delete this admin?
                </Typography>
                <Stack direction="row" spacing={2} style={{ alignSelf: 'flex-end' }}>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => deleteAdmin(newId)}>
                    Delete
                  </Button>
                </Stack>
              </Box>
            </Modal>
          </Stack>
        );
      },
    },
  ];
  return (
    <>
      <Stack spacing={2} direction="column">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={toCreate}
          style={{ alignSelf: 'flex-end' }}
        >
          Add New
        </Button>
        <div style={{ width: '100%', height: 300 }}>
          <DataGrid
            initialState={{
              sorting: {
                sortModel: [{ field: 'id', sort: 'asc' }],
              },
            }}
            columns={columns}
            rows={data}
            pageSize={3}
          />
        </div>
      </Stack>
    </>
  );
};

export default Admins;
