import React, { useState } from "react";
// import { sendRow } from "../utils/utils";
import Input from "./input";

const InputForm = ({ setLoaded, editRow }) => {
  const [row, setRow] = useState(editRow);

  const onChange = (e) => {
    const { value, name } = e.target;
    setRow({ ...row, [name]: value });
  };

  const logNewRow = (e) => {
    e.preventDefault();
    console.log(row);
    // sendRow(curRow, "/food_insert");
    // setLoaded(false);
    e.target.reset();
  };

  // FORM STUFF
  return (
    <div className="Inputs">
      <form onSubmit={logNewRow}>
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
        <Input
          name="cooked"
          type="radio"
          onChange={onChange}
          label="Cooked:"
          example="Yes"
        />
        <Input
          name="cooked"
          type="radio"
          onChange={onChange}
          label=""
          example="No"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default InputForm;
