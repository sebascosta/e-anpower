import {Link} from 'react-router-dom';
import '../ItemDetail/ItemDetail.css'

const Item = ({id, name, img, price, category, description, stock}) =>{


    return (

        <div className="detalle">
            <h2 className='title'>{name}</h2>       
            <img src={img} alt={name} style={{height:400}} />                  
            <p>Precio: ${price}</p>
            <p>{description}</p>
            <button className="verDetalle"><Link to={`/detail/${id}`}>Ver detalle</Link></button>
            
            
        </div>
    )
}

export default Item