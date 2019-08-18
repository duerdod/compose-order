import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as HotDog } from '../svg/hot-dog.svg';
import { trimError } from '../utils/utils';

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
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;

const NotFound = () => (
  <FullPage>
    <div>
      <h1>Not found.</h1>
      <HotDog />
    </div>
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
    <div>
      <h1>Something went terribly wrong. :(</h1>
      <HotDog />
    </div>
  </FullPage>
);

const Message = styled.p`
  font-size: 0.85;
  color: #eb7070;
`;

const ErrorMessage = ({ error }) => <Message>{trimError(error)}</Message>;

export { NotFound, Loading, Error, ErrorMessage };
