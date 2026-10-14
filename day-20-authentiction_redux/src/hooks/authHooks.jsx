import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  let { user } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/login");
    reset();
  };

  const loginForm = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    dispatch(addUser(user));
    navigate("/main");
    toast.success("logged in");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
