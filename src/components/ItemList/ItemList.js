import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemList = ({products}) => {
  return (
    <div className="lista">
        {products.map(prod => <ItemDetail key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price} description={prod.description} {...prod}/>)}  
    </div>
  )
}

export default ItemList