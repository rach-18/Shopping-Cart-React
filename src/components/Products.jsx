import React from 'react';

const Products = ({ products, dispatch, cart }) => {
  const getProductQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <div className='flex flex-col items-center gap-2 border-[0.4rem] border-gray-400 py-2 px-3 w-[30%] h-full'>
      <h2 className='text-xl font-semibold'>Products</h2>
      {products.map(product => (
        <div key={product.id} className='flex w-full bg-gray-400 justify-between items-center p-2 text-white font-semibold'>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <div className='flex gap-3 items-center bg-blue-400 px-4 py-1 rounded-full border-[0.1rem] border-gray-500'>
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', product })}>-</button>
            <span>{getProductQuantity(product.id)}</span>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', product })}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
