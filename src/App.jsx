import React, { useReducer } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';

const products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

const initialState = {
  cart: [],
  total: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex(item => item.id === action.product.id);
      if (existingProductIndex > -1) {
        const updatedCart = state.cart.map(item =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cart: updatedCart,
          total: state.total + action.product.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
          total: state.total + action.product.price,
        };
      }
    case 'REMOVE_FROM_CART':
      const productIndex = state.cart.findIndex(item => item.id === action.product.id);
      if (productIndex > -1) {
        const product = state.cart[productIndex];
        const updatedCart = state.cart.filter(item => item.id !== action.product.id);
        return {
          ...state,
          cart: product.quantity > 1
            ? state.cart.map(item =>
                item.id === action.product.id ? { ...item, quantity: item.quantity - 1 } : item
              )
            : updatedCart,
          total: state.total - action.product.price,
        };
      }
      return state;
    default:
      return state;
  }
}

const MainComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='flex justify-center gap-10 mt-20 text-lg h-[20rem]'>
      <Products products={products} dispatch={dispatch} cart={state.cart} />
      <Cart cart={state.cart} total={state.total} />
    </div>
  );
};

export default MainComponent;
