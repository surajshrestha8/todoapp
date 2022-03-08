import Forms from '~/components/elements/forms/forms';
import { usePermissionsOptions } from '~/hooks/user/role.hook';
import { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { useSaveRole } from '~/hooks/user/role.hook';
import { Menu, TextField } from '@mui/material';
import { useRoleOptions } from '~/hooks/user/role.hook';
import { Select, MenuItem, SelectChangeEvent, OutlinedInput } from '@mui/material';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const CreateRole = ({ loading }: any) => {
  const { items: permissions = [], isLoading: loadingPermissions } = usePermissionsOptions();
  const { isLoading: saving, mutate } = useSaveRole();
  const { items: roleOptions = [], isLoading: loadingRoles } = useRoleOptions();
  console.log(roleOptions);
  const navigate = useNavigate();
  const [permission, setPermission] = useState<string[]>([]);
  const [role, setRole] = useState('');
  const permArray = [];
  console.log(permissions);
  for (const key in permissions) {
    for (const keys in permissions[key]) {
      permArray.push(keys);
    }
  }

  const handleChange = (event: SelectChangeEvent<typeof permission>) => {
    const {
      target: { value },
    } = event;
    setPermission(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (saving) {
      return;
    }
    const datas = {
      name: role,
      permissions: permission,
    };
    console.log(datas);
    mutate(datas);
  };
  const handleCancel = () => {
    navigate('/roles');
  };

  return (
    <>
      <Forms onSubmit={handleSubmit} onCancel={handleCancel} loading={loading} saving={saving}>
        <TextField name="role" label="role" onChange={(e) => setRole(e.target.value)} />
        <Select
          name="permissions"
          label="Permission"
          onChange={handleChange}
          value={permission}
          multiple
          input={<OutlinedInput label="Name" />}
        >
          {permArray.map((data, index) => (
            <MenuItem key={index} value={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </Forms>
    </>
  );
};

export default CreateRole;
