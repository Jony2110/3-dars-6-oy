import { useState } from "react";

import "./index.css";
function Media() {
  const [counterstate, setCounterState] = useState(0);
  // let counter = 0;
  function qoshish() {
    setCounterState((prev) => Math.min(prev + 1));
  }
  function ayrish() {
    setCounterState((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="imgFlex">
      <h2>Social Media Post</h2>
      <img src="https://picsum.photos/200/300" alt="" />

      <div className="btnFlex">
        <button onClick={qoshish}>
          {" "}
          <span>{counterstate}</span> Like
        </button>
        <button onClick={ayrish}>Dislike</button>
      </div>
    </div>
  );
}

export default Media;
