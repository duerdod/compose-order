import { client } from '../index';
import { GET_ALL_PRODUCTS } from '../gql/gql';

async function getProducts() {
  const data = client.query({ query: GET_ALL_PRODUCTS });
  return data;
}

export default getProducts;
