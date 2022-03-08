import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Stack,
  InputLabel,
  Alert,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editAdmin, saveAdmin } from './adminhooks';
import { useRoleOptions } from '~/hooks/user/role.hook';

const AdminPage = ({ admin }: any) => {
  const [forms, setForms] = useState<any>({});
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    if (params.id) {
      setForms(admin);
    }
  }, [admin, params.id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setForms({
      ...forms,
      [name]: value,
    });
  };
  console.log(forms);

  const cancelEdit = () => {
    navigate('/newadmin');
  };

  const dataSubmit = (e: any) => {
    e.preventDefault();
    if (params.id) {
      editAdmin(forms, 'admin/')
        .then(function (response) {
          console.log(response.data);
          navigate('/newadmin');
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    } else {
      saveAdmin(forms, 'admin/')
        .then(function (response) {
          console.log(response.data);
          navigate('/newadmin');
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <form onSubmit={dataSubmit} autoComplete="off">
            <Grid>
              <Grid item></Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First name"
                  defaultValue=" "
                  value={forms.firstName}
                  required
                  type="text"
                  margin="normal"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last name"
                  defaultValue=" "
                  required
                  type="text"
                  margin="normal"
                  value={forms.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  required
                  type="email"
                  defaultValue="email"
                  margin="normal"
                  value={forms.email}
                  onChange={handleInputChange}
                />
              </Grid>
              {!params.id && (
                <Grid item>
                  <TextField
                    fullWidth
                    name="password"
                    onChange={handleInputChange}
                    required
                    label="Password"
                    value={forms.password}
                    type="password"
                    margin="normal"
                  />
                </Grid>
              )}
              {!params.id && (
                <Grid item>
                  <TextField
                    fullWidth
                    name="password_confirmation"
                    label="Confirm  password"
                    required
                    type="password"
                    value={forms.password_confirmation}
                    onChange={handleInputChange}
                    margin="normal"
                  />
                </Grid>
              )}
            </Grid>
            <Stack direction="row" spacing={2} margin="normal">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <Button variant="outlined" onClick={cancelEdit}>
                Cancel
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminPage;
