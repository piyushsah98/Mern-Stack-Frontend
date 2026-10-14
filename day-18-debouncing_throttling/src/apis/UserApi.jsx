import axios from "axios";

export const ProductsData = async () => {
  console.log('api wala function chala');
  
  let res = await axios.get('https://dummyjson.com/products');
  console.log(res.data.products)
}