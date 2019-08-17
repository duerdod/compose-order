import React, { createContext } from 'react';
import useOrderReducer from '../hooks/useOrderReducer';

const OrderContext2 = createContext();

function OrderContextProvider({ children }) {
  const { order, orderSum, dispatch, setOrderSum } = useOrderReducer();

  return (
    <OrderContext2.Provider value={{ order, orderSum, dispatch, setOrderSum }}>
      {children}
    </OrderContext2.Provider>
  );
}

export { OrderContextProvider, OrderContext2 };
