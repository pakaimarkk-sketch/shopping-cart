export function QuantityControl({
  quantity,
  onIncrement,
  onDecrement,
  onChange,
}) {
  return (
    <div className="quantity-control">
      <button type="button" onClick={onDecrement}>
        −
      </button>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label="Quantity"
      />

      <button type="button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}
