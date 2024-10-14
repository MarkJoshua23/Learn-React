import { useState } from "react";

function UpdateArray() {
  //one for array one for string
  const [foods, setFood] = useState(["apple", "orange", "banana"]);
  const [newFood,setNewFood] =useState('');

  function handleAddFood() {
    //use ... 'spread operator' everytime adding to data structures
    setFood((f) => [...f, newFood]);
    setNewFood('')
  }

  //receive the index and remove that using filter
  function handleDeleteFood(index:number) {
    setFood((f) => f.filter((_, i) => i !== index));
  }

  function handleRemoveFood() {}
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <>
            <li key={index}>
              {food}
              <button onClick={() => handleDeleteFood(index)}>delete</button>
            </li>
          </>
        ))}
      </ul>
      <input type="text" value={newFood} placeholder="Enter Food Name" onChange={e=> setNewFood(e.target.value)} />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}
export default UpdateArray;
