import React, { createContext } from 'react';
import useOrderReducer from '../hooks/useOrderReducer';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const { order, orderSum, dispatch, setOrderSum } = useOrderReducer();

  return (
    <OrderContext.Provider value={{ order, orderSum, dispatch, setOrderSum }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContextProvider, OrderContext };
