import { useState } from "react";
import "./index.css";

function Counter() {
  const [counterstate, setCounterState] = useState(0);
  // let counter = 0;
  function qoshish() {
    setCounterState(counterstate + 1);
  }
  function ayrish() {
    setCounterState(counterstate - 1);
  }
  return (
    <div className="flexBox">
      <h2>Counter</h2>
      <h1>{counterstate}</h1>
      <button onClick={qoshish}>+1</button>
      <button onClick={ayrish}>-1</button>
    </div>
  );
}

export default Counter;
