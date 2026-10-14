import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-10 border-b border-zinc-600 ">
      <h1 className="text-2xl">Logo</h1>
      <div className="flex gap-8 items-center">
        <NavLink
          to={"/main"}
          className={({ isActive }) => {
            return isActive
              ? "text-yellow-500"
              : "text-white hover:text-yellow-500";
          }}
          end
        >
          Home
        </NavLink>
        <NavLink
          to={"/main/shop"}
          className={({ isActive }) => {
            return isActive
              ? "text-yellow-500"
              : "text-white hover:text-yellow-500";
          }}
        >
          Shop
        </NavLink>
        <NavLink
          to={"/main/about"}
          className={({ isActive }) => {
            return isActive
              ? "text-yellow-500"
              : "text-white hover:text-yellow-500";
          }}
        >
          About
        </NavLink>
      </div>

      <div className="flex gap-5 items-center">
        <h1>Hey, <strong>Piyush</strong></h1>
        <button className="px-3 py-1 rounded bg-red-500/70 cursor-pointer">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
