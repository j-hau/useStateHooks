import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  {
    /*We import useState specifically from react.
    useState has to be inside a functional component.
    We then put zero inside useState so the initial value is zero.
    We are defining that there is a state, count, which is initialised to 0 and accessed through the destructed array as count..
    There is a function which alters the state which dynamically updates onto the screen, setCount which will change the value of count.

    This simply means that we are deconstructing useState into two things,
    count and setCount.  setCount is in charge of writing the value of count.
    Count is the identifier for the value intiialised in useState.
    setCount is called, it re-renders that section onto the screen.
    */
  }

  function increase() {
    setCount(count + 1);
  }

  {
    /* Here we have a function.  We use setCount to change the value inside useState
    This reads the value of count, then writes it back in with the addition of 1.
    */
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
