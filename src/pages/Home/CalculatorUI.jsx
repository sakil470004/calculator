import { useRef, useState } from "react";
import CalculatorButton from "./CalculatorButton";

function CalculatorUI() {
  const inputRef = useRef("");
  const [currentSymbol, setCurrentSymbol] = useState("");
  const [preValue, setPreValue] = useState(0);
  const [result, setResult] = useState(0);
  const buttonNumberAndIcon = [
    "C",
    "()",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];
  const handleBtnClick = (key) => {
    const currentInputedValue = inputRef.current.value;
    // check old value type
    const numberValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
    ];
    const symbol = ["+", "-", "*", "/"];
    const isNumber = numberValues.find((num) => num === key) || false;
    const isSymbol = symbol.find((sym) => key === sym) || false;

    if (isNumber !== false) {
      const currentDisplay = currentInputedValue + key + "";
      inputRef.current.value = currentDisplay;
    } else if (isSymbol !== false) {
      let calculation;
      if (currentSymbol === "+" && preValue !== 0) {
        calculation = preValue + parseFloat(currentInputedValue);
      } else if (currentSymbol === "-" && preValue !== 0) {
        calculation = preValue - parseFloat(currentInputedValue);
      } else if (currentSymbol === "*" && preValue !== 0) {
        calculation = preValue * parseFloat(currentInputedValue);
      } else if (currentSymbol === "/" && preValue !== 0) {
        calculation = preValue / parseFloat(currentInputedValue);
      } else {
        calculation = parseFloat(currentInputedValue);
      }

      setPreValue(calculation);
      setCurrentSymbol(key);
      inputRef.current.value = "";
      setResult(calculation);
    } else if (key === "C") {
      inputRef.current.value = "";
      setPreValue(0);
      setCurrentSymbol("");
      setResult(0);
    } else if (key === "=") {
      let calculation;
      if (currentSymbol === "+" && preValue !== 0) {
        calculation = preValue + parseFloat(currentInputedValue);
      } else if (currentSymbol === "-" && preValue !== 0) {
        calculation = preValue - parseFloat(currentInputedValue);
      } else if (currentSymbol === "*" && preValue !== 0) {
        calculation = preValue * parseFloat(currentInputedValue);
      } else if (currentSymbol === "/" && preValue !== 0) {
        calculation = preValue / parseFloat(currentInputedValue);
      } else {
        calculation = parseFloat(currentInputedValue);
      }
      inputRef.current.value = calculation;
      setPreValue(0);
      setCurrentSymbol("");
      setResult(calculation);
    } else if (key === "+/-") {
      const currentValue = parseFloat(currentInputedValue) * -1;
      inputRef.current.value = currentValue;
    }
    
    // const currentValue = oldValue + key;
    // inputRef.current.value = currentValue;
  };
  return (
    <div className=" border-blue-400 border-2 rounded-3xl bg-blue-400 m-6 p-6">
      <input
        ref={inputRef}
        placeholder="0"
        className="w-full h-[120px] text-3xl border-blue-200 border-2 rounded-3xl p-4"
        type={"text"}
      ></input>
      <div className="relative">
        <p className="absolute left-4 bottom-4 text-3xl text-red-500">
          {currentSymbol}
        </p>
        <p className="absolute right-4 bottom-4 text-3xl text-red-500">
          {result}
        </p>
      </div>
      <div className="w-full mt-6 text-3xl border-blue-200 border-2 rounded-3xl p-4 grid grid-cols-4 gap-4 items-center text-center bg-blue-300">
        {buttonNumberAndIcon.map((icon) => (
          <CalculatorButton
            key={icon}
            icon={icon}
            handleBtnClick={handleBtnClick}
          ></CalculatorButton>
        ))}
      </div>
    </div>
  );
}

export default CalculatorUI;
