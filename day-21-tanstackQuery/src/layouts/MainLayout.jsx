import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#111] text-white min-h-screen relative">
      <div className="sticky top-0 left-0 z-50 backdrop-blur-xl">
        <Navbar />
      </div>
      <div className="z-10 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
