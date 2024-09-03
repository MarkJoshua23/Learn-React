import { useState, createContext } from "react";
import ComponentB from "./ComponentB";
//context we want to pass
export const nameContext = createContext();

//remember: this component is the provider since the value is from this, the component that will use are consumers
function ComponentA() {
  //u need to pass this to component d
  const [name, setName] = useState("mark");
  function handleNameChange(e){
    setName(e.target.value)
  }

  //wrap children component with provider and pass the name value
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>Hello {name}</h2>
      <input type="text" onChange={handleNameChange}/>
      <nameContext.Provider value={name}>
        <ComponentB />
      </nameContext.Provider>
    </div>
  );
}
export default ComponentA;
