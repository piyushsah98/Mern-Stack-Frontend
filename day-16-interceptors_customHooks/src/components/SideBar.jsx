import React from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div className="h-screen w-[20vw] bg-gray-800 flex flex-col justify-between px-5 py-10 text-white">
      <div className="space-y-15">
        <h1 className="text-3xl font-bold tracking-widest">Myntra</h1>
        <div className="flex flex-col gap-5">
          <NavLink className={({isActive}) => {
            return isActive ? 'bg-gray-500 px-5 py-3 rounded-md font-semibold' : 
            'hover:bg-gray-500 px-5 py-3 rounded-md font-semibold'
          }} to={"/"} end>Home</NavLink>
          <NavLink className={({isActive}) => {
            return isActive ? 'bg-gray-500 px-5 py-3 rounded-md font-semibold' : 
            'hover:bg-gray-500 px-5 py-3 rounded-md font-semibold'
          }} to={"/shop"}>Shop</NavLink>
          <NavLink className={({isActive}) => {
            return isActive ? 'bg-gray-500 px-5 py-3 rounded-md font-semibold' : 
            'hover:bg-gray-500 px-5 py-3 rounded-md font-semibold'
          }} to={"/users"}>Users</NavLink>
        </div>
      </div>
      <button className="py-3 rounded-2xl border-none bg-red-500/80">
        Logout
      </button>
    </div>
  );
};

export default SideBar;
