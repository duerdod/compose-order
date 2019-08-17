import React from 'react';
// import styled from '@emotion/styled';
import ProductRow from '../ProductRow';
import { getProductsByType } from '../../../utils/utils';

const Breads = ({ products }) => {
  return getProductsByType(products, 2).map(product => (
    <ProductRow key={product.id} product={product} />
  ));
};

export default Breads;
