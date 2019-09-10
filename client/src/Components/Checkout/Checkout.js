import useLocalStorageCart from '../../hooks/useLocalStorageCart';
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CART } from '../../gql/gql';
import { Error } from '../PageStatuses';

import { ReactComponent as Plus } from '../../svg/plus.svg';
import { ReactComponent as Minus } from '../../svg/minus.svg';

import RemoveFromCart from './RemoveFromCart';

const CheckoutContainer = styled('section')`
  max-width: 1200px;
  margin: 2rem 0 2rem auto;
  display: grid;
  grid-template-areas:
    'header payment'
    'products payment';
  .payment {
    grid-area: payment;
    max-width: 400px;
    min-width: 320px;
    background: ${({ theme }) => theme.white};
    padding: 1rem 2rem;
    h3 {
      font-weight: 600;
    }
    span {
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    .cart-total-text {
      word-spacing: 3px;
      font-weight: 600;
    }
    .cart-total-sum {
    }
  }
  ${p => p.theme.md} {
    grid-template-columns: 90%;
    grid-template-areas: unset;
    justify-content: center;
    header {
      grid-area: unset;
      display: flex;
      justify-content: space-between;
    }
    .products {
      grid-area: unset;
    }
    .payment {
      grid-area: unset;
      margin-top: 1rem;
    }
  }
`;

const HeaderGrid = styled.header`
  display: grid;
  grid-template-columns: 40% 15% 20% 10%;
  grid-area: header;
  margin-bottom: 2.5rem;
  h2 {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-area: products;
  grid-template-columns: 40% 15% 20% 10%;
  grid-row-gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    &.product {
      flex-direction: column;
      align-items: start;
      position: relative;
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
    width: 55%;
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

function calcTotalCheckout(items) {
  return items.reduce((total, entry) => {
    const { product } = entry;
    total += product.price * entry.quantity;
    return total;
  }, 0);
}

const Checkout = () => {
  const { cartId } = useLocalStorageCart();
  const { data, loading, error } = useQuery(GET_CART, {
    variables: { id: cartId }
  });

  if (loading) return '';
  if (error) return <Error />;

  const { cartItem } = data.cart;
  return (
    <CheckoutContainer>
      <Header />
      <ProductGrid>
        {cartItem.map(cartItem => {
          const { product } = cartItem;
          return (
            <React.Fragment key={product.id}>
              <div className="product">
                <RemoveFromCart id={cartItem.id} cartId={cartId} />
                <img
                  src={product.image.split(',')[0]}
                  alt={product.productName}
                />
                <Link to={`/product/${product.id}`}>
                  <h3>{product.productName}</h3>
                </Link>
                <h2>{product.brand}</h2>
              </div>
              <div>
                <h3>{product.price} SEK</h3>
              </div>
              <div className="quantity">
                <Plus></Plus>
                <h3>{cartItem.quantity}</h3>
                <Minus></Minus>
              </div>
              <div>
                <h3>{product.price * cartItem.quantity} SEK</h3>
              </div>
            </React.Fragment>
          );
        })}
      </ProductGrid>
      <div className="payment">
        <h3>CHECKOUT</h3>
        <span className="cart-total-text">Cart total: </span>
        <span className="cart-total-sum">{calcTotalCheckout(cartItem)}SEK</span>
      </div>
    </CheckoutContainer>
  );
};

export default Checkout;
