import { CartProvider, useCart } from "react-use-cart";

import React from 'react'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        totalItems,
        cartTotal,
        removeItem,
        emptyCart,
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;
    
  return (
   <>
        <div>
          <div>
            <div>
              <h5>Casrt({totalUniqueItems}) total Items: ({totalItems})</h5>
            </div>
          </div>
        </div>
   </>
  )
}

export default Cart;



  