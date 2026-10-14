import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const isUserLoggedIn = JSON.parse(localStorage.getItem("currentUser"));
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );

  return (
    <Auth.Provider
      value={{
        isUserLoggedIn,
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
