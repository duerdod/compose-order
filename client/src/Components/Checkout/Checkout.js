import useLocalStorageCart from '../../hooks/useLocalStorageCart';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CART } from '../../gql/gql';
import { Error} from '../PageStatuses'

const Checkout = () => {
  const { cartId } = useLocalStorageCart();
  const { data, loading, error } = useQuery(GET_CART, {
    variables: { id: cartId }
  });
  if (loading) return ''
  if (error) return <Error/>
  const {cartItem} = data.cart

  return (
    <div>
      <h1>Checkout</h1>
      <div style={{margin: '12px'}}>
        {cartItem.map(({product}) => <h3 key={product.id}>{product.productName}</h3>)}
      </div>
    </div>
  );
};

export default Checkout;
