import { createContext, useState } from "react";

export const Home = createContext();

export const HomeContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  return (
    <Home.Provider
      value={{
        users,
        setUsers,
        isLoading,
        setIsLoading,
        products,
        setProducts,
      }}
    >
      {children}
    </Home.Provider>
  );
};
