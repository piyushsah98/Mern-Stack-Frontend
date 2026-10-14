import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#1d1e1e] text-white px-15 py-5">
      <Navbar />
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
