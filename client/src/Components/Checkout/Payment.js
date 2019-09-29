import React from 'react';
// import styled from '@emotion/styled';

function calcTotalCheckout(items = []) {
  return items.reduce((total, entry) => {
    const { product } = entry;
    total += product.price * entry.quantity;
    return total;
  }, 0);
}

const Payment = ({ cartItem }) => {
  return (
    <>
      <h3>CHECKOUT</h3>
      <span className="cart-total-text">Cart total: </span>
      <span className="cart-total-sum">{calcTotalCheckout(cartItem)}SEK</span>
    </>
  );
};

export default Payment;
