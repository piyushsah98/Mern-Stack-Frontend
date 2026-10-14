import React from "react";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { loginUserAction } from "../state/authAction";

const useAuth = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let dispatch = useDispatch();

  const registerForm = (data) => {
    console.log("register submit..");
  };

  const loginForm = async (data) => {
    // Api call
    dispatch(loginUserAction(data));
    try {
    } catch (error) {
      console.log("form api error", error);
    }
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};

export default useAuth;
