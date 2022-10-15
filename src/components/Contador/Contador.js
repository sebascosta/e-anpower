import React from 'react'
import { useState } from 'react'

function Contador() {

    const [count, setCount] = useState(0)

    

        const sumar = ()=> {
            setCount(count + 1)
        }

        const restar = ()=> {
            if(count > 0){
            setCount(count - 1)
        }
        }

  return (
    <div>
        <h1>Agregar al carrito</h1>
        <h2>{count}</h2>        
        <button onClick={restar}>Quitar</button>
        <button onClick={sumar}>Agregar</button>

    </div>
  )
}

export default Contador