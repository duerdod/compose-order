export function getProductsByType(products, id) {
  return products ? products.filter(product => product.productType === id) : [];
}

export function trimError(message) {
  const i = message.indexOf(':');
  if (!i) return message;
  const trimmed = message.slice(i + 2);
  return trimmed;
}
