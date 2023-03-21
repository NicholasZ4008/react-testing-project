import React from "react";
import { FC } from "react";

interface InputFieldProps {
  className: string;
  placeholder: string;
  onChange: any;
}

const InputField: FC<InputFieldProps> = (props) => {
  const { className, placeholder, onChange } = props;

  return (
    <div>
      <input>
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      </input>
    </div>
  );
};

export default InputField;
