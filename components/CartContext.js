// /components/CartContext.js

import { createContext, useContext, useState } from 'react';

// Create the cart context
const CartContext = createContext();

// CartProvider component to wrap around the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context easily
export const useCart = () => useContext(CartContext);
