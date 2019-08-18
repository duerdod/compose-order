import React from 'react';
import styled from '@emotion/styled';
import { OrderContext } from '../context/order-context';
import Grid from './ui/Grid';
import GridHeader from './ui/Gridheader';
import { Hotdogs, Breads, Toppings } from './Products/Steps/AllSteps';
import OrderValue from './Order/OrderValue';
import OrderButton from './Order/OrderButton';

export const AppContainer = styled.section`
  max-width: 800px;
  margin: 5rem auto;
  position: relative;
  @media screen and (max-width: 40em) {
    padding: 0.5rem;
  }
`;

const Table = () => {
  const { order, orderSum } = React.useContext(OrderContext);
  return (
    <div style={{ background: '#383838' }}>
      <Grid>
        <GridHeader type="KORVS" />
        <Hotdogs products={order} />
        <GridHeader type="BREADS" />
        <Breads products={order} />
        <GridHeader type="TOPPINGS" />
        <Toppings products={order} />
        <OrderValue />
        <OrderButton order={order} orderSum={orderSum} />
      </Grid>
    </div>
  );
};

export default Table;
