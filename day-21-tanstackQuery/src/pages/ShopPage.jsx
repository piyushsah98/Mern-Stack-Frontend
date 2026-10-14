import React, { useEffect, useState } from "react";
import { getProductDataApi } from "../api/ProductApi";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/skeleton/ProductCardSkeleton";
import FilterProduct from "../components/FilterProduct";
import { useProduct, useProductApi } from "../hooks/productHooks";

const ShopPage = () => {
  //   const [allProductsData, setAllProductsData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   const data = async () => {
  //     try {
  //       setIsLoading(true);
  //       let products = await getProductDataApi();
  //       setAllProductsData(products);
  //       console.log(products);
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     data();
  //   }, []);

  // Itna lamba Process se bachne ke liye ham use karte hai TanstackQuery to optimize the code
  let { filteredProducts, filterProducts, isLoading } = useProduct();

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl flex flex-col gap-3 mb-8">
        <span>Shop Here,</span>
        <span className="text-yellow-500/90 ml-5">your favourite items</span>
      </h1>

      <FilterProduct filterProducts={filterProducts} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => {
              return <ProductCardSkeleton key={index} />;
            })
          : filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </div>
    </div>
  );
};

export default ShopPage;
