import React from 'react';
import styled from '@emotion/styled';

const PriceContainer = styled.div`
padding: 1rem 0.3rem;
`;

const Price = ({ product }) => {
  return (
    <PriceContainer className="price-container">
      <span>{product.price} SEK</span>
    </PriceContainer>
  );
};

export default Price;
