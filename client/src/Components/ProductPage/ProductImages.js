import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';

// const images = [`/images/1.png`, `/images/2.png`];
const ImageContainer = styled.div`
  position: relative;
  height: 170%;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 40em) {
    height: 280px;
  }
  section {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    will-change: opacity, transform;
  }
`;

const Indicators = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  span.active {
    color: #fd0054;
  }
`;

const ProductImages = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((index + 1) % images.length);
  };

  const transitions = useTransition(index, p => p, {
    initial: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    from: { opacity: 0.4, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });

  return (
    <ImageContainer>
      <Indicators>
        {images.map((image, i) => (
          <span key={i} className={i === index ? 'active' : undefined}>
            .
          </span>
        ))}
      </Indicators>
      {transitions.map(({ item, key, props }) => (
        <animated.section
          style={{ ...props, backgroundImage: `url(${images[item]})` }}
          onClick={handleClick}
          key={key}
        />
      ))}
    </ImageContainer>
  );
};

export default ProductImages;
