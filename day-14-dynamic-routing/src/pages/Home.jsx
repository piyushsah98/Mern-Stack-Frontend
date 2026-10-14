import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { MyShop } from "../contexts/MyContext";
import { useNavigate } from "react-router";

const Home = () => {
  const { products, setProducts } = useContext(MyShop);
  
  const getProducts = async () => {
    const res = await axios("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Home;
