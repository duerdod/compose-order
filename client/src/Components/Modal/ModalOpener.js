import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Info } from '../../svg/info.svg';
import { Button } from '../ui/Button';

const HoverContainer = styled.div`
  position: relative;
`;

const ModalButton = styled(Button)`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;

  &:hover {
    ${p =>
      !p.isModalOpen &&
      `
    &:before {
      display: block;
    }
    `}
  }
  &:before {
    display: none;
    content: "Click me if yo can't figure out how to yoself";
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.sansSerif};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    font-size: 0.75rem;
    padding: 4px 8px;
    margin-bottom: 4px;
    position: absolute;
    top: -40px;
    left: -150px;
    width: 150px;
    border-radius: 3px;
    @media screen and (max-width: 40em) {
    }
  }
`;

export function toggleOnEscape(e, fn) {
  if (e.key !== 'Escape') return;
  fn(false);
}

export const ModalOpener = ({ toggleModalOpen, isModalOpen }) => (
  <HoverContainer>
    <ModalButton
      onClick={() => toggleModalOpen(isModalOpen => !isModalOpen)}
      isModalOpen={isModalOpen}
    >
      <Info />
    </ModalButton>
  </HoverContainer>
);

export default ModalOpener;
