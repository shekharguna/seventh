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


      <div class="h-flex bg-gray-100 pt-flex">

        <h1 class=" py-5 text-center text-2xl font-bold text-green-600">Cart Items: {totalItems}</h1>

        <div class="mx-auto max-w-5xl flex justify-center px-6 md:flex md:space-x-6 xl:px-0">

          <div class="rounded-lg md:w-2/3">
            {items.map((item) => (
              <p key={item.id}>
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">

                  <img src={item.img} className="h-48" />
                  <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                      <h2 class="text-lg font-bold text-gray-900">{item.title}</h2>
                      <p class="mt-1 mb-2 text-base text-gray-700">{item.desc}</p>
                      <span class=" rounded-3 bg-gray-100 py-0 px-5 mt-10 duration-100 hover:bg-gray-500 hover:text-blue-50">
                      {item.quantity}
                      </span>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-600 hover:text-blue-50">
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                        </span>
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-600 hover:text-blue-50">
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </span>


                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-600 hover:text-blue-50">
                          <button onClick={() => removeItem(item.id)}>&times;</button>
                        </span>
                      </div>
                      <p class="mt-1 text-base text-gray-700">{item.price}</p>
                    </div>
                    
                  </div>
                 
                </div>
               
              </p>


            ))}
          </div>

        

        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">{cartTotal}</p>
          </div>
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">{50}</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">{cartTotal+50}</p>
            </div>
          </div>
          <button class="mt-6 w-full rounded-md bg-green-600 py-1.5 font-medium text-blue-50 hover:bg-green-700">Check out</button>
        </div>

      </div>

      </div>
    </>
  );

}

export default Cart;
