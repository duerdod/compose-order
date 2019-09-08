import React from 'react';
import styled from '@emotion/styled';
import useProductsToCart from '../../hooks/useProductsToCart';

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

function ordering(order, addProductsToCart) {
  const productsToOrder = order
    .filter(product => product.quantity > 0)
    .map(({ id, price, quantity }) => ({
      id,
      price,
      quantity
    }));
  addProductsToCart(productsToOrder).then(() => window.location.replace('/checkout'));
}

const OrderButton = ({ order }) => {
  const { addProductsToCart, loading } = useProductsToCart();
  return (
    <ButtonContainer>
      <Button
        disabled={loading}
        onClick={() => {
          ordering(order, addProductsToCart)
        }}
      >
        PLACE YO ORDER!
      </Button>
    </ButtonContainer>
  );
};

export default OrderButton;
