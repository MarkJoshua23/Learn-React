import { useState } from "react"

function ColorPicker(){
    const[color,setColor]=useState("#FFFFFF")

    //you can call this instead of the arrow func, ex. onChange={handleColorChange}
    function handleColorChange(e){
        setColor(e.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type="color" value={color} onChange={e=>setColor(e.target.value)}/>
        </div>
    );

}

export default ColorPicker