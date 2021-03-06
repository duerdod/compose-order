import React from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import useLocalStorageCart from '../../hooks/useLocalStorageCart';
import { GET_CART, DELETE_CART_ITEM } from '../../gql/gql';
import { ReactComponent as Close } from '../../svg/close.svg';

const RemoveButton = styled.button`
  background: transparent;
  position: absolute;
  cursor: pointer;
  top: -14px;
  left: -12px;
  svg {
    height: 27px;
    width: 27px;
  }
`;

const RemoveFromCart = ({ id }) => {
  const { cartId } = useLocalStorageCart();
  const [removeFromCart] = useMutation(DELETE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART, variables: { id: cartId } }]
  });

  return (
    <RemoveButton
      onClick={() => removeFromCart({ variables: { id, cartId: cartId } })}
    >
      <Close />
    </RemoveButton>
  );
};

export default RemoveFromCart;
