import React from 'react';
import cart from './assets/cart.svg';
import '../App.css';


function CartWidget() {
  return (
    <div>
        <img src={cart} className='cartIcon'/>       
        
    </div>
  )
}

export default CartWidget