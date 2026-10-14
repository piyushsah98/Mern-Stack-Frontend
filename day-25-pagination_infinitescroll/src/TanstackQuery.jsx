import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const TanstackQuery = () => {
  let limit = 15;
  const [page, setPage] = useState(0);

  const { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts(limit, page),
    placeholderData: keepPreviousData,
  });

  if (isPending)
    return (
      <div className="h-screen w-full bg-[#111] text-white">Loading...</div>
    );
  if (isError)
    return <div className="h-screen w-full bg-[#111] text-white">Error</div>;


  let totalPages = Math.ceil(data.total / limit);

  return (
    <div className="min-h-screen bg-[#111] text-white py-10 px-20">
      <div style={{opacity: isPlaceholderData ? 0.3 : 1}} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products?.map((product) => (
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
        <p>
          {page + 1} of {totalPages}
        </p>
        <button
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 rounded-xl bg-yellow-600 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TanstackQuery;
