import React, { Suspense } from "react";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import {ProductsData} from '../apis/UserApi'

const Contact = lazy(() => import("../components/Contact")); // Lazy Loading
const About = lazy(() => import("../components/About"));

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          loader: ProductsData,
          hydrateFallbackElement: <h1>Loading Users data...</h1>,
          element: <App />,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<h1>About Page Loading...</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<h1>Contact Page is Loading...</h1>}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
