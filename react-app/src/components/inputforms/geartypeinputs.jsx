import React from "react";
import Input from "../input";

/*
Inputs for the Gear Type table, passed as a child of the InputForm component
*/

const GearTypeInputs = ({ row, onChange }) => {
  return (
    <>
      <Input
        name="type"
        type="text"
        onChange={onChange}
        label="Type:"
        example="Backpack"
        value={row["type"]}
        disabled={row["type"] !== ""}
      />
      <Input
        name="notes"
        type="text"
        onChange={onChange}
        label="Notes:"
        example="Carries a gear for you"
        value={row["notes"]}
      />
    </>
  );
};

export default GearTypeInputs;
