import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  text-align: center;
  margin: 1rem 0;
  > a {
    font-size: 3.5rem;
    letter-spacing: 5px;
    line-height: 1;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.serif}, serif;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/">Compose yo custom korv</Link>
  </HeaderWrapper>
);

export default Header;
