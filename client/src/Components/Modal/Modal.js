import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../ui/Button';

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 23%;
  transform: translateX(-50%);
  background: #383838;
  width: 75%;
  z-index: 999;
  border-radius: 3px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.3);
`;

const ModalInnerWrapper = styled.div`
  position: relative;
  padding: 2rem;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  color: ${({ theme }) => theme.white};
  padding: 0px 15px;
  font-size: 2rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.serif};
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0;
`;

const DescriptiveText = styled.p`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.sansSerif};
  font-weight: 400;
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const Modal = ({ isModalOpen, toggleModalOpen }) => {
  return isModalOpen ? (
    <ModalWrapper>
      <ModalInnerWrapper>
        <CloseButton onClick={() => toggleModalOpen(false)}>
          &times;
        </CloseButton>
        <Title style={{ textAlign: 'center', fontSize: '1.4rem' }}>
          How to compose the perfect korv
        </Title>
        <Title>Step 1.</Title>
        <DescriptiveText>
          First you need to choose a korv. Don't be to picky here, just choose
          the one that first comes to mind.
        </DescriptiveText>
        <Title>Step 2.</Title>
        <DescriptiveText>
          Then, it's time to pick a bread. This is going to hold that korv, and
          they're all going to hold that i several different ways. Which way do
          you prefer?
        </DescriptiveText>
        <Title>Step 3.</Title>
        <DescriptiveText>
          There's no korv like an accessories korv.
        </DescriptiveText>
        <Title>Step 4.</Title>
        <DescriptiveText>Heaven.</DescriptiveText>
      </ModalInnerWrapper>
    </ModalWrapper>
  ) : null;
};

export default Modal;
