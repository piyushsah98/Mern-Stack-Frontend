import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("Login Succesfully");
      return res.data;
    } catch (error) {
      toast.error("Login Failed");
      return thunkApi.rejectWithValue("login failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/hydrate",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");

    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
        },
      });
      return res.data;
    } catch (error) {
      toast.error("unauthorized");
      return thunkApi.rejectWithValue("unauthorized");
    }
  },
);
