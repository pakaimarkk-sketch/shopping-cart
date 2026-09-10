import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsApi";
import { ProductCard } from "../components/ProductCard";
import { useOutletContext } from "react-router";
import "./ShopPage.css";

export function ShopPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useOutletContext();

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }

    loadProducts();
  }, []);

  return (
    <section className="shop-page">
      <div className="shop-hero">
        <div className="shop-hero-content">
          <p className="shop-eyebrow">Our collection</p>

          <h1>Discover something new.</h1>

          <p>
            Browse our collection and choose exactly what belongs in your cart.
          </p>
        </div>

        <div className="product-count">
          <strong>{products.length}</strong>
          <span>products available</span>
        </div>
      </div>

      <div className="product-section-heading">
        <h2>All products</h2>
        <p>Select a quantity and add your favorites to the cart.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            item={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
