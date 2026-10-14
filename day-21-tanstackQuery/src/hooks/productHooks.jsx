import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getProductDataApi } from "../api/ProductApi";

export const useProductApi = () => {
  const [filteredProducts, setFilteredProducts] = useState(null);

  let { isPending, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDataApi,
    staleTime: 60000,
  });

  return {
    productsData: data ?? [],
    isPending,
  };
};

export const useProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProducts = async () => {
    let data = await getProductDataApi();
    setProductsData(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };

  let filterProducts = (searchParams) => {
    let filteredData = productsData.filter((val) =>
      val.title.toLowerCase().includes(searchParams.toLowerCase()),
    );

    if (filteredData) {
      setFilteredProducts(filteredData);
    }
    console.log(filteredData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    productsData,
    setProductsData,
    isLoading,
    setIsLoading,
    filteredProducts,
    setFilteredProducts,
    filterProducts,
  };
};
