import { useNavigate } from 'react-router-dom';
import { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { TextField, SelectChangeEvent } from '@mui/material';
import Form from '../../../components/elements/form/Form';
import Select from '~/components/elements/form/Select';
import { useSaveAdmin } from '~/hooks/user/admin.hook';
import { User } from '~/interface/auth.interface';
import { useRoleOptions } from '~/hooks/user/role.hook';
import Forms from '~/components/elements/forms/forms';

interface Props {
  admin?: User;
  loading?: boolean;
}

const AdminForm = ({ admin, loading }: Props) => {
  const [form, setForm] = useState<any>({});
  const navigate = useNavigate();
  const { isLoading: loadingRoles, items: role = [] } = useRoleOptions();
  const { isLoading: saving, mutate } = useSaveAdmin({
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
    console.log(form);
  };
  const handleCancel = () => {
    navigate('/newadmins');
  };

  return (
    <>
      {/* <Form
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading || loadingRoles}
        saving={saving}
      >
        <Select
          name="roleId"
          label="role"
          options={role}
          required={true}
          onChange={handleChange}
          value={form.roleId || ''}
        />

        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          fullWidth
          required
          onChange={handleChange}
          value={form.firstName}
        />

        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
          required
          onChange={handleChange}
          value={form.lastName}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
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
            label="password"
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
            label="Confirm password"
            placeholder="Confirm Password"
            type="password"
            fullWidth
            required
            onChange={handleChange}
            value={form.password_confirmation}
          />
        )}
      </Form> */}
      <Forms
        loading={loading || loadingRoles}
        saving={saving}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      >
        <Select
          name="roleId"
          label="role"
          options={role}
          required={true}
          onChange={handleChange}
          value={form.roleId || ''}
        />

        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          fullWidth
          required
          onChange={handleChange}
          value={form.firstName}
        />

        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
          required
          onChange={handleChange}
          value={form.lastName}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
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
            label="password"
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
            label="Confirm password"
            placeholder="Confirm Password"
            type="password"
            fullWidth
            required
            onChange={handleChange}
            value={form.password_confirmation}
          />
        )}
      </Forms>
    </>
  );
};

export default AdminForm;
