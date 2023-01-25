import "./App.css";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [show, setShow] = useState(true);

  const operators = ["/", "*", "-", "+", ".", "%"];
  const updateValue = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
      setShow(eval(calc + value).toString());
    }
  };
  const deleteValue = () => {
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const clearValue = () => {
    setCalc("");
    setResult("");
  };
  const equals = () => {
    setCalc(eval(calc).toString());
    setShow(false);
  };
  return (
    <div className="page">
      <div className="calculator">
        <div className="display">
          <div className="previous-value">
            <span>{show ? result : null}</span>
          </div>
          <div>{calc || "0"}</div>
        </div>
        <button className="clear" onClick={clearValue}>
          C
        </button>
        <button className="number" onClick={() => updateValue("%")}>
          %
        </button>
        <button className="operator" onClick={() => updateValue("/")}>
          /
        </button>
        <button className="number" onClick={() => updateValue("7")}>
          7
        </button>
        <button className="number" onClick={() => updateValue("8")}>
          8
        </button>
        <button className="number" onClick={() => updateValue("9")}>
          9
        </button>
        <button className="operator" onClick={() => updateValue("*")}>
          *
        </button>
        <button className="number" onClick={() => updateValue("4")}>
          4
        </button>
        <button className="number" onClick={() => updateValue("5")}>
          5
        </button>
        <button className="number" onClick={() => updateValue("6")}>
          6
        </button>
        <button className="operator" onClick={() => updateValue("-")}>
          -
        </button>
        <button className="number" onClick={() => updateValue("1")}>
          1
        </button>
        <button className="number" onClick={() => updateValue("2")}>
          2
        </button>
        <button className="number" onClick={() => updateValue("3")}>
          3
        </button>
        <button className="operator" onClick={() => updateValue("+")}>
          +
        </button>
        <button className="delete" onClick={deleteValue}>
          <i class="bi bi-arrow-left" />
        </button>
        <button className="number" onClick={() => updateValue("0")}>
          0
        </button>
        <button className="number" onClick={() => updateValue(".")}>
          .
        </button>
        <button className="equals" onClick={equals}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
