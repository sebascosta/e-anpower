import { useContext } from "react"
import './cart.css'
import { CartContext } from "../../context/CartContext"
import {NavLink} from 'react-router-dom';
import cartImg from '../CartWidget/assets/cart.svg';

const Cart = () =>{

    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return(
        <div className="cartContainer">
            <img src={cartImg} alt='cart-widget' className='cartIcon'/>
            {
                cart.map(prod => (
                    <div >
                        <div className="align"><h4 className="margin">Producto: {prod.name}</h4><button onClick={() => removeItem(prod.id) } className="buttonS">Quitar producto</button></div> 
                         <div><h5>Cantidad: {prod.quantity} </h5> </div>  
                    </div> 
                ))
            }
            <div>
                Precio Total: $ {total}
            </div>
            <button onClick={()=> clearCart()} className="buttonS" >Limpiar carrito</button> 
            <div><button  className='finalizar'> <NavLink to={'/checkout'}>Finalizar la compra</NavLink></button></div>
        </div>
        
    )
    
}

export default Cart