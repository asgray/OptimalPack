import React from "react";

const FoodInputs = ({ onChange, handler, curRow }) => {
  return (
    <form onSubmit={handler}>
      <label htmlFor="name">
        Name:*
        <input type="text" id="name" required="required" onChange={onChange} />
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
            type="radio"
            id="cooked"
            value={1}
            checked={curRow.cooked === "1"}
            onChange={onChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            id="cooked"
            value={0}
            checked={curRow.cooked === "0"}
            onChange={onChange}
          />
          No
        </label>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FoodInputs;
