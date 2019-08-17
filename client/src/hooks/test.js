import { useReducer, useEffect, useState } from 'react';

const reducer = (state, action) => {
  // Is product already in order state
  const productInState = state.find(
    ({ product }) => product.id === action.product.id
  );
  // Otherwise filter on products in order state
  // where products is not the one we're incrementing / decrementing.
  const newState = state.filter(
    ({ product }) => product.id !== action.product.id
  );

  switch (action.type) {
    case 'INCREMENT':
      if (!productInState) {
        // If not, add it.
        return [...state, { product: action.product, count: 1 }];
      }

      // Put back "old" products and increment the added
      return [
        ...newState,
        { product: action.product, count: productInState.count + 1 }
      ];

    case 'DECREMENT':
      if (!productInState) {
        return state;
      }

      if (productInState.count < 2) {
        return [...newState];
      }

      return [
        ...newState,
        { product: action.product, count: productInState.count - 1 }
      ];

    default:
      return state;
  }
};

function useOrderReducer() {
  const [order, dispatch] = useReducer(reducer, []);
  const [orderSum, setOrderSum] = useState(0);

  useEffect(() => {
    const orderValue = order.reduce((sum, productEntry) => {
      // productEntry is each index in order state
      const { count } = productEntry;
      const { price } = productEntry.product;
      sum += price * count;
      return sum;
    }, 0);
    setOrderSum(orderValue);
  }, [order]);

  return { order, orderSum, dispatch, setOrderSum };
}

export default useOrderReducer;
