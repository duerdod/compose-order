import useLocalStorageCart from '../../hooks/useLocalStorageCart';
import React from 'react';
import styled from '@emotion/styled';
import useIncrementCartItem from '../../hooks/useIncrementCartItem';
import useDecrementCartItem from '../../hooks/useDecrementCartItem';

import { ReactComponent as Plus } from '../../svg/plus.svg';
import { ReactComponent as Minus } from '../../svg/minus.svg';

const Button = styled.button`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const ProductQuantity = ({ id, increment, isLast }) => {
  const { cartId, removeCartId } = useLocalStorageCart();
  const { incrementQuantity } = useIncrementCartItem(cartId);
  const { decrementQuantity } = useDecrementCartItem(cartId);
  return increment ? (
    <Button onClick={() => incrementQuantity(id)}>
      <Plus />
    </Button>
  ) : (
    <Button
      onClick={() => {
        decrementQuantity(id);
        return isLast ? removeCartId() : false;
      }}
    >
      <Minus />
    </Button>
  );
};

export default ProductQuantity;
