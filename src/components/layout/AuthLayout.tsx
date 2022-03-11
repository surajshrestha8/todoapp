import { Box, SwipeableDrawer } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Breadcrumb from '~/components/layout/Breadcrumb';
import useAuth from '../../hooks/auth/auth.hooks';
import Links from '../links/Links';
import DrawerList from './DrawerList';
import Header from './Header';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (openState: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(openState);
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Header onMenuClick={toggleDrawer(true)} />
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <DrawerList onItemClick={toggleDrawer(false)} />
        <Links onItemClick={toggleDrawer(false)} />
      </SwipeableDrawer>
      <Box p={2} minHeight="90vh">
        <Breadcrumb />
        <Outlet />
      </Box>
    </>
  );
};

export default AuthLayout;
