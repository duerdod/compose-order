import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as HotDog } from '../svg/hot-dog.svg';

const FullPage = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  background: ${({ theme }) => theme.white};
  padding: 4rem;
  > div {
    text-align: center;
    svg {
      @keyframes rotate {
        0% {
          transform: rotate(45deg);
        }
        25% {
          transform: rotate(75deg);
        }
        50% {
          transform: rotate(25deg);
        }
        75% {
          transform: rotate(75deg);
        }
        100% {
          transform: rotate(45deg);
        }
      }
      transform: rotate(45deg);
      animation: rotate 2s linear infinite reverse;
    }
  }
`;

const NotFound = () => (
  <FullPage>
    <h1>Not found</h1>
  </FullPage>
);
const Loading = () => (
  <FullPage>
    <div>
      <HotDog />
    </div>
  </FullPage>
);
const Error = () => (
  <FullPage>
    <h1>Error :(</h1>
  </FullPage>
);

export { NotFound, Loading, Error };
