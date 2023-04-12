import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        totalItems
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;
    
  const [show, setShow] = useState(false);
  return (
    <>
          <h1>Cart ({totalUniqueItems})</h1>
    
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.img} className="h-48"/>
               Quantity: {item.quantity} x Name: {item.title} &mdash; Price: {item.price} &nbsp;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
                
              </li>
              
            ))}
            Total: {cartTotal}
            
           
          </ul>
        </>
      
  );
}

export default Cart;
