import { useMutation } from '@apollo/react-hooks';
import { DECREMENT_CART_ITEM, GET_CART } from '../gql/gql';

function useDecrementCartItem(cartId) {
  const [decrementCartItem] = useMutation(DECREMENT_CART_ITEM, {
    refetchQueries: [{ query: GET_CART, variables: { id: cartId } }]
  });

  function decrementQuantity(id) {
    decrementCartItem({ variables: { id } });
  }

  return {
    decrementQuantity
  };
}

export default useDecrementCartItem;
