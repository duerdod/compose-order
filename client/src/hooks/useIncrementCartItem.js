import { useMutation } from '@apollo/react-hooks';
import { INCREMENT_CART_ITEM, GET_CART } from '../gql/gql';

function useIncrementCartItem(cartId) {
  const [incrementCartItem] = useMutation(INCREMENT_CART_ITEM, {
    refetchQueries: [{ query: GET_CART, variables: { id: cartId } }]
  });

  function incrementQuantity(id) {
    incrementCartItem({ variables: { id } });
  }

  return {
    incrementQuantity
  };
}

export default useIncrementCartItem;
