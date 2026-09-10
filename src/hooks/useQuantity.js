import { useState } from "react";

export function useQuantity(initialQuantity = 1) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function increment() {
    setQuantity((previousQuantity) => previousQuantity + 1);
  }

  function decrement() {
    setQuantity((previousQuantity) => Math.max(1, previousQuantity - 1));
  }

  function change(nextQuantity) {
    if (!Number.isInteger(nextQuantity) || nextQuantity < 1) {
      return;
    }

    setQuantity(nextQuantity);
  }

  function reset() {
    setQuantity(initialQuantity);
  }

  return {
    quantity,
    increment,
    decrement,
    change,
    reset,
  };
}
