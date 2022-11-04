import Contador from '../Contador/Contador';
import {Link} from 'react-router-dom';

const Item = ({id, name, img, price, category, description, stock}) =>{


    return (

        <div className="detalle">
            <h1 className='title'>{name}</h1>       
            <img src={img} alt={name} style={{height:400}} /> 
            <p>Categoria: {category}</p>       
            <p>Precio: ${price}</p>
            <p>{description}</p>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
            
        </div>
    )
}

export default Item