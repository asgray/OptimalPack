import React from "react";
import Input from "../input";

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
        Cooked:
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
      {/* <label htmlFor="cooked">
        Cooked: Yes
        <input
          type="radio"
          name="cooked"
          onChange={onChange}
          value={1}
          checked={checked === 1}
        />
        No
        <input
          type="radio"
          name="cooked"
          onChange={onChange}
          value={0}
          checked={checked === 0}
        />
      </label> */}
      {/* <label htmlFor="cooked">
        Cooked:
        <button type="button" name="cooked" onChange={onChange} value={1}>
          Yes
        </button>
        <button type="button" name="cooked" onChange={onChange} value={0}>
          No
        </button>
      </label> */}
      {/* <Input
        name="cooked"
        type="radio"
        onChange={onChange}
        label="Cooked:"
        example="Yes"
        value={1}
        checked={row["cooked"] === 1}
      />
      <Input
        name="cooked"
        type="radio"
        onChange={onChange}
        label=""
        example="No"
        value={0}
        checked={row["cooked"] === 0}
      /> */}
    </>
  );
};

export default FoodInputs;
