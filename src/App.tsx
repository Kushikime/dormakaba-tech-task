import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './themes/theme';
import { routes as appRoutes } from './routes';
import Header from './components/header';
import './index.css';
import Preloader from './components/Preloader';
import { useEffect } from 'react';
import { setAppLoading } from './store/slices/app/appSlice';
import { SnackbarProvider } from 'notistack';
import { useAppDispatch } from './hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 1000);
  }, []);

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
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Router>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
