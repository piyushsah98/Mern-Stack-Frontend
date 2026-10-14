import { createContext, useState } from "react";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incrementCartItem = (id) => {
    setCartItems((prev) => { // prev is the array of total cart items 
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val
      })
    })
  }

  const decreaseCartItem = (id) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) => {  // pura cart item update hoke updatedCart me return ho jaega
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  return <MyShop.Provider value={{
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    incrementCartItem,
    decreaseCartItem
  }}>{children}</MyShop.Provider>
}