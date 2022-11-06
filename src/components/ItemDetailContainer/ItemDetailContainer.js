import { useState, useEffect } from 'react'
//import { getProductsById } from '../AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase'


const ItemDetailContainer = () => {

        const [product, setProduct] = useState([])
       // const { id, name, category, img, price, stock, description} = product

        const {productId} = useParams()

            useEffect(() => {
                const docRef = doc(db, 'products', productId)

                getDoc(docRef).then(response=> {

                    const data = response.data()
                    const productAdapted = {id: response.id, ...data}
                    setProduct(productAdapted)
                })   
                return () => {                    
                }
            }, [productId])

    return (            
            <ItemDetail {...product}/>        
  )
}

export default ItemDetailContainer