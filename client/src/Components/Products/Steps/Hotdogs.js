import React from 'react';
// import styled from '@emotion/styled';
import ProductRow from '../ProductRow';
import { getProductsByType } from '../../../utils/utils';

const Hotdogs = ({ products }) => {
  return getProductsByType(products, 1).map(product => (
    <ProductRow key={product.id} product={product} />
  ));
};

export default Hotdogs;
