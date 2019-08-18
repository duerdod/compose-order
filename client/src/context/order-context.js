import React, { createContext } from 'react';
import useOrderReducer from '../hooks/useOrderReducer';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const { order, orderSum, dispatch, setOrderSum } = useOrderReducer();

  return (
    <OrderContext.Provider value={{ order, orderSum, dispatch, setOrderSum }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider, OrderContext };
