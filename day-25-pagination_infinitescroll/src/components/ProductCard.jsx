import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl">
      {/* Product Image */}
      <div className="overflow-hidden h-60 bg-zinc-950 flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-[85%] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold text-white">
            {product.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">${product.price}</span>

          <button className="rounded-lg bg-cyan-700 text-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
