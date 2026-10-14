import React from "react";
import { useContext } from "react";
import { MyShop } from "../contexts/MyCartContext";

const Cart = () => {
  const {cartItems} = useContext(MyShop)
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Products */}
          <div className="lg:w-2/3 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border rounded-xl shadow-md p-5 bg-white"
              >
                {/* Image */}
                <div className="w-40 h-40 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>

                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {item.description}
                  </p>

                  <p className="mt-3 text-gray-500 capitalize">
                    {item.category}
                  </p>

                  <div className="flex justify-between items-center mt-5">
                    <span className="text-2xl font-bold text-green-600">
                      ${item.price}
                    </span>

                    <span className="text-yellow-500 font-medium">
                      ⭐ {item.rating.rate} ({item.rating.count})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Checkout */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-lg rounded-xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-green-600">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;