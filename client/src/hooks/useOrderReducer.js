import React, { useReducer, useState, useContext } from 'react';
import { ProductsContext } from '../context/products-context';

const reducer = (state, action) => {
  const { product } = action;

  switch (action.type) {
    case 'INIT':
      // OK...
      // so filter for cart items.
      const cartItems = action.products
        .filter(c => c.__typename === 'CartItem')
        .map(c => ({ ...c.product, quantity: c.quantity }));

      // Filter for non cart items, ie. products from db
      const nonCartItems = action.products.filter(
        p => p.__typename === 'Product'
      );

      // After merge, there are duplicates. Remove duplicates.
      const filterOutDuplicates = [...cartItems, ...nonCartItems].reduce(
        (uniques, product) => {
          // If there cartitem id has an index
          return uniques.findIndex(cartItem => cartItem.id === product.id) < 0
            ? // Spread the excisting uniques and and the current reduced product aswell.
              [...uniques, product]
            : // Otherwise return the unique array
              uniques;
        },
        []
      );

      // Return products suitable for order table.
      const products = filterOutDuplicates.map(product => ({
        ...product,
        quantity: product.quantity > 0 ? product.quantity : 0
      }));

      return products;

    case 'INCREMENT':
      const incrementProduct = state.map(stateProduct => {
        if (stateProduct.id === product.id) {
          stateProduct.quantity = stateProduct.quantity + 1;
        }
        return stateProduct;
      });
      return incrementProduct;

    case 'DECREMENT':
      const decrementProduct = state.map(stateProduct => {
        if (stateProduct.id === product.id) {
          if (product.quantity < 1) {
            stateProduct.quantity = 0;
          } else {
            stateProduct.quantity = stateProduct.quantity - 1;
          }
        }
        return stateProduct;
      });
      return decrementProduct;

    default:
      return state;
  }
};

function useOrderReducer() {
  const [orderSum, setOrderSum] = useState(0);
  const [order, dispatch] = useReducer(reducer, []);
  const { products } = useContext(ProductsContext);

  React.useEffect(() => {
    dispatch({ products, type: 'INIT' });
  }, [products]);

  React.useEffect(() => {
    const orderValue = order.reduce((sum, productEntry) => {
      const { quantity, price } = productEntry;
      sum += price * quantity;
      return sum;
    }, 0);
    setOrderSum(orderValue);
  }, [order]);

  return { order, orderSum, dispatch, setOrderSum };
}

export default useOrderReducer;
