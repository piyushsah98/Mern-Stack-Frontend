import { api } from "../../../config/api";
import { useAllProducts } from "../hooks/useProductHooks";

export const getAllProductApi = async (search) => {
  let url = search ? `/products/search?q=${search}` : "/products?limit=200";
  try {
    let res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("error in getting all products", error);
  }
};

export const getAllCategories = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("error in getting all categories", error);
  }
};

export const getProductByCategory = async (category) => {
  try {
    let res = await api.get(`/products/category/${category}`);
    return res.data;
  } catch (error) {
    console.log("error in getting products", error);
  }
};
