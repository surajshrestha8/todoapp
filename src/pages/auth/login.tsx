import { Box, Button, Grid, TextField } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import Spinner from '../../components/elements/loader/Spinner';
import useAuth from '../../hooks/auth/auth.hooks';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoading, login } = useAuth();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (isLoading) return;
    login({ email, password });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid item sm={12} md={8} lg={4}>
        <Box
          component="form"
          autoComplete="off"
          display="flex"
          flexDirection="column"
          rowGap={3}
          onSubmit={handleSubmit}
        >
          <TextField
            type="email"
            name="email"
            id="email"
            placeholder="mail@example.com"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            name="password"
            id="password"
            label="Password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" size="large" disabled={isLoading}>
            {isLoading && (
              <Box mr={1} display="flex" justifyContent="center">
                <Spinner show={true} size="1.2rem" />
              </Box>
            )}
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
