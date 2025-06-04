import { useState } from "react";
function App() {
  const name = "Test remote dev pipeline";

  function callFunction() {
    alert("Hello, this is a function call!");
  }

  const fruit = (name) => {
    alert(name + " is a fruit");
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>Click Event </h1>
      <button onClick={() => fruit("apple")}>Click Apple !!</button>
      <button onClick={() => fruit("bananna")}>Click bananna !!</button>



    </div>
  )   
  
}

export default App; 