import React, { useContext } from "react";
import TableProvider from "../context/tableContext";
import Table from "./table";
import { useGET } from "../hooks/useGet";
import Loading from "./loading";

// Component fetches and formats data from an API,
// Then passes formatted data to Table component for display
function TableFetcher({ type }) {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { url, replace, newCols, title, columns } = context[type];
  // collect data from the API
  const [isLoaded, res] = useGET(url);
  var sql = {};
  var data;
  var headers = columns;
  if (isLoaded) {
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
        <h1>{title}</h1>
        <Table headers={sql.headers} info={sql.data} type={type} />
      </>
    );
  } else {
    return <Loading />;
  }
}
export default TableFetcher;
