import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { Auth } from "../contexts/AuthContext";

const RegisterPage = () => {
  const { registeredUsers, setRegisteredUsers } = useContext(Auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sumbitForm = (data) => {
    const users = [...registeredUsers, data];
    setRegisteredUsers(users);
    localStorage.setItem("registered_users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users));
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1b1b1b] border border-zinc-800 rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Sign up to continue shopping
        </p>

        <form onSubmit={handleSubmit(sumbitForm)} className="space-y-5 mt-8">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Full Name"
              className="w-full h-12 bg-[#111] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-lime-400"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email Address"
              className="w-full h-12 bg-[#111] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-lime-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Password"
              className="w-full h-12 bg-[#111] border border-zinc-700 rounded-xl pl-12 pr-4 text-white outline-none focus:border-lime-400"
            />
          </div>

          <button className="w-full h-12 bg-lime-400 hover:bg-lime-300 rounded-xl text-black font-semibold flex items-center justify-center gap-2 transition">
            Register
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-zinc-400 mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-lime-400 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
