import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
  border: 2px solid #383838;
  > header,
  footer {
    grid-column: span 3;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default Grid;
