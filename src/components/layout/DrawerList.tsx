import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteItem } from '../../interface/common.interface';
import { drawerRoutes } from '../../routes/auth.routes';

interface Props {
  onItemClick: (event: React.MouseEvent | React.KeyboardEvent) => unknown;
}

interface ModuleStatus {
  [key: string]: boolean;
}

const DrawerList = ({ onItemClick }: Props) => {
  const navigate = useNavigate();
  const [modules, setModules] = useState<ModuleStatus>({});

  useEffect(() => {
    const modulesWithChildren: ModuleStatus = {};
    drawerRoutes
      .filter(({ children }) => !!children)
      .forEach(({ id }) => {
        modulesWithChildren[id] = false;
      });
    setModules(modulesWithChildren);
  }, []);

  const handleClick = (event: React.MouseEvent, route: RouteItem) => {
    if (!route.children) {
      navigate(route.path);
      onItemClick(event);
      return;
    }

    setModules({
      ...modules,
      [route.id]: !modules[route.id],
    });
  };

  return (
    <List
      sx={{ width: 250, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nav-sidebar"
    >
      {drawerRoutes.map((route) => (
        <React.Fragment key={route.id}>
          <ListItemButton onClick={(e) => handleClick(e, route)}>
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.title} />
            {!route.children ? null : modules[route.id] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={modules[route.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {route.children?.map((child) => (
                <ListItemButton
                  key={`${route.id}-${child.id}`}
                  sx={{ pl: 4 }}
                  onClick={(e) => handleClick(e, child)}
                >
                  <ListItemIcon>{child.icon}</ListItemIcon>
                  <ListItemText primary={child.title} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DrawerList;
