import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 15;

  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        console.log("all page ->", allPage);
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "loading...";


  let allProducts = data?.pages?.flatMap((val) => val.products);

  return (
    <div className="min-h-screen bg-[#111] text-white py-10 px-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>

      <div className="text-center pt-10">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            className="bg-blue-600 rounded-xl px-3 py-2"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Infinite;
