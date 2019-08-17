import styled from '@emotion/styled';

export const Button = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  padding: 1rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${({ theme }) => theme.sansSerif}, sans-serif;
  font-weight: 900;
  ${p =>
    p.hover &&
    `
  &:hover {
    background: #383838;
    color: #fffbf5;

  `}
  }
`;

export default Button;
