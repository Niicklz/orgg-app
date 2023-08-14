

import React from "react";
import "./Input.css";

type TypeOfInputs =
  | "text"
  | "password"
  | "email"
  | "number"
  | "checkbox"
  | "radio"
  | "date"
  | "time"
  | "color"
  | "file"
  | "range"
  | "textarea"
  | "select"
  | "submit"
  | "button"
  | "hidden";

interface InputProps {
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  labelText: string;
  value: string
  handleChange?: (value:string)=>void;
}


export const Input = ({ placeholder, type, labelText, handleChange, value }: InputProps) => {


  return (
    <div className="input-container">
      <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={labelText.toLowerCase()}
        value={value}
        onChange={(e)=>{ if(handleChange) {
          handleChange(e.target?.value)
        }}}
      />
    </div>
  );
};
