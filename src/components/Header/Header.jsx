import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'background.header',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Carts Products Manager</Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            component={NavLink}
            to="/"
            startIcon={<HomeOutlinedIcon />}
            sx={{
              color: 'inherit',
              px: 2,
              borderRadius: 2,
              '&.active': {
                bgcolor: 'rgba(255, 255, 255, 0.12)',
                color: 'primary.light',
              },
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to="/users"
            startIcon={<PeopleAltOutlinedIcon />}
            sx={{
              color: 'inherit',
              px: 2,
              borderRadius: 2,
              '&.active': {
                bgcolor: 'rgba(255, 255, 255, 0.12)',
                color: 'primary.light',
              },
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Users
          </Button>

          <Button
            component={NavLink}
            to="/carts"
            startIcon={<ShoppingCartOutlinedIcon />}
            sx={{
              color: 'inherit',
              px: 2,
              borderRadius: 2,
              '&.active': {
                bgcolor: 'rgba(255, 255, 255, 0.12)',
                color: 'primary.light',
              },
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Carts
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
