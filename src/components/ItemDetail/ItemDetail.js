import '../ItemDetail/ItemDetail.css'
import Contador from '../Contador/Contador'


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    return (
        <div className="detalle">
        <h1 className='title'>{name}</h1>       
        <img src={img} alt={name} style={{height:500}} />        
        <p>Precio: ${price}</p>
        <p>{description}</p>
        <Contador />
    </div>
    )
    
}

export default ItemDetail