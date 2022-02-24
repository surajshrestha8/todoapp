import { SelectChangeEvent, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '~/components/elements/form/Form';
import Select from '~/components/elements/form/Select';
import { useSaveAdminUser } from '~/hooks/user/admin.hook';
import { useRoleOptions } from '~/hooks/user/role.hook';
import { User } from '~/interface/auth.interface';

interface Props {
  admin?: User;
  loading?: boolean;
}

const AdminForm = ({ admin, loading }: Props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState<any>({});
  const { isLoading: loadingRoles, items: roleOptions = [] } = useRoleOptions();
  const { isLoading: saving, mutate } = useSaveAdminUser({
    id: admin?.id,
  });

  useEffect(() => {
    if (!admin) {
      return;
    }

    setForm(admin);
  }, [admin]);

  const handleChange = ({
    target,
  }: ChangeEvent<{ name: string; value: string }> | SelectChangeEvent) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (saving) {
      return;
    }

    mutate(form);
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      loading={loading || loadingRoles}
      saving={saving}
    >
      <Select
        name="roleId"
        label="Role"
        options={roleOptions}
        required={true}
        onChange={handleChange}
        value={form.roleId || ''}
      />

      <TextField
        id="firstName"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        fullWidth
        required
        onChange={handleChange}
        value={form.firstName}
      />

      <TextField
        id="lastName"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        fullWidth
        required
        onChange={handleChange}
        value={form.lastName}
      />

      <TextField
        id="email"
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        fullWidth
        required
        onChange={handleChange}
        value={form.email}
      />

      {!admin && (
        <TextField
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          fullWidth
          required
          onChange={handleChange}
          value={form.password}
        />
      )}

      {!admin && (
        <TextField
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          fullWidth
          required
          onChange={handleChange}
          value={form.password_confirmation}
        />
      )}
    </Form>
  );
};

export default AdminForm;
