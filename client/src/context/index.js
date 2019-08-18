import React from 'react';
import { ProductsProvider } from './products-context';
import { OrderProvider } from './order-context';

const AppProvider = props => (
  <ProductsProvider>
    <OrderProvider>{props.children}</OrderProvider>
  </ProductsProvider>
);

export default AppProvider;
