import useLocalStorageCart from '../../hooks/useLocalStorageCart';
import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import { GET_CART } from '../../gql/gql';
import { Error } from '../PageStatuses';

import { ReactComponent as Plus } from '../../svg/plus.svg';
import { ReactComponent as Minus } from '../../svg/minus.svg';
// import { ReactComponent as Close } from '../../svg/close.svg';

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-bottom: 2.5rem;
  h2 {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    &.product {
      flex-direction: column;
      align-items: start;
      h3 {
        font-weight: 600;
      }
    }
    &.quantity {
      h3 {
        margin: 0 0.5rem;
      }
      svg {
        width: 12px;
        height: 12px;
        cursor: pointer;
      }
    }
  }

  h3,
  h2 {
    text-transform: uppercase;
    font-size: 0.85rem;
    display: block;
  }
  img {
    margin-bottom: 6px;
    display: block;
    width: 60%;
  }
`;

const Header = () => (
  <HeaderGrid>
    <h2>Korv</h2>
    <h2>Price</h2>
    <h2>Qty</h2>
    <h2>Total</h2>
  </HeaderGrid>
);

const Checkout = () => {
  const { cartId } = useLocalStorageCart();
  const { data, loading, error } = useQuery(GET_CART, {
    variables: { id: cartId }
  });
  if (loading) return '';
  if (error) return <Error />;
  const { cartItem } = data.cart;
  console.log(cartItem);
  return (
    <div>
      <Header />
      <ProductGrid>
        {cartItem.map(cartItem => {
          const { product } = cartItem;
          return (
            <React.Fragment key={product.id}>
              <div className="product">
                <img
                  src={product.image.split(',')[0]}
                  alt={product.productName}
                />
                <h3>{product.productName}</h3>
                <h2>{product.brand}</h2>
              </div>
              <div>
                <h3>{product.price}</h3>
              </div>
              <div className="quantity">
                <Plus></Plus>
                <h3>{cartItem.quantity}</h3>
                <Minus></Minus>
              </div>
              <div>
                <h3>{product.price * cartItem.quantity}</h3>
              </div>
            </React.Fragment>
          );
        })}
      </ProductGrid>
    </div>
  );
};

export default Checkout;
