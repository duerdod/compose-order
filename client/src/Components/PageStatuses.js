import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as HotDog } from '../svg/hot-dog2.svg';
import { trimError } from '../utils/utils';

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: ${({ theme }) => theme.white};
  position: relative;
  overflow: hidden;
  > div {
    position: absolute;
    left: 50%;
    top: 35%;
    svg {
      @keyframes rotate {
        from {
          transform: rotate(0turn);
        }
        to {
          transform: rotate(1turn);
        }
      }
      transform: rotate(45deg);
      animation: rotate 2s cubic-bezier(0.4, 2.98, 0.57, 1.3) infinite;
      path {
      }
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
