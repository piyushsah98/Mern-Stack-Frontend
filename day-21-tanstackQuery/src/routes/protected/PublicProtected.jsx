import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";

const PublicProtected = () => {
  let { user } = useSelector((state) => state.auth);

  if (user) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default PublicProtected;
