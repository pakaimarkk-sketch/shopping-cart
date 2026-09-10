import { Link } from "react-router";
import "./HomePage.css";

export function HomePage() {
  return (
    <section className="home-page">
      <div className="home-content">
        <p className="home-eyebrow">Simple shopping, made easy</p>

        <h1>Find something you'll love</h1>

        <p className="home-description">
          Browse our collection of products and add your cart in just a few
          clicks.
        </p>

        <Link className="shop-link" to="/shop">
          Browse products
        </Link>
      </div>
    </section>
  );
}
