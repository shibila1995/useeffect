import React, { useState, useEffect } from "react";
import "./App.css";
import randomcolor from "randomcolor";
function App() {
  //lets declare a state
  const [counter, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  /*useEffect=componentdidmount &componentdidupdate

useEffect(Callbackfunction,dependencyarray)*/
  useEffect(() => {
    console.log("helloo shib");
  }, [counter]);
  //when dependencyarray is empty it act as componentdidmount

  //increment Handler
  function incrementHandler() {
    setCount((previouscount) => {
      return previouscount + 1;
    });
    setColor(randomcolor());
  }

  //decrement Handler
  function decrementHandler() {
    setCount((previouscount) => {
      return previouscount - 1;
    });
    setColor(randomcolor());
  }

  return (
    <div>
      {console.log("rendering done")};
      <h1 style={{ color: color }}>{counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;
