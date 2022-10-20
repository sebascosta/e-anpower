import '../ItemDetail/ItemDetail.css'
import Contador from '../Contador/Contador'


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const handleOnAdd = (count) => {
       const productToAdd = {
        id, name, price, count
       }
        console.log(productToAdd)
    }


    return (
        <div className="detalle">
            <h1 className='title'>{name}</h1>       
            <img src={img} alt={name} style={{height:400}} /> 
            <p>Categoria: {category}</p>       
            <p>Precio: ${price}</p>
            <p>{description}</p>
            <Contador onAdd = {handleOnAdd} stock={stock}/>
        </div>
    )
    
}

export default ItemDetail