import { NavLink } from "react-router";

export function Navbar({ cartCount }) {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </NavLink>
      </nav>
    </header>
  );
}
