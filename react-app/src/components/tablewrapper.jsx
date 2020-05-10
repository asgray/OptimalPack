import React, { useContext } from "react";
import TableProvider from "../context/tableContext";
import Table from "./table";
import { useGET } from "../hooks/useGet";
import Loading from "./loading";
import RowAdder from "./rowadder";

// Function collects API data and passes it to React-Table in Table component
function TableWrapper({ type }) {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { url, replace, newCols } = context.tableSpecs[type];
  // collect data from the API
  const [isLoaded, res] = useGET(url);
  var sql = {};
  var data;
  var headers;
  if (isLoaded) {
    headers = res.data.headers;
    data = res.data.data;
    // extract relevant data
    sql = { headers, data };
  }

  // Process Data after it is fetched
  if (isLoaded) {
    // add new columns to list
    for (let col in newCols) {
      headers.push(col);
    }
    // make any data replacements per specification
    data = data.map((row) => {
      // check each feild to be edited
      for (let col in replace) {
        // extract replacement mapping for field
        let options = replace[col];
        // perform reassignment
        row[col] = options[row[col]];
      }
      // add default values to new columns
      for (let col in newCols) {
        row[col] = newCols[col];
      }
      return null;
    });

    return (
      <>
        <Table headers={sql.headers} info={sql.data} type={type} />
        <RowAdder type={type} />
      </>
    );
  } else {
    return <Loading />;
  }
}
export default TableWrapper;
