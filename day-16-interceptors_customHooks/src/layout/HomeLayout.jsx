import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";
import { HomeContextProvider } from "../contexts/HomeContext";

const HomeLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[1fr_7fr]">
      <SideBar />
      <div className="overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
