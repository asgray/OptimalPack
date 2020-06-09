import React, { useState, useContext, useEffect } from "react";
import TableProvider from "../context/tableContext";
import InputForm from "./inputform";
import DelTable from "./deltable";
import Loading from "./loading";
import Table from "./table";
import axios from "axios";

const FoodPanel = () => {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { url, columns } = context["food"];

  // DATA STUFF
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Booleans to display modal inputs
  const [deleteprompt, setDeletePrompt] = useState(false);
  const [editprompt, setEditPrompt] = useState(false);
  const [addRow, setAddRow] = useState(false);
  const showInputs = () => {
    setAddRow(!addRow);
  };

  useEffect(() => {
    (async () => {
      const result = await axios.get(url);
      setData(result.data);
      setLoaded(true);
    })();
  }, [url, loaded]);

  const closePanel = (flag, setFlag) => {
    setFlag(!flag);
  };

  return (
    <>
      {deleteprompt && selectedRow && !editprompt ? (
        <DelTable
          info={[selectedRow.original]}
          columns={columns}
          setDeletePrompt={setDeletePrompt}
          setLoaded={setLoaded}
        />
      ) : null}
      {editprompt && selectedRow && !deleteprompt ? (
        <InputForm editRow={selectedRow.original} setLoaded={setLoaded} />
      ) : null}
      {data.length ? (
        <>
          <h1>Food</h1>
          <Table
            info={data}
            columns={columns}
            setSelectedRow={setSelectedRow}
            selectedRow={selectedRow}
            setEditPrompt={setEditPrompt}
            setDeletePrompt={setDeletePrompt}
          />
        </>
      ) : (
        <Loading />
      )}
      <input
        type="submit"
        value={addRow ? "Hide" : "Add New Row"}
        onClick={showInputs}
      />
      {addRow ? (
        <InputForm
          setLoaded={setLoaded}
          editRow={{
            name: undefined,
            brand: undefined,
            weight: undefined,
            calories: undefined,
            protein: undefined,
            servings: undefined,
            cooked: undefined,
          }}
        />
      ) : null}
    </>
  );
};

export default FoodPanel;
