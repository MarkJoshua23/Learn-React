import { useState } from "react"
// remember to include an interface for array of object
interface Car {
    year: number;
    make: string;
    model: string;
  }
function UpdateArrayofObject(){
    const[cars,setCars]= useState<Car[]>([])
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
    function handleRemovecar(index : number){
        setCars(c=> c.filter((_,i) => i !== index))
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
        <input type="number" value={carYear} onChange={e=>setYear(parseInt(e.target.value))} placeholder="Enter Year"/> <br />
        <input type="text" value={carMake} onChange={e=>setCarMake(e.target.value)} placeholder="Enter Car Make"/> <br />
        <input type="text" value={carModel} onChange={e=>setCarModel(e.target.value)} placeholder="Enter Car Model"/> <br />
        <button onClick={handleAddCar}>Add Car</button>

        </>
    );

}

export default UpdateArrayofObject