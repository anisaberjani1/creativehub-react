import React, { useRef, useState } from "react";

const Assignment2 = () => {
  const [increment, setIncrement] = useState(0);
  const timeoutId = useRef(0);

  const handleStart = () => {
    timeoutId.current = setInterval(() => {
      setIncrement((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeoutId.current);
  };

  const handleReset = () => {
    setIncrement(0)
    handleStop()
  }
  return (
    <div>
      <p style={{ fontSize: "30px" }}>{increment}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Assignment2;
