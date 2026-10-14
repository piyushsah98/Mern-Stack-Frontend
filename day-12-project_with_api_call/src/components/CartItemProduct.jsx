import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";

const CartItemProduct = ({ product }) => {
  const {
    cartItems,
    setCartItems,
    incrementCartItem,
    decreaseCartItem
  } = useContext(MyShop);


  const removeItem = (id) => {
    setCartItems((prev) => {
      return prev.filter((val) => val.id !== id)
    })
  }
  return (
    <div className="bg-[#1E293B] rounded-xl p-5 flex gap-6 mb-5 shadow-lg">
      {/* Image */}
      <div className="w-36 h-36 bg-white rounded-lg overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-400">
            {product.category.name}
          </p>

          <h2 className="text-xl font-semibold mt-1">
            {product.title}
          </h2>

          <p className="text-gray-400 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-5">
          {/* Price */}
          <span className="text-2xl font-bold text-green-400">
            ${product.price}
          </span>

          {/* Quantity Controls */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => decreaseCartItem(product.id)}
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-xl">
              -
            </button>
            <span className="text-xl font-semibold">
              {product.quantity}
            </span>

            <button
              onClick={() => incrementCartItem(product.id)}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl">
              +
            </button>
          </div>

          {/* Remove Button */}
          <button 
          onClick={() => removeItem(product.id)}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg">
            Remove   
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemProduct;