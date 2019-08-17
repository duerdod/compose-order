import React from 'react';
import styled from '@emotion/styled';

const FullPage = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
`;

const NotFound = () => (
  <FullPage>
    <h1>Not found</h1>
  </FullPage>
);
const Loading = () => (
  <FullPage>
    <h1>Spinner</h1>
  </FullPage>
);
const Error = () => (
  <FullPage>
    <h1>Error :(</h1>
  </FullPage>
);

export { NotFound, Loading, Error };
