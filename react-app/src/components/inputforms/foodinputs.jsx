import React from "react";
import Input from "../input";

/*
Inputs for the Food table, passed as a child of the InputForm component
*/

const FoodInputs = ({ row, onChange }) => {
  return (
    <>
      <Input
        name="name"
        type="text"
        onChange={onChange}
        label="Name:"
        example="Mac and Cheese"
        value={row["name"]}
      />
      <Input
        name="brand"
        type="text"
        onChange={onChange}
        label="Brand:"
        example="Kraft"
        value={row["brand"]}
      />
      <Input
        name="weight"
        type="number"
        onChange={onChange}
        label="Weight:"
        example="Weight (g) per serving"
        value={row["weight"]}
      />
      <Input
        name="calories"
        type="number"
        onChange={onChange}
        label="Calories:"
        example="Calories per serving"
        value={row["calories"]}
      />
      <Input
        name="protein"
        type="number"
        onChange={onChange}
        label="Protein:"
        example="Protein (g) per serving"
        value={row["protein"]}
      />
      <Input
        name="servings"
        type="number"
        onChange={onChange}
        label="Servings:"
        example="Servings per container"
        value={row["servings"]}
      />
      <label htmlFor="cooked">
        Cooked? :
        <select
          name="cooked"
          id="cooked"
          onChange={onChange}
          value={row["cooked"]}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </label>
    </>
  );
};

export default FoodInputs;
