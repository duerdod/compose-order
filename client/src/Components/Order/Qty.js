import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { OrderContext } from '../../context/order-context';
import { Button } from '../ui/Button';
import { ReactComponent as Up } from '../../svg/chevron-up.svg';
import { ReactComponent as Down } from '../../svg/chevron-down.svg';

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const QuantityButton = styled(Button)`
  margin: 0 4px;
  padding: 5px 7px;
  font-size: 1rem;
  border: 2px solid #383838;
  transition: all 0.2s ease;
  box-sizing: border-box;
  line-height: 0.4;
  svg,
  svg path {
    transition: all 0.2s ease;
  }
  &:hover {
    background: ${({ theme }) => theme.black};
    svg path {
      fill: ${({ theme }) => theme.white};
      stroke: ${({ theme }) => theme.white};
    }
  }
`;

const QuantityCount = styled.h4`
  background: #ffffff;
  border: 2px solid #383838;
  padding: 3px 11px;
  height: 30px;
  cursor: text;
  margin-left: 8px;
`;

const Qty = ({ product }) => {
  const { dispatch } = useContext(OrderContext);

  return (
    <Label htmlFor={product.id}>
      <div>
        <QuantityButton
          onClick={() => dispatch({ product, type: 'INCREMENT' })}
        >
          <Up />
        </QuantityButton>

        <QuantityButton
          onClick={() => dispatch({ product, type: 'DECREMENT' })}
        >
          <Down />
        </QuantityButton>
      </div>
      <QuantityCount>{product.count}</QuantityCount>
    </Label>
  );
};

export default Qty;
