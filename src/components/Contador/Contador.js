import React from 'react'
import { useState } from 'react'

const Contador = ({stock = 0, initial = 0, onAdd})=> {

    const [quantity, setQuantity] = useState(initial)    

        const sumar = ()=> {
           if(quantity < stock){
            setQuantity (quantity + 1)
            }
        }

        const restar = ()=> {
            if(quantity > 0){
            setQuantity(quantity - 1)
        }
        }

  return (
    <div>
        <h2>Cantidad: {quantity}</h2>        
        <button onClick={restar}style={{width:20}}> - </button>
        <button onClick={sumar} style={{width:20}}> +  </button>
        <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>

    </div>
  )
}

export default Contador