import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <div className="flex-1">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/details/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
