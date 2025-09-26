import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [userProgres, setUserProgress] = useState("");

  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };

  const showCheckout = () => {
    setUserProgress("checkout");
  };

  const hideCheckout = () => {
    setUserProgress("");
  };

  const userProgressContextValue = {
    progress: userProgres,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressContextValue}>
      {children}
    </UserProgressContext.Provider>
  );
};
