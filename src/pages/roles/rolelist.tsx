import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Grid from '~/components/grid/Grid';
import { GridColumns } from '@mui/x-data-grid';

const Roles = () => {
  const navigate = useNavigate();

  const toCreate = () => {
    console.log('hello');
    navigate('www.google.com');
  };
  const columns: GridColumns = [];
  return (
    <>
      <h1>Roles </h1>
      <a href="www.google.com">Hello</a>
      <Button variant="contained" onClick={toCreate}>
        Add new
      </Button>
    </>
  );
};

export default Roles;
