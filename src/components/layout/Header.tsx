import { Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
