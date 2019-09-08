import { useState, useEffect } from 'react';

function useLocalStorageCart() {
  const init = () => localStorage.getItem('cartId') || null;
  const [cartId, setCartId] = useState(init);

  useEffect(() => {
    if (cartId) {
      localStorage.setItem('cartId', cartId);
    }
  }, [cartId]);

  return { cartId, setCartId };
}

export default useLocalStorageCart;
