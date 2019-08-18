import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ProductName = styled.div`
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 1rem 0.3rem;
  > a {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    font-family: ${({ theme }) => theme.sansSerif};
    transition: all 0.2s ease;
    text-decoration: none;
  }

  &:hover {
    background: ${({ theme }) => theme.black};
    a {
      font-weight: 600;
    }
    a,
    p {
      color: ${({ theme }) => theme.white};
    }
    svg {
      transform: scale(1.3);
    }
    polyline {
      color: ${({ theme }) => theme.white};
    }
  }
`;

const Brand = styled.p`
  font-size: 0.65rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
`;

const Name = ({ product }) => (
  <ProductName className="name-container">
    <Link
      to={{
        pathname: `/product/${product.id}`
      }}
    >
      {product.productName}
      <Brand>{product.brand}</Brand>
    </Link>
  </ProductName>
);

export default Name;
