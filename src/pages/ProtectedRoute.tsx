import { PropsWithChildren, ReactElement } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";

interface IProtectedPageProps {}

export const ProtectedRoute: FC<PropsWithChildren<IProtectedPageProps>> = (props): any => {
  const {children} = props;

  const authorized = useSelector((state: RootState) => state.user.authorized);


  if (!authorized) {
    // user is not authenticated
    console.log("NOT AUTHORIZED: ", authorized)
    return <Navigate to="/login" />;
  } else {
    console.log("AUTHORIZED: ", authorized)
  }
  return children;
};
