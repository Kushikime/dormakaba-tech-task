import { PropsWithChildren } from 'react';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

interface IProtectedPageProps {}

export const ProtectedRoute: FC<PropsWithChildren<IProtectedPageProps>> = (
  props
): any => {
  const { children } = props;

  const authorized = useAppSelector((state) => state.user.authorized);

  if (!authorized) {
    return <Navigate to='/login' />;
  }
  return children;
};
