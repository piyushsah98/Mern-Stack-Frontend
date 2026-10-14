import React from "react";
import {
  useAllProducts,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  let { data, isPending, error, search, setSearch } = useAllProducts();
  let {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) return <h1>Products Loading...</h1>;

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-cyan-700">Shop Now</h1>
      <Filter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productByCategory?.products.length
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
