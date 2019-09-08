import React, { useReducer, useState, useContext } from 'react';
import { ProductsContext } from '../context/products-context';

const reducer = (state, action) => {
  const { product } = action;

  switch (action.type) {
    case 'INIT':
      const products = action.products.map(product => ({
        ...product,
        quantity: 0
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
