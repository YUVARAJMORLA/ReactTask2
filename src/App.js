import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    if (display === "0" || display === "Error") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleModulo = () => {
    setDisplay(display + "%");
  };

  const handlePower = () => {
    setDisplay(display + "**");
  };

  const handleSquareRoot = () => {
    try {
      setDisplay(Math.sqrt(eval(display)).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-screen">{display}</div>
      <div className="calculator-buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={handleClear} className="clear">⌫</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={handleButtonClick.bind(this, "/")} className="operator">÷</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={handleButtonClick.bind(this, "*")} className="operator">x</button>
        <button onClick={() => handleButtonClick(".")}>&#8901;</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleCalculate} >=</button>
        <button onClick={() => handleButtonClick("+")} className="operator">+</button>
        <button onClick={() => handleModulo()} className="operator">%</button>
        <button onClick={() => handleSquareRoot()} className="operator">&#8730;</button>
        <button onClick={() => handlePower()} className="operator">^ </button>
        <button onClick={() => handleButtonClick("-")} className="operator">-</button>
      </div>
    </div>
  );
}

export default Calculator;
