import React, { useContext, useState, useReducer } from "react";
import TableProvider from "../context/tableContext";
import Table from "./table";

function RowAdder({ type }) {
  // import specs fro table type
  const context = useContext(TableProvider);
  const inputs = context.tableSpecs[type].inputFeilds;
  // initialize dummy row from input fields
  const dummyRow = {};
  // const required = [];
  for (let inp in inputs) {
    dummyRow[inputs[inp].name] = "";
    //   if (inputs[inp].optional) {
    //     required.push(inputs[inp].name);
    //   }
  }

  // method updates dummy row with data from inputs
  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value,
    };
  };
  // link dummy row and reducer() with hook
  const [newRow, dispatch] = useReducer(reducer, dummyRow);
  // set state for all new rows
  const [newRows, setNewRows] = useState([]);
  // method keeps newRow up to date with inputs
  const onChange = (e) => {
    dispatch({ field: e.target.id, value: e.target.value });
  };

  // when submit button is clicked
  const handleAdd = (evt) => {
    // prevent default ???
    evt.preventDefault();

    // update list of new rows
    setNewRows((oldAry) => [...oldAry, newRow]);
  };
  console.log(newRows);
  return (
    <div>
      <form onSubmit={handleAdd}>
        {inputs.map(({ name, type, optional, hint }) => {
          return (
            <>
              <label key={{ name } + "label"} htmlFor={name}>
                {name.charAt(0).toUpperCase() +
                  name.slice(1) +
                  (optional ? "*" : "") +
                  ": "}
              </label>
              <input
                key={{ name } + "form"}
                type={type}
                id={name}
                onChange={onChange}
                required={optional ? "required" : optional}
              />
              <span key={{ name } + "span"}> {hint}</span>
              <br key={{ name } + "break"} />
            </>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RowAdder;
