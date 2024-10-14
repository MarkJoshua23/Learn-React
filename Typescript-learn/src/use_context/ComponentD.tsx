//import both useContext and the nameContext from Component A 
import { useContext } from "react";
import { nameContext } from "./ComponentA";

//this will become the consumer component
function ComponentD(){
    //put the value of nameContext to name
    const name= useContext(nameContext);
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>Bye {name}</h2>
        </div>
    );
}
export default ComponentD