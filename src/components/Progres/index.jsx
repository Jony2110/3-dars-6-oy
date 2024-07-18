import { useState } from "react";
import "./index.css";

function Progres() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    setProgress((prev) => Math.min(prev + 1, 100));
  };

  const handleDecrease = () => {
    setProgress((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="progres">
      <h2>Progress Bar</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="box-flex">
        <h2>{progress}</h2>
        <h2>100</h2>
      </div>
      <div className="buttons">
        <button onClick={handleIncrease}>Qoshish</button>
        <button onClick={handleDecrease}>Kamaytirish</button>
      </div>
    </div>
  );
}

export default Progres;
