import { css } from '@emotion/core';

const theme = {
  black: '#383838',
  white: '#fffbf5',
  red: '#fd0054',
  green: '#1abb9c',
  border: `box-shadow: 0 0 0 2px #383838;`,
  sansSerif: 'Source Sans Pro',
  serif: 'DM Serif Text'
};

export const reset = css`
  body {
    background-image: url('https://www.transparenttextures.com/patterns/debut-light.png');
    background-color: ${theme.white};
    height: 100%;
    color: ${theme.black};
    font-family: ${theme.sansSerif};
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  html {
    text-rendering: optimizeLegibility;
    font-size: 16px;
  }
  html * {
    box-sizing: border-box;
    &::selection {
      background: ${theme.black};
      color: ${theme.white};
    }
  }

  button,
  input,
  textarea,
  ul,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    border: 0;
    padding: 0;
    background: transparent;
    outline: 0;
    list-style: none;
    resize: none;
    box-shadow: none;
    font-weight: 400;
    color: ${theme.black};
    &:not(output):-moz-ui-invalid:not(:focus),
    &:not(output):-moz-ui-invalid:focus,
    &:not(output):-moz-ui-invalid:-moz-focusring:not(:focus) {
      box-shadow: none;
    }
  }
  @media (pointer: coarse) {
    input,
    textarea {
      font-size: 1.1rem !important;
      &::placeholder {
        font-size: 0.85rem;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

export default theme;
