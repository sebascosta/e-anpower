import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext} from '../../notification/NotificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import  ClientForm  from '../Form/Form'


const Checkout = () =>{

    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const navigate = useNavigate()

    const [personalData, setPersonalData] = useState(false)
    
    const [datosCompra, setDatosCompra] = useState({}) 

    const completoDatos = (name, surname, address, phone, email) =>{
            setDatosCompra({name, surname, address, phone, email})
            setPersonalData(true)
    }
            

    const createOrder = async () => {  
        try { 
            const objOrder = {
                buyer: {
                    name:"Sebastian Costa",
                    phone:"11112222",
                    mail:"contact@contact.com"
                },

                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setNotification('success', `El id de su orden es: ${orderAdded.id}`)
            } else {
               setNotification('error','hay productos que estan fuera de stock')
            }

            }catch (error) {
                    console.log(error)
            }}
        return (

        <div>
            <h1>Checkout</h1>
            <div>
            <h1 className="datosCliente">Completa los datos para generar la orden.</h1>
            <ClientForm completoDatos={completoDatos}/>
            { personalData 
            ?<button className="botonCheckout" onClick={createOrder}>Generar orden</button> 
            : ""}
           
        </div>
            
        </div>
        )
    
}

export default Checkout