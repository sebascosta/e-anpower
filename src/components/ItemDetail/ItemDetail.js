import '../ItemDetail/ItemDetail.css'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
       const productToAdd = {
        id, name, price, quantity
       }
        console.log(productToAdd)

        addItem(productToAdd)
    }
    
   
    return (
        <div className="detalle">
            <h1 className='title'>{name}</h1>       
            <img src={img} alt={name} style={{height:400}} /> 
            <p>Categoria: {category}</p>       
            <p>Precio: ${price}</p>
            <p>{description}</p>
            <Link to={`/detail/${id}`} style={{backgroundColor:'lightblue'}}>Ver detalle</Link>
            <Contador onAdd = {handleOnAdd} stock={stock}/>
        </div>
    )
    
}

export default ItemDetail