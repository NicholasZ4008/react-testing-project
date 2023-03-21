import React, { MouseEventHandler } from "react";
import { FC } from "react";
import { useState } from "react";

interface ButtonProps {
  text: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const { text, className, onClick } = props;

  return (
    <div className="button">
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
