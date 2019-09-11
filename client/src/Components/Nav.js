import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import useLocalStorageCart from '../hooks/useLocalStorageCart';
import ModalOpener from './Modal/ModalOpener';

const NavWapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  > * {
    display: inline-block;
  }
`;

const LinkTo = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-right: 12px;
`;

const Nav = ({ toggleModalOpen, isModalOpen }) => {
  const { cartId } = useLocalStorageCart();
  return (
    <NavWapper>
      <Link to="/">
        <LinkTo>Order</LinkTo>
      </Link>
      <Link to="/add">
        <LinkTo>Add product</LinkTo>
      </Link>
      {cartId ? (
        <Link to="/checkout">
          <LinkTo style={{ fontWeight: '600' }}>Checkout</LinkTo>
        </Link>
      ) : null}
      <ModalOpener
        toggleModalOpen={toggleModalOpen}
        isModalOpen={isModalOpen}
      />
    </NavWapper>
  );
};

export default Nav;
