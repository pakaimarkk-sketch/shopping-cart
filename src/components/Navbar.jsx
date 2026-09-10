import { Link, NavLink } from "react-router";

export function Navbar({ cartCount }) {
  return (
    <header className="header">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          Northstar
        </Link>

        <nav className="navigation">
          <NavLink
            to="/"
            end
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
      </div>
    </header>
  );
}
