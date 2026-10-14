import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const App = () => {
  let limit = 15;
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
      );
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log("product api error", error);
    }
  };

  let totalPages = Math.ceil(products?.total / limit);

  useEffect(() => {
    getAllProducts();
  }, [page]);

  return (
    <div className="min-h-screen bg-[#111] text-white py-10 px-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center gap-7 items-center pt-10">
        <button
          disabled={page === 0}
          onClick={() => setPage(page + -1)}
          className="px-4 py-2 rounded-xl bg-yellow-600 cursor-pointer"
        >
          Prev
        </button>
        <p>{page + 1} of {totalPages}</p>
        <button disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 rounded-xl bg-yellow-600 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
