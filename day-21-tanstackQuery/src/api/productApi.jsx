import axios from "axios";
import { axiosInstance } from "../config/axiosInstance";

export const getProductDataApi = async () => {
  console.log("get Products data running...");
  try {
    let res = await axiosInstance.get("/products");
    return res.data.products;
  } catch (error) {
    console.log("api error", error);
  }
};

export const getCategory = async () => {
  try {
    let category = await axiosInstance.get("/products/categories");
    return category.data;
  } catch (error) {
    console.log(error);
  }
};

const searchProducts = async () => {
  try {
    let searchedProducts = await axiosInstance.get(`/products/search?q=${search}`) 
  } catch (error) {
    
  }
}
