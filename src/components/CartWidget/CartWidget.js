import React from 'react';
import cart from './assets/cart.svg';
import '../App.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const CartWidget = () =>  {
  
    const {getQuantity} = useContext(CartContext) 

    const quantity = getQuantity()


      return (
        <div>
            <img src={cart} className='cartIcon' alt='cart'/>       
            {quantity}
        </div>
      )
}

export default CartWidget