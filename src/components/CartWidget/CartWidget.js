import React from 'react';
import cart from './assets/cart.svg';
import '../App.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'



const CartWidget = () =>  {
  
    const { totalQuantity } = useContext(CartContext) 

    const navigate = useNavigate()


      return (
        <div> 
          
            <button to='/cart' className="CartWidget" onClick={() => navigate('/cart')}>
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}           
            </button>
        </div>
      )
}

export default CartWidget