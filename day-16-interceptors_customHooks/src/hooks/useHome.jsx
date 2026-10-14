import React, { useContext } from "react";
import { Home } from "../contexts/HomeContext";
import { axiosInstance } from "../config/axiosInstance";

const useHome = () => {
  const { users, setUsers, isLoading, setIsLoading, products, setProducts } =
    useContext(Home);
  const getUserData = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance("/users?limit=100");
      setUsers(res.data.users);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getItemsData = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance("/products?limit=100");
      setProducts(res.data.products);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    getUserData,
    users,
    setUsers,
    isLoading,
    setIsLoading,
    getItemsData,
    products,
    setProducts,
  };
};

export default useHome;
