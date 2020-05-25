import React, { useReducer, useState } from "react";
import { sendRow } from "../../utils/utils";

const FoodInputs = ({ setLoaded }) => {
  // FORM STUFF
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

  const logNewRow = (e) => {
    e.preventDefault();
    sendRow(curRow, "/food_insert");
    setLoaded(false);
    e.target.reset();
  };

  const [show, setShow] = useState(false);
  const showInputs = () => {
    setShow(!show);
  };
  // FORM STUFF
  return (
    <div className="Inputs">
      <input
        type="submit"
        value={show ? "Hide" : "Add New Row"}
        onClick={showInputs}
      />
      {show ? (
        <form onSubmit={logNewRow}>
          <label htmlFor="name">
            Name:*
            <input
              type="text"
              id="name"
              required="required"
              onChange={onChange}
            />
            <span> Mac and Cheese </span>
          </label>
          <br />
          <label htmlFor="brand">
            Brand:
            <input type="text" id="brand" onChange={onChange} />
            <span> Kraft </span>
          </label>
          <br />
          <label htmlFor="weight">
            Weight:*
            <input
              type="number"
              id="weight"
              required="required"
              onChange={onChange}
            />
            <span> Weight (g) per serving </span>
          </label>
          <br />
          <label htmlFor="calories">
            Calories:*
            <input
              type="number"
              id="calories"
              required="required"
              onChange={onChange}
            />
            <span> Calories per serving</span>
          </label>
          <br />
          <label htmlFor="protein">
            Protein:*
            <input
              type="number"
              id="protein"
              required="required"
              onChange={onChange}
            />
            <span> Protein (g) per serving </span>
          </label>
          <br />
          <label htmlFor="servings">
            Servings:*
            <input
              type="number"
              id="servings"
              required="required"
              onChange={onChange}
            />
            <span> Servings per container </span>
          </label>
          <br />
          <label htmlFor="cooked">
            Cooked:
            <label>
              <input
                name="cooked"
                type="radio"
                id="cooked_yes"
                value={1}
                // checked={curRow.cooked === 1}
                onChange={onChange}
              />
              Yes
            </label>
            <label>
              <input
                name="cooked"
                type="radio"
                id="cooked_no"
                value={0}
                // checked={curRow.cooked === 0}
                onChange={onChange}
              />
              No
            </label>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      ) : null}
    </div>
  );
};

export default FoodInputs;
