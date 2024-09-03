import { useEffect, useState } from "react";

function UseEffect2(){
    const [width,setWidth]= useState(window.innerWidth);
    const [height,setHeight]= useState(window.innerHeight);

    //always use useEffect for window.enventlistener
    useEffect(()=>{
        window.addEventListener("resize",handleResize)
        //cleam up eventlistenener
        return ()=>{
            window.removeEventListener("resize",handleResize)
        }
        //empty array means it only run once
    },[]);

    //runs everytime width and height changes
    useEffect(()=>{
        document.title = `width: ${width}, height: ${height}`
    },[width,height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(
        <div>
            <p>Window width: {width}px </p>
            <p>Window heigth: {height}px </p>
        </div>
    );
}
export default UseEffect2