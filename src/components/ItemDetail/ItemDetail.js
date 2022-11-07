import '../ItemDetail/ItemDetail.css'
import Contador from '../Contador/Contador'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../notification/NotificationService'




const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const { addItem, isInCart, getProductQuantity  } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
       const productToAdd = {
        id, name, price, quantity
       }
        console.log(productToAdd)

        addItem(productToAdd, quantity)
        setNotification('success', `Se agregó correctamente ${quantity} producto/s de ${name}`)
       
    }

    const quantityAdded = getProductQuantity(id)
    
   
    return (
        <div className="detalle">
            <h1 className='title'>{name}</h1>       
            <img src={img} alt={name} style={{height:400}} /> 
                 
            <p>Precio: ${price}</p>
            <p> {description} </p>           
            <Contador onAdd = {handleOnAdd} stock={stock} initial={quantityAdded}/>
        </div>
    )
    
}

export default ItemDetail