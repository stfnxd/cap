import React, { useContext } from "react";
import { AuthCon } from "./auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useContext(AuthCon);
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet/>
};

export default PrivateRoute;
