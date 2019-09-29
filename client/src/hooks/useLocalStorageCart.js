import { useState, useEffect } from 'react';

function useLocalStorageCart() {
  const init = () => localStorage.getItem('cartId') || null;
  const removeCartId = () => localStorage.removeItem('cartId');
  const [cartId, setCartId] = useState(init);

  useEffect(() => {
    if (cartId) {
      localStorage.setItem('cartId', cartId);
    } else {
      localStorage.removeItem('cartId');
    }
  }, [cartId]);

  return { cartId, setCartId, removeCartId };
}

export default useLocalStorageCart;
