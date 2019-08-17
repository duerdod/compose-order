export function getProductsByType(products, id) {
  return products ? products.filter(product => product.productType === id) : [];
}

export function getOrderProducts(products) {
  const orderProducts = products
    ? products
        .filter(product => product.qty > 0)
        .map(p => {
          return {
            id: p.id,
            name: p.name,
            price: p.price,
            qty: p.qty
          };
        })
    : [];
  return orderProducts;
}
