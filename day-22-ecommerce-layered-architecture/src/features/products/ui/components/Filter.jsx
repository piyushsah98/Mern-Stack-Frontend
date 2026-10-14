import { ListFilter, Search } from "lucide-react";
import { useAllCategories, useAllProducts } from "../../hooks/useProductHooks";
import { useState } from "react";

const Filter = ({ search, setSearch, category, setCategory }) => {
  const { data, isPending, error } = useAllCategories();

  if (isPending) return <h1>Categories Loading...</h1>;

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          value={search || ''}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Category */}
        <div className="relative">
          <ListFilter
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category || ''}
            className="appearance-none rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-10 pr-8 text-white outline-none transition-all focus:border-blue-500"
          >
            <option className="text-white">All Categories</option>
            {data.map((val) => {
              return (
                <option key={val.name} className="text-white" value={val.slug}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* Brand */}
        <div className="relative">
          <ListFilter
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <select className="appearance-none rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-10 pr-8 text-white outline-none transition-all focus:border-blue-500">
            <option>All Brands</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Nike</option>
            <option>Essence</option>
          </select>
        </div>

        {/* Sort */}
        <div className="relative">
          <ListFilter
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <select className="appearance-none rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-10 pr-8 text-white outline-none transition-all focus:border-blue-500">
            <option>Sort By</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
            <option>Highest Rated</option>
            <option>Lowest Rated</option>
            <option>Highest Discount</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
