import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";

const ProductsCard = ({ product, isInCart }) => {
  const { setCartItems, incrementCartItem, decreaseCartItem } = useContext(MyShop);
  return (
    <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      {/* Product Image */}
      <div className="h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
          {product.category.name}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-xl font-bold text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-5 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>


          {isInCart ?
            <button
              className="px-5 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex gap-5 font-semibold items-center">
              <span
                onClick={() => decreaseCartItem(product.id)}
                className="text-2xl cursor-pointer">-</span>
                
              <span>{isInCart.quantity}</span>

              <span
                onClick={() => incrementCartItem(product.id) }
                className="text-2xl cursor-pointer">+</span>
            </button> :
            <button
              onClick={() => setCartItems(prev => [...prev, { ...product, quantity: 1 }])}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>
          }

        </div>
      </div>
    </div>
  );
};

export default ProductsCard;