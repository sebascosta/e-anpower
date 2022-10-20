import React from 'react';
import '../ItemListContainer/Container.css'
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../AsyncMock'
import ItemList from '../ItemList/ItemList';
import { useParams} from 'react-router-dom'



function ItemListContainer() {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
 
      useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

       
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch((error)=>{
          console.log(error)})

      }, [categoryId])

  return (
    <div className='saludo'>
      <div className='title'>
        <h1>Listado de productos</h1>
      </div>     
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer