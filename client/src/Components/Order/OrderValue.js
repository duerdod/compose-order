import React from 'react';
import styled from '@emotion/styled';

import { OrderContext } from '../../context/order-context';

const OrderValueContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 6rem;
  text-transform: uppercase;
  text-align: initial;
  background: ${({ theme }) => theme.white};
  span {
    font-weight: 900;
    font-family: ${({ theme }) => theme.sansSerif}, sans-serif;
  }
  @media screen and (max-width: 40em) {
    padding: 0 2rem;
  }
`;

const Total = styled.div`
  padding: 12px;
  font-family: sans-serif;
`;

const OrderValue = () => {
  const { orderSum } = React.useContext(OrderContext);
  return (
    <OrderValueContainer>
      <Total>
        <span> Total:</span>
      </Total>
      <Total>
        <span>{orderSum} SEK</span>
      </Total>
    </OrderValueContainer>
  );
};

export default OrderValue;
