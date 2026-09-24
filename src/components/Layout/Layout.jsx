import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
