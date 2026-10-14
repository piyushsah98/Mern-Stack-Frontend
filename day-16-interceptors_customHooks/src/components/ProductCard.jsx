import React from "react";
import { NavLink } from "react-router";
import { Heart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <NavLink
      to={`/shop/${product.id}`}
      className="group bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-500">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-50">
          <Heart
            size={18}
            className="text-zinc-600 hover:text-red-500 transition"
          />
        </button>

        <span className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Star size={13} fill="#facc15" stroke="#facc15" />
          {product.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-zinc-200 truncate">
          {product.brand}
        </h2>

        <p className="text-sm text-zinc-200 line-clamp-2 h-10">
          {product.title}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold">
            ₹{product.price}
          </span>

          <span className="text-sm text-zinc-400 line-through">
            ₹
            {Math.round(
              product.price +
                (product.price * product.discountPercentage) / 100
            )}
          </span>

          <span className="text-sm text-orange-500 font-semibold">
            ({product.discountPercentage}% OFF)
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;