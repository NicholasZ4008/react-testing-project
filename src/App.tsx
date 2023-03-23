import React, { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

  let [inputText, changeInputText] = useState("");

  const setInputText = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    changeInputText(event.target.value);
  };

  const diff = parseInt(inputText) - count;
  const result = isNaN(diff) ? "Not a number result" : diff;

  return (
    <div className="app">
      <h1>App</h1>
      <Button text="+" className="start" onClick={increase} />
      <Button text="-" className="stop" onClick={decrease} />

      <InputField
        className="input-field"
        placeholder="input a number"
        onChange={setInputText}
      />
      <span className="count-container">Counter: {count}</span>
      <span className="input-reflection">The number you typed:{inputText}</span>
      <span className="the-difference">
        Counter and Input Difference:
        <div className="result">{result}</div>
      </span>
    </div>
  );
}
