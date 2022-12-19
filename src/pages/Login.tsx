import { ReactElement, FC, useEffect } from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom';
import { setAppLoading } from '../store/slices/app/appSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

interface ILoginPageProps {}

const Login: FC<ILoginPageProps> = (props): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 700);
  }, []);
  
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        flexGrow: 1,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
