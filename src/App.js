import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue); // eslint-disable-line no-eval
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  return (
    <div className="calculator">
      <input type="text" readOnly value={displayValue} />

      <div className="buttons">
        <button className="operator" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button className="operator" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button className="operator" onClick={() => handleButtonClick("*")}>
          *
        </button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button className="operator" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button className="clear" onClick={handleClear}>
          AC
        </button>
        <button className="calculate" onClick={handleCalculate}>
          =
        </button>
      </div>
      <h5>by Akrem Abdulkadir</h5>
    </div>
  );
}

export default App;
