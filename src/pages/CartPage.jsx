import { Link, useOutletContext } from "react-router";
import { CartItem } from "../components/CartItem";
import "./CartPage.css";

export function CartPage() {
  const { cartItems, updateCartQuantity, removeFromCart } = useOutletContext();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function handleCheckout() {
    window.alert(
      "Payment successful! Just kidding — this is a demo store. Your wallet is safe.",
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-hero">
        <div className="cart-hero-content">
          <p className="cart-eyebrow">Your selection</p>
          <h1>Your cart</h1>

          <p>
            Review your products, adjust their quantities, or remove anything
            you have changed your mind about.
          </p>
        </div>

        <div className="cart-overview">
          <strong>{totalQuantity}</strong>
          <span>{totalQuantity === 1 ? "item" : "items"} in your cart</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven&apos;t added anything yet.</p>

          <Link className="continue-shopping" to="/shop">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
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

          <aside className="cart-summary">
            <h2>Order summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              className="checkout-button"
              type="button"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
