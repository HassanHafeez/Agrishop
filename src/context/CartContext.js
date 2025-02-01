// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems; // Product already in the cart, return the previous cart
      }
      return [...prevItems, product];
    });
  };

 const removeFromCart = (productId) => {
   setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
 }


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};