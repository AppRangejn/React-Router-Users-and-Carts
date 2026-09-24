import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0000007e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f43f5d',
    },
    background: {
      default: '#f8fafc11',
      paper: '#cacaca',
    },
    text: {
      primary: '#545455',
      secondary: '#64748b',
    },
    divider: '#d2d3d4',
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: '"Overpass", "Roboto", sans-serif',

    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },

    body1: {
      fontSize: '0.95rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
});

export default theme;
