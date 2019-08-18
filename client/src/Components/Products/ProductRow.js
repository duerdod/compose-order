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
    display: flex;
    align-items: center;
    > * {
      padding: 1rem 0.3rem;
    }
  }
  @media screen and (max-width: 40em) {
    .name-container {
      grid-column: span 3;
    }

    .qty-container {
      grid-column: span 2;
      margin-bottom: 5px;
    }
    .price-container {
      grid-column: span 1;
      margin-bottom: 5px;
    }
  }
`;

const ProductRow = ({ product, className }) => {
  return (
    <Row className={className}>
      <Name product={product} />
      <Qty product={product} />
      <Price product={product} />
    </Row>
  );
};

export default ProductRow;
