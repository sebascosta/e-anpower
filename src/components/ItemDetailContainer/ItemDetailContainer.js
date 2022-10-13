import { useState, useEffect } from 'react'
import { getProductsById } from '../AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';





const ItemDetailContainer = () => {
        const [product, setProduct] = useState([])
        const { id, name, category, img, price, stock, description} = product
        const {productId} = useParams()

            useEffect(() => {
                getProductsById(productId)
                .then(product => {
                    setProduct(product)
                })
                
                return () => {
                    
                }
            }, [])

    return (
       <ItemDetail {...product}/>
  )
}

export default ItemDetailContainer