import { useContext } from "react"
import './cart.css'
import { CartContext } from "../../context/CartContext"
import {NavLink} from 'react-router-dom';

const Cart = () =>{

    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return(
        <div className="cartContainer">
            <h1>cart</h1>
            {
                cart.map(prod => (
                    <div>
                        {prod.name} Cantidad: {prod.quantity}                                      
                        <button onClick={() => removeItem(prod.id)}>Quitar producto</button>                  
                    </div> 
                ))
            }
            <div>
                Precio Total: $ {total}
            </div>
            <button onClick={()=> clearCart()}>Limpiar carrito</button>           
          <div><button> <NavLink to={'/checkout'} className='finalizar'>Finalizar la compra</NavLink></button></div>
          
        </div>
    )
    
}

export default Cart