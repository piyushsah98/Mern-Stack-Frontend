import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllProductApi,
  getProductByCategory,
} from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProducts = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  // console.log("search ke andar", search);

  let { data, isPending, error } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductApi(debounceSearch),
  });

  useEffect(() => {
    let interval = setTimeout(() => {
      setDebounceSearch(search);
    }, 700);

    return () => clearInterval(interval);
  }, [search]);

  return {
    data,
    isPending,
    error,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getAllCategories,
  });
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);

  let { data, isPending, error } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductByCategory(category),
  });

  return {
    data,
    isPending,
    error,
    category,
    setCategory,
  };
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
