import React from "react";
import { NavLink } from "react-router";
import { Mail, Lock, ArrowRight } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1b1b1b] border border-zinc-800 rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-zinc-400 text-center mt-2">Login to your account</p>

        <form className="space-y-5 mt-8">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 bg-[#111] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-lime-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 bg-[#111] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-lime-400"
            />
          </div>

          <button className="w-full h-12 bg-lime-400 hover:bg-lime-300 rounded-xl text-black font-semibold flex items-center justify-center gap-2 transition">
            Login
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-zinc-400 mt-6">
          Don't have an account?{" "}
          <NavLink to="/" className="text-lime-400 hover:underline">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
