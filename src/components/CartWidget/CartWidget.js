import React from 'react';
import cart from './assets/cart.svg';
import '../App.css';

function CartWidget() {
  return (
    <div>
        <img src={cart} className='cartIcon'/>
        5
    </div>
  )
}

export default CartWidget