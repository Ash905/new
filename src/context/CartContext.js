import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const CartContext = createContext();

// 2. Create a provider component that will wrap your application
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // If item already exists, just increase its quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Otherwise, add the new item with a quantity of 1
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
    alert(`${product.name} has been added to your bag!`);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to update the quantity of an item
  const updateQuantity = (id, qty) => {
    if (qty < 1) {
      removeFromCart(id); // Remove item if quantity is less than 1
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };
  
  // Function to calculate the total price
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
  };

  // Provide the state and functions to all child components
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Create a custom hook for easy access to the context
export const useCart = () => {
  return useContext(CartContext);
};