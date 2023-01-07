import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logout: () => {},
  login: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    logout: logoutHandler,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
