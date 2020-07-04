import React, { useState, cloneElement } from "react";

/*
component contains a form that renders the inputs passed as children
  Structure:
    InputForm -> Inputs
children is the component containing the HTML for the inputs
baseRow is the selected row passed to this componenet
url is the route that the form submits to
handleSubmit is the method called when form is submitted
*/

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
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default InputForm;
