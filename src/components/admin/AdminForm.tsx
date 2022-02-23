import { SelectChangeEvent, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Form from '~/components/elements/form/Form';
import Select from '~/components/elements/form/Select';
import { useSaveAdminUser } from '~/hooks/user/admin.hook';
import { useRoleOptions } from '~/hooks/user/role.hook';

const AdminForm = () => {
  const [form, setForm] = useState<any>({});
  const { items: roleOptions = [] } = useRoleOptions();
  const { isLoading: saving, mutate } = useSaveAdminUser();

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

  return (
    <Form onSubmit={handleSubmit}>
      <Select
        name="roleId"
        label="Role"
        options={roleOptions}
        required={true}
        onChange={handleChange}
        value={form.roleId}
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
        label="First Name"
        placeholder="First Name"
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
    </Form>
  );
};

export default AdminForm;
