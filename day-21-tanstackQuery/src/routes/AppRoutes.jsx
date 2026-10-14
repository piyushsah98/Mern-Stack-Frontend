import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import PublicProtected from "../routes/protected/PublicProtected";
import MainProtected from "../routes/protected/MainProtected";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";

const AppRoutes = () => {
  let dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("hydration processed...");
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      return;
    }

    dispatch(addUser(currentUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <RegisterPage />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
