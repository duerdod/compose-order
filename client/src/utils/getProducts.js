import { client } from '../index';
import { GET_ALL_PRODUCTS, GET_CART } from '../gql/gql';

async function getProducts() {
  const cartId = localStorage.getItem('cartId') || null;

  let cartProducts = [];
  if (cartId) {
    try {
      const {
        data: {
          cart: { cartItem }
        }
      } = await client
        .query({
          query: GET_CART,
          variables: { id: cartId }
        })
        .catch(e => console.log(e));
      cartProducts = cartItem;
    } catch {
      cartProducts = [];
    }
  }
  const {
    data: { products }
  } = await client.query({ query: GET_ALL_PRODUCTS });

  const data = [...products, ...cartProducts];
  return { products: data };
}

export default getProducts;
