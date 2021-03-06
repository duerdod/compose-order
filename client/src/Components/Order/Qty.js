import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
import { OrderContext } from '../../context/order-context';
import { Button } from '../ui/Button';
import { ReactComponent as Up } from '../../svg/chevron-up.svg';
import { ReactComponent as Down } from '../../svg/chevron-down.svg';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0.3rem;
`;

export const QuantityButton = styled(Button)`
  margin-right: 4px;
  padding: 5px 7px;
  font-size: 2rem;
  border: 2px solid #383838;
  transition: all 0.2s ease;
  box-sizing: border-box;
  line-height: 0.4;

  svg,
  svg path {
    transition: all 0.2s ease;
  }
  &:hover {
    background: ${({ theme }) => theme.red};
    ${p => p.up && `background: #1abb9c !important;`}
    svg path {
      fill: ${({ theme }) => theme.white};
      stroke: ${({ theme }) => theme.white};
    }
  }
`;

export const QuantityCount = styled.div`
  background: #ffffff;
  border: 2px solid #383838;
  padding: 3px 11px;
  height: 30px;
  cursor: text;
  margin-left: 8px;
  position: relative;
  overflow: hidden;
  h4 {
    position: 'absolute';
  }
`;

const Qty = ({ product }) => {
  const { dispatch } = useContext(OrderContext);
  const transitions = useTransition(product, p => p.quantity, {
    unique: true,
    initial: { transform: 'translate3d(0, 0, 0)' },
    from: { transform: 'translate3d(0, 20px, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(0, 0, 0)' },
    config: { duration: 150 }
  });

  return (
    <Label htmlFor={product.id} className="qty-container">
      <div>
        <QuantityButton
          up
          onClick={e => {
            e.preventDefault();
            dispatch({ product, type: 'INCREMENT' });
          }}
        >
          <Up />
        </QuantityButton>

        <QuantityButton
          onClick={e => {
            e.preventDefault();
            dispatch({ product, type: 'DECREMENT' });
          }}
        >
          <Down />
        </QuantityButton>
      </div>
      <QuantityCount>
        {transitions.map(({ item, key, props }) => (
          <animated.h4 style={props} key={key}>
            {item.quantity}
          </animated.h4>
        ))}
      </QuantityCount>
    </Label>
  );
};

export default Qty;
