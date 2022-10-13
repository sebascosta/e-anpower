const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    return (
        <div>
        <h1>Detalle de producto</h1>
        <h2>{name}</h2>
        <img src={img} alt={name} style={{height:500}} />
        <p>Precio: ${price}</p>
        <p>{description}</p>
    </div>
    )
    
}

export default ItemDetail