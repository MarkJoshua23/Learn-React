import { useEffect, useState } from "react";

function UseEffect(){
    const[count,setCount]=useState(0);
    const[colors,setColors]=useState('red')

    //runs every state update,
    useEffect(()=>{
        document.title = `count: ${count} ${colors}`
    })

    // run only once, just add []
    // useEffect(()=>{
    //     document.title = `count: ${count}`
    // },[])

    //run every time color, count value is changed , helpful if you want to run this when specific state changed and not every state
    // useEffect(()=>{
    //     document.title = `count: ${count}`
    // },[colors])

    function handleAddCount(){
        setCount(c=> c + 1 )
    }
    function handleChangeColor(){
        setColors(c=> colors ==="red"? "green": 'red')
    }
    return(
        <>
        <p style={{color: colors}}>count: {count}</p>
        <button onClick={handleAddCount}>+</button>
        <button onClick={handleChangeColor}>Change Color</button>
        </>
    );
}
export default UseEffect;