import { useState } from "react"

function Counter(){


    const decrement = () =>{
        setNumber(number-1)
    }

    const reset = () =>{
        setNumber(0)
    }
    //[stateful var,setter function]  the dom will update if you update stateful var using setter
    // useState(default value)  
    const [number,setNumber]=useState(0)

    return(
        <div>
            <h1>Counter</h1>
            <h2>{number}</h2>
            <button onClick={ () => setNumber(number+1) }>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    );

}

export default Counter