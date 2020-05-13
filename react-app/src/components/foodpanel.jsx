import React, { useReducer, useState } from "react";
import TableFetcher from "./tablefetcher";
import FoodInputs from "./inputforms/foodinputs";
import { sendRow } from "../utils/utils";

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

  const [update, setUpdate] = useState(false);

  const logNewRow = (e) => {
    e.preventDefault();
    sendRow(curRow, "/food_insert");
    // setUpdate(true);
    e.target.reset();
  };

  return (
    <>
      {/* fetch current data from database */}
      <TableFetcher type="food" />
      {/* display input forms */}
      <p>Enter New Items Here:</p>
      <FoodInputs onChange={onChange} handler={logNewRow} curRow={curRow} />
    </>
  );
};

export default FoodPanel;
