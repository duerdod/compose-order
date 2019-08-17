import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../ui/Button';

const ProductWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  padding: 2.5rem;
  position: relative;
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const GoBackButton = styled(Button)`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  position: absolute;
  left: 0;
  top: -25px;
`;

const ProductInformation = styled.div`
  padding: 0;
  margin: 0;

  .names {
  }

  .product-image {
    max-width: 100%;
  }
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.serif};
  margin: 0 0 0.7rem 0;
  line-height: 1;
  @media screen and (max-width: 40em) {
    margin-top: 1rem;
  }
`;

const Subname = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.sansSerif};
  margin: 0;
  text-align: left;
`;

const Description = styled.div`
  width: 100%;
  > p {
    font-weight: 400;
    font-family: ${({ theme }) => theme.sansSerif};
    text-align: left;
    /* max-width: 80%; */
    font-weight: 400;
    text-align: justify;
    margin-top: 0.1rem;
  }
  &:before {
    content: 'description';
    display: block;
    font-family: ${({ theme }) => theme.sansSerif};
    margin: 0.5rem 0 0 0;
    font-size: 0.75rem;
    font-weight: 800;
  }
`;

const BuyButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }) => theme.black};
  margin: 1rem 0;
  transition: all 0.2s ease;
  font-weight: 600;
  font-style: normal;
  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.black};
    font-style: italic;
  }
`;

const ProductPage = ({ history, match, product }) => {
  return (
    <ProductWrapper>
      <GoBackButton onClick={history.goBack}> back </GoBackButton>
      <ProductInformation>
        <img
          src={`${process.env.PUBLIC_URL}/images/${product && product.image}`}
          className="product-image"
          alt=""
        />
      </ProductInformation>
      <ProductInformation>
        <div className="product-names">
          <Name>{product.productName}</Name>
          <Subname>{product.brand}</Subname>
        </div>
        <BuyButton
          onClick={() => {
            // handleQuantityChange(product, 'increment');
            history.goBack();
          }}
        >
          BUY ME
        </BuyButton>
        <Description>
          <p>{product.description}</p>
        </Description>
      </ProductInformation>
    </ProductWrapper>
  );
};

export default ProductPage;
