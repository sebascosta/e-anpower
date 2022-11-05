import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const Checkout = () =>{

    const { cart, total }  = useContext(CartContext)

    const createOrder = () => {    
    const objOrder = {
        buyer: {
            name:"Sebastian Costa",
            phone:"11112222",
            mail:"contact@contact.com"
        },

        items: cart,
        total: total
    }

    const collectionRef = collection(db, 'orders')

    addDoc(collectionRef, objOrder).then(response => {
        console.log(response.id)
    }).catch(error => {
        console.log(error)
    })
}
  

        return (

        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button>Generar orden</button>
        </div>
        )
    
}

export default Checkout