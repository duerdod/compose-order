import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ModalOpener from './Modal/ModalOpener';

const NavWapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  > * {
    display: inline-block;
  }
`;

const Home = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-right: 12px;
`;

const Nav = ({ toggleModalOpen, isModalOpen }) => (
  <NavWapper>
    <Link to="/">
      <Home>Order</Home>
    </Link>
    <Link to="/add">
      <Home>Add product</Home>
    </Link>
    <ModalOpener toggleModalOpen={toggleModalOpen} isModalOpen={isModalOpen} />
  </NavWapper>
);

export default Nav;
