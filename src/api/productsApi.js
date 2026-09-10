export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=20");

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const products = await response.json();

  const normalizedProducts = products.map(normalizeProduct);

  return normalizedProducts;
}

function normalizeProduct(product) {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.image,
  };
}
