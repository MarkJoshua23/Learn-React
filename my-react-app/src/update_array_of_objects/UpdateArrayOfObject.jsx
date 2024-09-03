import { useState } from "react"

function UpdateArrayofObject(){
    const[cars,setCars]= useState([])
    const[carYear,setYear]= useState(new Date().getFullYear())
    const[carMake,setCarMake]=useState('')
    const[carModel,setCarModel]=useState('')

    function handleAddCar(){
        const newCar = {year: carYear, make:carMake, model:carModel}
        setCars(c=>[...c,newCar])
        setYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');

    }
    function handleRemovecar(index){
        setCars(c=> c.filter((_,i) => i !== index))
    }
    function handleYearChange(e){
        setYear(e.target.value)
    }
    function handleMakeChange(e){
        setCarMake(e.target.value)
    }
    function handleModelChange(e){
        setCarModel(e.target.value)
    }

    return(
        <>
        <h2>List of Cars</h2>
        <ul>
            {cars.map((car,index)=>
            <li key={index} onClick={()=>handleRemovecar(index)}>
                {car.year} {car.make} {car.model}
            </li> 
            )}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter Year"/> <br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/> <br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/> <br />
        <button onClick={handleAddCar}>Add Car</button>

        </>
    );

}

export default UpdateArrayofObject