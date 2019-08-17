import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../ui';

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 23%;
  transform: translateX(-50%);
  background: #383838;
  width: 40%;
  z-index: 999;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  ${p =>
    p.isMobile &&
    `
    width: 90%;
  `}
`;

const ModalInnerWrapper = styled.div`
  position: relative;
  padding: 0 1rem;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: -20px;
  color: ${({ theme }) => theme.white};
  padding: 0px 15px;
  font-size: 2rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.sansSerif};
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0;
`;

const DescriptiveText = styled.p`
  color: ${({ theme }) => theme.white};
  font-family: 'Literata', serif;
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const Modal = ({ isModalOpen, toggleModalOpen }) => {
  const isMobile = window && window.innerWidth > 600;
  return isModalOpen ? (
    <ModalWrapper isMobile={isMobile}>
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
          Then, it's time. It's time to pick a bread. This is going to hold that
          korv, and they're all going to hold that i several different ways.
          Which way do you prefer?
        </DescriptiveText>
        <Title>Step 3.</Title>
        <DescriptiveText>
          This could be your last step. If you decide not to move forward, to
          heaven and beyond. If you're satisfied with just a regular dog with a
          regular bread, then this is isn't your favorite step. Now, we're
          getting serious. Take your time, be careful and aodk...
        </DescriptiveText>
        <Title>Step 4.</Title>
        <DescriptiveText>Welcome to heaven.</DescriptiveText>
      </ModalInnerWrapper>
    </ModalWrapper>
  ) : null;
};

export default Modal;
