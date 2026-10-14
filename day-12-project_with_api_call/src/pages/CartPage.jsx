import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";
import CartItemProduct from "../components/CartItemProduct";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(MyShop);

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.quantity * item.price),
    0
  );

  return (
    <div className="flex gap-8 p-8">
      {/* Left Side */}
      <div className="w-[70%]">
        <h1 className="text-3xl font-bold mb-6">
          Shopping Cart ({cartItems.length})
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-400 text-xl mt-20">
            Your cart is empty.
          </div>
        ) : (
          cartItems.map((product) => (
            <CartItemProduct
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>

      {/* Right Side */}
      <div className="w-[30%]">
        <div className="bg-[#1E293B] rounded-xl p-6 sticky top-5">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span className="text-green-400">Free</span>
          </div>

          <hr className="my-4 border-gray-600" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;