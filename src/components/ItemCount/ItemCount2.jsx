import { useState } from "react"


export const ItemCount = ( {stock = 5, inital=1, onAdd } ) => {
    
    const [ count, setCount ] = useState(inital) 
    const [booleano, setBooleano] = useState(true)

     // count = count + 1 - count += 1 - count ++

     const handleCount = () => {

        if( count < stock ) {   

            setCount(count + 1)  
             
        }

    }

    const restar = () => { if( count > inital )  setCount(count - 1) }

    const handleOnAdd = () => onAdd(count)



    const hanldeBool = ( ) => setBooleano(!booleano)
    
    return (
        <center className="mt-5">
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            + 
        </button>     
        <label htmlFor="">{count}</label>
      
        <button 
            className="btn btn-outline-primary" 
            onClick={restar} 
        > 
            - 
        </button> 
        <br />    
        <button 
            className="btn btn-outline-primary" 
            onClick={ handleOnAdd } 
        > 
            agregar al carrito 
        </button>     
        <br></br>

    </center>
    )
}