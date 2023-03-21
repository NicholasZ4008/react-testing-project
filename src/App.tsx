import React, { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";

export default function App() {
  /*
    const [button, buttonState] = useState([
        {name: 'start', class: 'start', id:1},
        {name: 'stop', class: 'stop', id:2},
        {name: 'pause', class: 'pause', id:3}
    ])
    */

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

  const [text, changeText] = useState("");

  const transferText = (event) => {
    changeText(event.target.value);
  };

  return (
    <div className="app">
      <h1>App</h1>
      <Button text="+" className="start" onClick={increase} />
      <Button text="-" className="stop" onClick={decrease} />
      /*
      <InputField
        className="input-field"
        placeholder="input text"
        onChange={transferText}
      />
      <span className="count-container">{count}</span>
      <span className="input-reflection">{text}</span>
    </div>
  );
}
