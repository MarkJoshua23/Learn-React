import { useState } from "react"

function Counter(){

    const [number,setNumber]=useState(0)
    const decrement = () =>{

        //use updater for consistency if u'll use prev value, use the first letter of stateful var
        setNumber(n => n -1)
    }
    //u dont need to use updater since u dont need the value of prev state
    const reset = () =>{
        setNumber(0)
    }
    //[stateful var,setter function]  the dom will update if you update stateful var using setter
    // useState(default value)  
    

    return(
        <div>
            <h1>Counter</h1>
            <h2>{number}</h2>
            <button onClick={ () => setNumber(n => n +1) }>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    );

}

export default Counter