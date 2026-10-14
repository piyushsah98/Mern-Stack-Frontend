import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
import useHome from "../hooks/useHome";

const ShopPage = () => {
  const { getItemsData, products, setProducts, isLoading } =
    useHome();

  useEffect(() => {
    getItemsData();
  }, []);

  return (
    <div className="flex-1 bg-[#0f0f0f] py-10 text-white px-5">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">All Products</h1>

        <p className="mt-2">{products.length} Products Available</p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
