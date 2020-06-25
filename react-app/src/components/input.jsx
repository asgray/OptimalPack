import React from "react";

/*
component wraps normal HTML inputs
*/

const Input = ({ name, type, onChange, label, example, value }) => {
  return (
    <div className="input">
      <label htmlFor={name}>
        {label}
        <input
          type={type}
          name={name}
          required="required"
          onChange={onChange}
          value={value}
        />
        <span> {example} </span>
      </label>
    </div>
  );
};

export default Input;
