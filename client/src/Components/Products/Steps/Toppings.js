import React from 'react';
// import styled from '@emotion/styled';
import ProductRow from '../ProductRow';
import { getProductsByType } from '../../../utils/utils';

const Toppings = ({ products }) => {
  return getProductsByType(products, 3).map(product => (
    <ProductRow key={product.id} product={product} />
  ));
};

export default Toppings;
