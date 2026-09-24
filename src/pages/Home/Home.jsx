import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          color: 'text.secondary',
          letterSpacing: 1,
        }}
      >
        Welcome
      </Typography>
    </Box>
  );
}

export default Home;
