import { createContext, useState } from "react";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <MyShop.Provider value={{ products, setProducts }}>
      {children}
    </MyShop.Provider>
  );
};
