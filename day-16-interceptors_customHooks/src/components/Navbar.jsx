import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#111] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <NavLink to="/" className="text-3xl font-bold text-lime-400">
          ShopNest
        </NavLink>

        <div className="hidden md:flex items-center gap-8 text-zinc-300">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/">Categories</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </div>

        <div className="flex items-center gap-5">
          <Search className="cursor-pointer" size={20} />
          <Heart className="cursor-pointer" size={20} />
          <ShoppingCart className="cursor-pointer" size={20} />
          <User className="cursor-pointer" size={20} />
          <Menu className="md:hidden cursor-pointer" size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
