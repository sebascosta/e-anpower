import React from 'react'
import { useState } from 'react'

const Contador = ({stock = 0, initial = 1, onAdd})=> {

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
        
        <h4>Cantidad: {quantity}</h4>        
        <button onClick={restar}style={{width:20}}> - </button>
        <button onClick={sumar} style={{width:20}}> +  </button>
        <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>

    </div>
  )
}

export default Contador