import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import "./global.css";
import "./app.css";

export function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function addToCart(item, quantity) {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return previousItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem,
        );
      }

      return [
        ...previousItems,
        {
          ...item,
          quantity,
        },
      ];
    });
  }

  function updateCartQuantity(id, nextQuantity) {
    if (!Number.isInteger(nextQuantity) || nextQuantity < 1) {
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: nextQuantity,
            }
          : item,
      ),
    );
  }

  function removeFromCart(id) {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id),
    );
  }

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <Outlet
          context={{ cartItems, addToCart, updateCartQuantity, removeFromCart }}
        />
      </main>

      <Footer />
    </div>
  );
}
