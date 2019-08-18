import React, { createContext } from 'react';
import { useAsync } from 'react-async';
import getProducts from '../utils/getProducts';
import { Loading, Error } from '../Components/PageStatuses';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const { data, isRejected, isPending } = useAsync({
    promiseFn: getProducts
  });
  if (isPending) {
    return <Loading />;
  }

  if (isRejected) {
    return <Error />;
  }
  const { products } = data.data;

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
