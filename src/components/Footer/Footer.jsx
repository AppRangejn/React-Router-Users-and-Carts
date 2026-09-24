import CodeIcon from '@mui/icons-material/Code';
import { Box, Container, Stack, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container>
        <Stack
          sx={{
            alignItems: 'center',
          }}
        >
          <Stack direction="row" spacing={1}>
            <CodeIcon fontSize="small" />
            <Typography>
              Developed by{' '}
              <Typography
                component="span"
                variant="body2"
                sx={{ fontWeight: 600 }}
              >
                Kiril Brychkovskyi
              </Typography>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
