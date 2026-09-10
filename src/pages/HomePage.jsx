import { Link } from "react-router";
import "./HomePage.css";

export function HomePage() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-content">
          <p className="home-eyebrow">Simple shopping, made easy</p>

          <h1>Everything you need, all in one place.</h1>

          <p className="home-description">
            Browse our collection, choose your favorites, and build your cart in
            just a few clicks.
          </p>

          <Link className="shop-link" to="/shop">
            Browse products
          </Link>
        </div>

        <div className="home-showcase">
          <p className="showcase-label">Explore the collection</p>

          <h2>Find your next favorite.</h2>

          <div className="showcase-categories">
            <div>
              <span>01</span>
              <p>Fashion</p>
            </div>

            <div>
              <span>02</span>
              <p>Jewelry</p>
            </div>

            <div>
              <span>03</span>
              <p>Electronics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-features">
        <article>
          <span>01</span>
          <h2>Browse</h2>
          <p>Explore a varied collection of products.</p>
        </article>

        <article>
          <span>02</span>
          <h2>Choose</h2>
          <p>Select exactly how many items you want.</p>
        </article>

        <article>
          <span>03</span>
          <h2>Checkout</h2>
          <p>Complete your completely fictional purchase.</p>
        </article>
      </div>
    </section>
  );
}
