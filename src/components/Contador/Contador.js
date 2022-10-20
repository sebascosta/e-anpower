import React from 'react'
import { useState } from 'react'

const Contador = ({stock = 0, initial = 0, onAdd})=> {

    const [count, setCount] = useState(initial)    

        const sumar = ()=> {
           if(count < stock){
            setCount (count + 1)
            }
        }

        const restar = ()=> {
            if(count > 0){
            setCount(count - 1)
        }
        }

  return (
    <div>
        <h2>{count}</h2>        
        <button onClick={restar}style={{width:20}}> - </button>
        <button onClick={sumar} style={{width:20}}> +  </button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>

    </div>
  )
}

export default Contador