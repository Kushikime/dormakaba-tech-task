import { createTheme } from '@mui/material';
export const theme = createTheme({
  palette: {
    primary: {
      light: '#0056d7',
      main: '#fff',
      dark: '#003b93',
      contrastText: '#000',
    },
    secondary: {
      main: '#000',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000',
    },
    text: {
      primary: '#202020',
      secondary: '#333533',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ['poppins', 'poppinsSemi', 'sans-serif'].join(','),
  },
});
