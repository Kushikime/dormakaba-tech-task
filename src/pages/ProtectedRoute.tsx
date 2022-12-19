import { PropsWithChildren, useEffect } from 'react';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setAppLoading } from '../store/slices/app/appSlice';


export const ProtectedRoute: FC<PropsWithChildren> = (
  { children }
) => {

  const dispatch = useAppDispatch();
  const authorized = useAppSelector((state) => state.user.authorized);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 1000);
  }, []);

  if (!authorized) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
};
