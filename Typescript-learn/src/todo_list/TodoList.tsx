import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newtask, setNewTask] = useState("");

  //only purpose is to be able to type in input and updates, you cant type withput this


  function handleAddTask() {
    //check if newtask has content, trim to delete whitespaces
    if(newtask.trim()){
        setTasks(t=>[...t,newtask])
    }
    setNewTask('')
  }

  function handleDeleteTask(index :number) {
    setTasks(tasks.filter((_,i)=>i!==index))
  }

  function handleMoveTaskUp(index: number) {
    if(index > 0){
        // in normal operations, the name after ... should be the exact name of the array u want to copy
        const updatedTasks = [...tasks];
        //move current index to the index before it
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  
  function handleMoveTaskDown(index: number) {
    if(index < tasks.length-1){
        // in normal operations, the name after ... should be the exact name of the array u want to copy
        const updatedTasks = [...tasks];
        //move current index to the index after it
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={e=> setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => handleDeleteTask(index)}>Del</button>
            <button onClick={() => handleMoveTaskUp(index)}>☝️</button>
            <button onClick={() => handleMoveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
