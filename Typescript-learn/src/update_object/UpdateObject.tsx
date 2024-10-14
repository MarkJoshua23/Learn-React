import { ChangeEvent, useState } from "react";
 
function UpdateObject(){
    const[car,setCar]=useState({year:2024,make:'Ford',model:'Mustang'})
    
    function handleMakeChange(e:ChangeEvent<HTMLInputElement>){
        //use updater c=> , use first letter of stfl var 'car'
        //use spread '...' operator when updating object
        //dont forget to use {} for anything related to accessing/modifying object
    setCar(c => ({...c,make : e.target.value}))
    }
    function handleYearChange(e:ChangeEvent<HTMLInputElement>){
        setCar(c => ({...c,year : parseInt(e.target.value)}))
    }
    function handleModelChange(e:ChangeEvent<HTMLInputElement>){
        setCar(c => ({...c,model : e.target.value}))
    }
    return(
        <div>
            <p>Your favorite Car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>
    );
}

export default UpdateObject