import React from "react";
import { useContext } from "react";
import { MyShop } from "../contexts/MyCartContext";

const Card = ({product}) => {
  const {setCartItems} = useContext(MyShop)
  return (
    <div className="rounded-xl shadow-lg border p-4 bg-white hover:shadow-2xl transition duration-300">
      {/* Product Image */}
      <div className="h-60 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 relative">
        <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="text-yellow-500 font-medium">
            ⭐ {product.rating.rate}
            <span className="text-gray-500 text-sm">
              {" "}
              ({product.rating.count})
            </span>
          </div>
        </div>

        {/* Button */}
        <button 
        onClick={() => setCartItems(prev => [...prev, product])}
        className="w-full mt-5 bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-800 hover:scale-105 active:scale-95 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
