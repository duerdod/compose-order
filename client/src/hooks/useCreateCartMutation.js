// import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_CART } from '../gql/gql';

function useCreateCartMutation() {
  const [createCart, { data, loading, error }] = useMutation(CREATE_CART);
  const createCartEntry = id => createCart({ variables: { id } });
  return {
    createCartEntry,
    data,
    loading,
    error
  };
}

export default useCreateCartMutation;
