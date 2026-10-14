import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [scrollY, setScrollY] = useState(null);

  let throttle = false;

  const getProductsData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProductsData(res.data.products);
  };

  const filteredProducts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    if (!query) return productsData;

    return productsData.filter((val) =>
      val.title.toLowerCase().includes(query),
    );
  }, [productsData, debouncedSearch]);

  // Debounce - Wait 700ms before applying the search text.
  useEffect(() => {
    if (!searchData.trim()) {
      setDebouncedSearch("");
      return;
    }

    const timeout = setTimeout(() => {
      setDebouncedSearch(searchData);
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchData]);

  // Throtling
  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;

      throttle = true;
      console.log("scroll triggered...");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="bg-[#111] min-h-screen w-full text-zinc-400 p-5">
      <h1 className="mb-2">Products Data</h1>
      <input
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        type="text"
        placeholder="search"
        className="border border-zinc-300 px-3 py-1 mb-5"
      />
      {filteredProducts.map((val) => {
        return (
          <h1 key={val.id} className="text-zinc-200 mb-2  ">
            {val.title}
          </h1>
        );
      })}
    </div>
  );
};

export default App;
