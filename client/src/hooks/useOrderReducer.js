import React, { useReducer, useState, useContext } from 'react';
import { ProductsContext } from '../context/products-context';

const reducer = (state, action) => {
  const { product } = action;

  switch (action.type) {
    case 'INIT':
      const products = action.products.map(product => ({
        ...product,
        count: 0
      }));
      return products;

    case 'INCREMENT':
      // Is this really the best idea? But boy was it fun!
      const incrementProduct = state.map(stateProduct => {
        if (stateProduct.id === product.id) {
          stateProduct.count = stateProduct.count + 1;
        }
        return stateProduct;
      });
      return incrementProduct;

    case 'DECREMENT':
      const decrementProduct = state.map(stateProduct => {
        if (stateProduct.id === product.id) {
          if (product.count < 1) {
            stateProduct.count = 0;
          } else {
            stateProduct.count = stateProduct.count - 1;
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
      // productEntry is each index in order state
      const { count, price } = productEntry;
      sum += price * count;
      return sum;
    }, 0);
    setOrderSum(orderValue);
  }, [order]);

  return { order, orderSum, dispatch, setOrderSum };
}

export default useOrderReducer;
