import React from "react";
import { getCategory } from "../api/ProductApi";
import { useQuery } from "@tanstack/react-query";

const FilterProduct = ({ filterProducts }) => {
  let { isPending, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
    staleTime: 500,
  });

  return (
    <div className="flex items-center px-5 py-3 rounded border border-zinc-600">
      <input
        onChange={(e) => filterProducts(e.target.value)}
        type="text"
        placeholder="search products..."
        className="bg-transparent border-none focus:outline-none w-full"
      />
      <select className="px-4 focus:outline-none border border-zinc-600 py-1 rounded-md">
        <option value="all" className="bg-[#111]">
          All
        </option>
        {isPending
          ? ""
          : data.map((category) => {
              return (
                <option
                  key={category.name}
                  className="bg-[#111]"
                  value={category.slug}
                >
                  {category.name}
                </option>
              );
            })}
      </select>
    </div>
  );
};

export default FilterProduct;
