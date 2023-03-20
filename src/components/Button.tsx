import React from "react"
import { useState } from "react";

const Button = (props) => {

    const button = props.button;

    const [count, setCount] = useState(0);

    const increase = () =>{
        setCount(count => count+1) 
    }

    return (
        <div className="button">
            {button.map((button)=>(
                <div className = "button" key={button.id} onClick={increase}>
                    <button className = {button.class} >{button.name}</button>
                </div>
            ))}
        <span className="count-container">{count}</span>
    </div>
    );
}