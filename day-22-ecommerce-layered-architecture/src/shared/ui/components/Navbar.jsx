import React from "react";
import { NavLink } from "react-router";
import { LogOutIcon, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="px-10 py-5 flex items-center justify-between bg-[#1a1a1a] rounded-xl">
      <h1 className="text-xl font-semibold">E-Commerce</h1>
      <div className="flex items-center gap-15">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-cyan-700" : "hover:text-cyan-700";
          }}
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-cyan-700" : "hover:text-cyan-700";
          }}
          to={"/main/products"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-cyan-700" : "hover:text-cyan-700";
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div>
        <div className="flex items-center gap-8">
          <NavLink
            to={"/main/cart"}
            className={({ isActive }) => {
              return isActive
                ? "text-cyan-700 text-xl"
                : "hover:text-cyan-700";
            }}
          >
            <ShoppingCart size={20} />
          </NavLink>
          <LogOutIcon color="red" size={20} className="cursor-pointer"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
