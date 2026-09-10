import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsApi";
import { ProductCard } from "../components/ProductCard";
import { useOutletContext } from "react-router";

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
      <h1>Products</h1>

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
