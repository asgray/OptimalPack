import React, { useReducer, useState } from "react";
import TableFetcher from "./tablefetcher";
import RowAdder from "./rowadder";
import FoodInputs from "./inputforms/foodinputs";

const FoodPanel = () => {
  const dummyRow = {
    name: "",
    brand: "",
    weight: "",
    calories: "",
    protein: "",
    servings: "",
    cooked: 1,
  };

  // BOILERPLATE FORM HANDLING
  // method updates dummy row with data from inputs
  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value,
    };
  };
  // link dummy row and reducer() with hook
  const [curRow, dispatch] = useReducer(reducer, dummyRow);
  // method keeps newRow up to date with inputs
  const onChange = (e) => {
    dispatch({ field: e.target.id, value: e.target.value });
  };
  // set state for all new rows
  const [newRows, setNewRows] = useState([]);
  // add new row to state on form submit
  const logNewRow = (e) => {
    e.preventDefault();
    setNewRows([...newRows, curRow]);
    e.target.reset();
  };
  // END BOILERPLATE

  return (
    <>
      {/* fetch current data from database */}
      <TableFetcher type="food" />
      {/* if there is new information to send to database, render it */}
      {newRows.length ? (
        <RowAdder addRows={newRows} />
      ) : (
        <p>Enter New Items Here:</p>
      )}
      {/* display input forms */}
      <FoodInputs onChange={onChange} handler={logNewRow} curRow={curRow} />
    </>
  );
};

export default FoodPanel;
