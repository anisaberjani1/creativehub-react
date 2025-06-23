import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col justify-center items-center bg-blue-950 text-white min-h-screen py-10">
      <h1 className="text-6xl mb-10">Counter App</h1>
      <div className="flex flex-col gap-4 mb-10">
        <p>Enter the amount the counter should increase/decrease by:</p>
        <input
          className="border-2"
          type="number"
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div className="flex justify-between items-center gap-20">
        <button
          onClick={() => setCount(count - step)}
          className="border-3 pb-4 px-9 text-8xl rounded-full"
        >
          -
        </button>
        <h1 className="text-8xl">{count}</h1>
        <button
          onClick={() => setCount(count + step)}
          className="border-3 pb-4 px-6 text-8xl rounded-full"
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setCount(0);
          setStep(0);
        }}
        className="mt-10 border-2 px-6 py-2 rounded-md text-xl hover:bg-white hover:text-blue-950 transition"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
