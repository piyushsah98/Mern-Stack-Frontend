import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { Auth } from "../contexts/AuthContext";

const PublicRoute = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useContext(Auth);

  if (isUserLoggedIn) {
    return <Navigate to={'/home'}/>;
  }

  return <Outlet />;
};

export default PublicRoute;
