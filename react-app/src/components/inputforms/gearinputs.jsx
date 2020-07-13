import React, { useState, useEffect } from "react";
import Input from "../input";
import axios from "axios";
import Loading from "../loading";

/*
Inputs for the Gear table, passed as a child of the InputForm component
*/

const GearInputs = ({ row, onChange }) => {
  const [types, setTypes] = useState([]); // rows holds info from API call

  const [loaded, setLoaded] = useState(false); // boolean shows if API call has completed
  useEffect(() => {
    // API call
    (async () => {
      const result = await axios.get("/gear_type");
      setTypes(result.data);
      setLoaded(true);
    })();
  }, []);
  return (
    <>
      {loaded ? (
        <>
          <Input
            name="name"
            type="text"
            onChange={onChange}
            label="Name:"
            example="Atmos 65 AG"
            value={row["name"]}
          />
          <Input
            name="brand"
            type="text"
            onChange={onChange}
            label="Brand:"
            example="Osprey"
            value={row["brand"]}
          />
          <Input
            name="weight"
            type="number"
            onChange={onChange}
            label="Weight:"
            example="Weight (g)"
            value={row["weight"]}
          />
          <label htmlFor="gear_type_type">
            Type:
            <select
              name="gear_type_type"
              id="gear_type_type"
              onChange={onChange}
              value={row["gear_type_type"]}
            >
              <option></option>
              {types.map((gearType) => {
                return (
                  <option key={gearType["type"]} value={gearType["type"]}>
                    {gearType["type"]}
                  </option>
                );
              })}
            </select>
            {" Backpack"}
          </label>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default GearInputs;
