import React from 'react';

const Cart = ({ cart, total }) => {
  return (
    <div className='flex flex-col items-center justify-between gap-2 border-[0.4rem] border-gray-400 py-2 px-3 w-[20%] h-full'>
        <div className='w-full flex flex-col gap-3'>
            <h2 className='text-xl font-semibold text-center'>Cart</h2>
            {cart.length === 0 ? (
                <p>No Product added to the cart</p>
            ) : (
                cart.map(item => (
                <div key={item.id} className='flex w-full bg-gray-400 justify-between items-center p-2 text-white font-semibold'>
                    <span>{item.name}</span>
                    <span>{item.quantity} x {item.price}</span>
                </div>
                ))
            )}
        </div>
      <div className='flex w-full bg-gray-400 justify-between items-center p-2 text-white font-semibold'>
        <p>Total:</p>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Cart;
