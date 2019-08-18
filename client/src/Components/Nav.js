import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ModalOpener from './Modal/ModalOpener';

const NavWapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > * {
    display: inline-block;
  }
`;

const Home = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-right: 12px;
`;

const Nav = () => {
  return (
    <NavWapper>
      <Link to="/">
        <Home>Order</Home>
      </Link>
      <Link to="/add">
        <Home>Add product</Home>
      </Link>
      <ModalOpener />
    </NavWapper>
  );
};

export default Nav;
