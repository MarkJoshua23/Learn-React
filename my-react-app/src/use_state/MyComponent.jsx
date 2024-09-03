import React,{useState} from "react"
function MyComponent(){

    const updateName = ()=>{
        //call setter to update DOM
        setName("Mark Joshua");
    }

    const updateAge = ()=>{
        //call setter to update DOM
        setAge(a=> a +1);
    }

    const toggle = () =>{
        //to toggle the opposite of current bool
        setIsEmployed(!isEmployed)
    }
    //[stateful var,setter function]  the dom will update if you update stateful var using setter
    // useState(default value)
    const [name, setName] = useState("Guest")
    
    const [age,setAge] = useState(0)

    //bool, important for toggles   
    const [isEmployed,setIsEmployed] = useState(false)

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Age +</button>
            <p>Employment Status: {isEmployed ? "Employed" : "Unemployed"} </p>
            <button onClick={toggle}>Update</button>
        </div>
    );
}
export default MyComponent