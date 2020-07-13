import React, { useState, useEffect } from "react";
import Input from "../input";
import axios from "axios";
import Loading from "../loading";

/*
Inputs for the Gear Type table, passed as a child of the InputForm component
*/

const MealInputs = ({ row, onChange }) => {
  const [foods, setFoods] = useState([]); // rows holds info from API call
  const [loaded, setLoaded] = useState(false); // boolean shows if API call has completed
  const [newline] = useState(row["meal_name"] !== "");
  useEffect(() => {
    // API call
    (async () => {
      const result = await axios.get("/food");
      setFoods(result.data);
      setLoaded(true);
    })();
  }, []);
  return (
    <>
      {loaded ? (
        <>
          <Input
            name="meal_name"
            type="text"
            onChange={onChange}
            label="Name: "
            example="Cheese Sandwich"
            value={row["meal_name"]}
            disabled={newline}
          />
          <label htmlFor="food_idfood">
            Food :
            <select
              name="food_idfood"
              id="food_idfood"
              onChange={onChange}
              value={row["food_idfood"]}
            >
              <option></option>
              {foods.map((food) => {
                let foodName = `${food["brand"]} ${food["name"]}`;
                return (
                  <option key={food["idfood"]} value={food["idfood"]}>
                    {foodName}
                  </option>
                );
              })}
            </select>
            {"Provolone Cheese Slice"}
          </label>
          <Input
            name="quantity"
            type="number"
            onChange={onChange}
            label="Quantity: "
            example="How many servings?"
            value={row["quantity"]}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MealInputs;
