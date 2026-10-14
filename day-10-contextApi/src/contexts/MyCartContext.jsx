import { useState } from "react";
import { createContext } from "react";

// Consumer - Anyone can access value through useContext(MyShop)
export let MyShop = createContext();

// Provider that provides value to its children
// whatever component we wrap with ContextProvider the data will be shared among with the children(App) and its customer(App children)
export const ContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    return <MyShop.Provider value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems
    }}>{children}</MyShop.Provider>
}