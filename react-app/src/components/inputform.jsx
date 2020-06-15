import React, { useState, cloneElement } from "react";
import { sendRow } from "../utils/utils";

const InputForm = ({ children, baseRow, cancelDisplay, setLoaded, url }) => {
  const [newRow, setNewRow] = useState(baseRow);

  const onChange = (e) => {
    const { value, name } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sendRow(newRow, url);
    console.log(newRow);

    setLoaded(false);
    cancelDisplay();
  };

  return (
    <div className="Inputs">
      <form onSubmit={handleSubmit}>
        {cloneElement(children, { row: newRow, onChange: onChange })}
        <input type="submit" value="Submit" />
        <button onClick={cancelDisplay}>Cancel</button>
      </form>
    </div>
  );
};

export default InputForm;
