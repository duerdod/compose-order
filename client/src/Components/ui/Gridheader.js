import React from 'react';
import styled from '@emotion/styled';

const GridHeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;

  h2 {
    background: ${({ theme }) => theme.white};
    padding: 1rem 0.5rem;
    font-family: ${({ theme }) => theme.serif}, serif;
  }
`;

const Gridheader = ({ type, step }) => (
  <GridHeaderContainer>
    <h2>{type}</h2>
    <h2>QTY</h2>
    <h2>PRICE</h2>
  </GridHeaderContainer>
);

export default Gridheader;
