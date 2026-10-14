import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group w-full max-w-sm bg-slate-300 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 text-black">
      
      {/* Image */}
      <div className="h-72 bg-gray-100 overflow-hidden ">
        <img
        onClick={() => navigate(`/details/${product.id}`)}
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <span className="text-xs uppercase tracking-widest text-gray-500">
          {product.category}
        </span>

        <h2 className="text-xl font-semibold mt-2 line-clamp-2 h-14">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-3 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <h3 className="text-3xl font-bold text-slate-900">
            ${product.price}
          </h3>

          <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="text-sm font-medium">
              {product.rating.rate}
            </span>
          </div>
        </div>

        <button className="w-full mt-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-700 transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;