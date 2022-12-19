import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './themes/theme';
import Header from './components/header';
import './index.css';
import Preloader from './components/Preloader';
import { useEffect } from 'react';
import { setAppLoading } from './store/slices/app/appSlice';
import { SnackbarProvider } from 'notistack';
import { useAppDispatch } from './hooks';
import { RoutesWrapper } from './RoutesWrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Preloader />
        <Box
          height={'100%'}
          maxHeight='100vh'
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Header />
          <Router>
            <RoutesWrapper />
          </Router>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
