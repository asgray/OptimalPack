import React, { useState, useContext, useEffect } from "react";
import TableProvider from "../context/tableContext";
import FoodInputs from "./inputforms/foodinputs";
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
      {data.length ? <Table info={data} columns={columns} /> : <Loading />}
      <FoodInputs setLoaded={setLoaded} />
    </>
  );
};

export default FoodPanel;
