import { useQuantity } from "../hooks/useQuantity";
import { QuantityControl } from "./QuantityControl";

export function ProductCard({ item, onAddToCart }) {
  const { quantity, increment, decrement, change, reset } = useQuantity();

  function handleAddToCart() {
    onAddToCart(item, quantity);
    reset();
  }

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="product-card-content">
        <h2>{item.name}</h2>
        <p className="product-price">${item.price.toFixed(2)}</p>

        <QuantityControl
          quantity={quantity}
          onIncrement={increment}
          onDecrement={decrement}
          onChange={change}
        />

        <button className="add-to-cart" type="button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </article>
  );
}
