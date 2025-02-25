import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function App() {
  const [result, setResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const options = ["Леша", "Алена"];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult("Обдумываем... 🤔");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setResult(`Победитель: ${options[randomIndex]} 🎉`);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Кто победит?</h1>
      <button onClick={spinWheel} className="spin-button" disabled={isSpinning}>
        {isSpinning ? "Крутим..." : "Крутить колесо 🎡"}
      </button>
      {result && <h2 className="result">{result}</h2>}
    </div>
  );
}

export default App;
