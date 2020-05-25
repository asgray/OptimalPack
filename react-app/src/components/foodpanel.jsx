import React, { useState, useContext, useEffect } from "react";
import TableProvider from "../context/tableContext";
import FoodInputs from "./inputforms/foodInputs";
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
  const [deleteprompt, setDeletePrompt] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await axios.get(url);
      setData(result.data);
      setLoaded(true);
    })();
  }, [url, loaded]);

  // DATA STUFF

  return (
    <>
      {deleteprompt && selectedRow ? (
        <DelTable
          info={[selectedRow.original]}
          columns={columns}
          setDeletePrompt={setDeletePrompt}
          selectedRow={selectedRow}
          setLoaded={setLoaded}
        />
      ) : null}
      {data.length ? (
        <Table
          info={data}
          columns={columns}
          setSelectedRow={setSelectedRow}
          selectedRow={selectedRow}
          setDeletePrompt={setDeletePrompt}
        />
      ) : (
        <Loading />
      )}
      <FoodInputs setLoaded={setLoaded} />
    </>
  );
};

export default FoodPanel;
