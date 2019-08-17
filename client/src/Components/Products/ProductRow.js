import React from 'react';
import styled from '@emotion/styled';

import Name from './Name';
import Qty from '../Order/Qty';
import Price from './Price';

const Row = styled.div`
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
  > * {
    background: ${({ theme }) => theme.white};
    padding: 1rem 0.3rem;
    display: flex;
    align-items: center;
  }
`;

const ProductRow = ({ product }) => {
  return (
    <Row>
      <Name product={product} />
      <Qty product={product} />
      <Price product={product} />
    </Row>
  );
};

export default ProductRow;
