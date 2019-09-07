import React from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import { PLACE_ORDER } from '../../gql/gql';

const ButtonContainer = styled.div`
  grid-column: span 3;
  background: ${({ theme }) => theme.white};
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  padding: 1rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  font-family: ${({ theme }) => theme.sansSerif}, sans-serif;
  font-weight: 900;

  &:hover {
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white};
  }
`;

function ordering(order) {
  const productsToOrder = order
    .filter(product => product.count !== 0)
    .map(({ id, productName, brand, productType, price, count }) => ({
      id,
      productName,
      brand,
      productType,
      price,
      count
    }));
  return productsToOrder;
}

const OrderButton = ({ order, orderSum }) => (
  <ButtonContainer>
    <Button
      onClick={() => {
        ordering(order);
      }}
    >
      PLACE YO ORDER!
    </Button>
  </ButtonContainer>
);

export default OrderButton;
