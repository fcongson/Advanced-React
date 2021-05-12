import React, { createContext, useContext, useState } from "react";

type CartContext = {
  cartOpen?: boolean;
  toggleCart?: () => void;
  closeCart?: () => void;
  openCart?: () => void;
};

const LocalStateContext = createContext({});
const LocalStateProvider = LocalStateContext.Provider;

export const CartStateProvider: React.FunctionComponent = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}
    >
      {children}
    </LocalStateProvider>
  );
};

export const useCart = (): CartContext => {
  const all = useContext<CartContext>(LocalStateContext);
  return all;
};
