import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as HotDog } from '../svg/hot-dog2.svg';
import { trimError } from '../utils/utils';

const FullPage = styled.div`
  width: 90vw;
  height: 90vh;
  z-index: 999;
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-family: 'Source Sans Pro';
  }
  @media screen and (max-width: 40em) {
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
      <h1>Loading...</h1>
      <HotDog />
    </div>
  </FullPage>
);
const Error = () => (
  <FullPage>
    <h1>Something went terribly wrong. :(</h1>
    <div>
      <HotDog />
    </div>
  </FullPage>
);

const SmallState = () => <div />;

const Message = styled.p`
  font-size: 0.85;
  color: #eb7070;
`;

const ErrorMessage = ({ error }) => <Message>{trimError(error)}</Message>;

export { NotFound, Loading, Error, ErrorMessage, SmallState };
