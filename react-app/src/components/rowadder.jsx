import React from "react";
import Table from "./table";
import axios from "axios";

function RowAdder({ addRows }) {
  const info = addRows;
  const headers = Object.keys(addRows[0]);

  const saveRows = async (e) => {
    e.preventDefault();
    var outdata = JSON.stringify(addRows);
    console.log("SAVING");
    console.log(outdata);
    const res = await axios.post("/food_insert", outdata, {
      headers: { "content-type": "application/json" },
    });
  };

  return (
    <>
      <h1>New Rows</h1>
      <Table headers={headers} info={info} type="add" />
      <form onSubmit={saveRows}>
        <input type="submit" value="Save" />
      </form>
    </>
  );
}

export default RowAdder;
