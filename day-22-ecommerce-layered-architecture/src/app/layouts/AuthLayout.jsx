import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="h-screen bg-[#1d1e1e] text-white">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
