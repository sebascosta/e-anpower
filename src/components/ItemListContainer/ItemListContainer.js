import React from 'react';
import '../ItemListContainer/Container.css'

function ItemListContainer({greeting}) {
  return (
    <div className='saludo'>{greeting}</div>
  )
}

export default ItemListContainer