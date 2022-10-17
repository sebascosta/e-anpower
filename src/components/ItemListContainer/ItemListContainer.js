import React from 'react';
import '../ItemListContainer/Container.css'
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../AsyncMock'
import { Link } from 'react-router-dom';
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
      <div className="lista">
        {products.map(prod => {
          return (
            <div  key={prod.id}> 
              <h3>{prod.name}</h3>
              <img src={prod.img} alt={prod.name} style={{height:500}}/>
              <p>Precio: ${prod.price}</p>
              <p>Detalle: {prod.description}</p>
              <button>
              <Link to={`/detail/${prod.id}`}> Ver detalle</Link> 
              </button>
            
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default ItemListContainer