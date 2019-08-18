import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ProductName = styled.div`
  cursor: pointer;
  transition: all 0.2s ease;
  > a {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: ${({ theme }) => theme.sansSerif};
    transition: all 0.2s ease;
    text-decoration: none;
  }

  &:hover {
    background: ${({ theme }) => theme.black};
    a {
      color: ${({ theme }) => theme.white};
      font-weight: 600;
    }
    svg {
      transform: scale(1.3);
    }
    polyline {
      color: ${({ theme }) => theme.white};
    }
  }
`;

const Name = ({ product }) => (
  <ProductName className="name-container">
    <Link
      to={{
        pathname: `/product/${product.id}`
      }}
    >
      {product.productName}
    </Link>
  </ProductName>
);

export default Name;
