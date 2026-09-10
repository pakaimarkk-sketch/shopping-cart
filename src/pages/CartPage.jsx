import { useOutletContext } from "react-router";
import { CartItem } from "../components/CartItem";
import "./CartPage.css";

export function CartPage() {
  const { cartItems, updateCartQuantity, removeFromCart } = useOutletContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <h1>Your cart</h1>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Your cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateCartQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </section>
  );
}
