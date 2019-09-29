import { useMutation } from '@apollo/react-hooks';
import { ADD_TO_CART_MUTATION } from '../gql/gql';
import useLocalStorageCart from './useLocalStorageCart';

function useProductsToCart() {
  const [addToCart, { data, loading, error }] = useMutation(
    ADD_TO_CART_MUTATION
  );
  const { setCartId } = useLocalStorageCart();

  // addProductsToCart expects an array of objects,
  // including id, quantity and price keys.
  const addProductsToCart = async products =>
    (products.length > 0
      ? addToCart({ variables: { CartItemInput: products } })
      : Promise.reject()
    ).then(({ data }) => {
      try {
        setCartId(data.addToCart.id);
      } catch (e) {
        console.log(e.message);
      }
    });

  return {
    addProductsToCart,
    data,
    loading,
    error
  };
}

export default useProductsToCart;
