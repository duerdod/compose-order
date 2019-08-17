import React from 'react';
import styled from '@emotion/styled';

export const AppWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const GitHubLink = styled.h5`
  text-align: center;
  font-size: 0.65rem;
  color: #383838;
  a {
    text-decoration: underline;
    font-family: ${({ theme }) => theme.sansSerif};
  }
`;

const App = () => {
  return <GitHubLink />;
};

export default App;
