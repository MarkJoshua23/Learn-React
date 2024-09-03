import { useEffect, useRef, useState } from "react";

//useRef doesnt trigger re render
function UseRef() {
  //normal state that will normally re renders
  //   const [number, setNumber] = useState(0);

  //current tryRef is 0
  const tryRef = useRef(0);
  //use as ref for input, you can use ref to design the element without rerendering
  const inputRef = useRef(null);

  useEffect(() => {
    //notice that ref doesnt trigger useEffect unlike useState
    console.log("component rendered");
    console.log(inputRef)
  });

  function handleClick() {
    // setNumber((n) => n + 1);
    //increment the current tryRef
    tryRef.current++;
    console.log(tryRef.current);

    //ref is useful for focus when you click input without re rendering
    inputRef.current.focus();
    //change color of input when button is clicked
    inputRef.current.style.backgroundColor = "yellow";
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <input ref={inputRef} />
    </div>
  );
}
export default UseRef;
