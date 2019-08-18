import React from 'react';
import ProductRow from '../ProductRow';
import { getProductsByType } from '../../../utils/utils';

const Hotdogs = ({ products }) => {
  return getProductsByType(products, 1).map(product => (
    <ProductRow className="korvs" key={product.id} product={product} />
  ));
};

export default Hotdogs;
