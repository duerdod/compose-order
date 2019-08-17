import React from 'react';
import styled from '@emotion/styled';

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
    background: #383838;
    color: #fffbf5;
  }
`;

function ordering(order, sum) {
  // Remove with some actual functionality...
  const productsToOrder = order.filter(product => product.count !== 0);
  if (!productsToOrder.length) return;
  let orderText = `CONGRATULATIONS! You're ordering: \n\n`;
  productsToOrder.forEach(
    product =>
      (orderText += `${product.count} x ${product.productName} á ${
        product.price
      } SEK \n`)
  );
  orderText += `\nat a total price of: ${sum} SEK`;
  alert(orderText);
}

const OrderButton = ({ order, orderSum }) => (
  <ButtonContainer>
    <Button onClick={() => ordering(order, orderSum)}>PLACE YO ORDER!</Button>
  </ButtonContainer>
);

export default OrderButton;
