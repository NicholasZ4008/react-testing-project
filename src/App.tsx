import React, { useState } from "react";
import Button from "./components/Button";

export default function App(){
    const [button, buttonState] = useState([
        {name: 'start', class: 'start', id:1},
        {name: 'stop', class: 'stop', id:2},
        {name: 'pause', class: 'pause', id:3}
    ])

    
    return (
        <div className="app">
            <h1>App</h1>
            <Button button = {button}/>
            <span className="count-container">{count}</span>
        </div>
    );
}