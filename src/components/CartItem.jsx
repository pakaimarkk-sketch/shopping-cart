import { QuantityControl } from "./QuantityControl";

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  const subtotal = item.price * item.quantity;

  return (
    <article className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-content">
        <h2>{item.name}</h2>

        <p>Unit price: ${item.price.toFixed(2)}</p>

        <QuantityControl
          quantity={item.quantity}
          onIncrement={() => onUpdateQuantity(item.id, item.quantity + 1)}
          onDecrement={() => onUpdateQuantity(item.id, item.quantity - 1)}
          onChange={(nextQuantity) => onUpdateQuantity(item.id, nextQuantity)}
        />

        <p>Subtotal: ${subtotal.toFixed(2)}</p>

        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}
