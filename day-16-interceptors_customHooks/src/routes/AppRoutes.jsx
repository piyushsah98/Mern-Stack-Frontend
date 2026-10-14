import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import UsersPage from "../pages/UsersPage";
import HomeLayout from "../layout/HomeLayout";
import useHome from "../hooks/useHome";

const AppRoutes = () => {
  const { getUserData } = useHome();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/users",
          element: <UsersPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
