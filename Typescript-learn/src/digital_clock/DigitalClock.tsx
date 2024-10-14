import { useEffect, useState } from "react"

function DigitalClock(){
    
    const[time,setTime]=useState(new Date());

    useEffect(()=> {
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)

        return () =>{
            clearInterval(intervalId)
        }
    },[])


    return(
        <p>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
    );
}

export default DigitalClock