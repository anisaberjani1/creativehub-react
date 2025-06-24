import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [history, setHistory] = useState([]);

  const convertToFahrenheit = () => {
    if (celsius === "") return;
    const f = (parseFloat(celsius) * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
    setHistory([...history, `${celsius} °C = ${f.toFixed(2)} °F`]);
  };

  const convertToCelsius = () => {
    if (fahrenheit === "") return;
    const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
    setHistory([...history, `${fahrenheit} °F = ${c.toFixed(2)} °C`]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Temperature Converter
        </h2>

        <div className="mb-4 flex gap-2">
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            placeholder="Enter Celsius"
            className="border rounded px-3 py-2 flex-1"
          />
          <button
            onClick={convertToFahrenheit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            To °F
          </button>
        </div>

        <div className="mb-6 flex gap-2">
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            placeholder="Enter Fahrenheit"
            className="border rounded px-3 py-2 flex-1"
          />
          <button
            onClick={convertToCelsius}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            To °C
          </button>
        </div>

        <h3 className="text-xl font-semibold mb-2">Conversion History:</h3>
        {history.length === 0 ? (
          <p className="text-gray-500">No conversions yet.</p>
        ) : (
          <>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button
              onClick={clearHistory}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear History
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
