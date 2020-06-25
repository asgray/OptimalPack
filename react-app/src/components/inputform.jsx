import React, { useState, cloneElement } from "react";

const InputForm = ({ children, baseRow, url, handleSubmit }) => {
  const [newRow, setNewRow] = useState(baseRow);

  const onChange = (e) => {
    const { value, name } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  return (
    <div className="Inputs">
      <form onSubmit={(e) => handleSubmit(e, newRow, url)}>
        {cloneElement(children, { row: newRow, onChange: onChange })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default InputForm;
