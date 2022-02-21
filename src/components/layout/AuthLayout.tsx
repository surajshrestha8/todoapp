import { SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth/auth.hooks';
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
      </SwipeableDrawer>
      <Outlet />
    </>
  );
};

export default AuthLayout;
