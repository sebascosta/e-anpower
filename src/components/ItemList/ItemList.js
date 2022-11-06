import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className="lista">
        {products.map(prod => <Item key={prod.id} {...prod}/>)}  
    </div>
  )
}

export default ItemList