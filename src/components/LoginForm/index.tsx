import { Button, styled, TextField, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect } from 'react';
import { setAppLoading } from '../../store/slices/app/appSlice';
import { setAuthorized } from '../../store/slices/user/userSlice';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { LoginInput, loginSchema } from '../../utils/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSnackbar } from 'notistack';
import FormInput from '../FormInput';
import { useAppDispatch } from '../../hooks';

interface ILoginFormProps {}

const StyledTextField = styled(FormInput)({
  marginBottom: '20px',
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(118, 118, 118)',
    },
  },
});

const LoginForm: FC<ILoginFormProps> = (props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
    setError,
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      dispatch(setAppLoading(true));
      reset();
      enqueueSnackbar('Successful login', { variant: 'success' });
      dispatch(setAuthorized(true));
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    if (values.password !== 'test1234') {
      setError('password', {
        message: 'Incorrect password',
      });
      enqueueSnackbar('Incorrect password', { variant: 'error' });
      return;
    }
  };

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}
        sx={{
          backgroundColor: 'primary.main',
          width: {
            sm: '500px',
          },
          py: '40px',
          px: '20px',
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <StyledTextField
          name='email'
          label='Email'
          variant='outlined'
          fullWidth
        />
        <StyledTextField
          name='password'
          label='Password'
          variant='outlined'
          fullWidth
          type={'password'}
        />

        <Button
          type='submit'
          variant='contained'
          sx={{
            backgroundColor: 'primary.light',
            color: 'common.white',
            ':hover': { backgroundColor: 'primary.dark' },
          }}
          fullWidth
        >
          Sign in
        </Button>
      </Box>
    </FormProvider>
  );
};

export default LoginForm;
