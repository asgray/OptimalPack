import React, { useContext } from "react";
import TableProvider from "../context/tableContext";
import Table from "./table";
import { useHTTP } from "../hooks/http";
import Loading from "./loading";

// Function collects API data and passes it to React-Table in Table component
function TableWrapper({ type }) {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { url, replace } = context.tableSpecs[type];

  // collect data from the API
  const [isLoaded, res] = useHTTP(url);
  var sql = {};
  var data;
  var headers;
  if (isLoaded) {
    headers = res.data.headers;
    data = res.data.data;
    // extract relevant data
    sql = { headers, data };
  }

  // make any data replacements per specification
  if (isLoaded) {
    data = data.map((row) => {
      // check each feild to be edited
      for (let col in replace) {
        // extract replacement mapping for field
        let options = replace[col];
        // perform reassignment
        row[col] = options[row[col]];
      }
      return "";
    });

    return <Table headers={sql.headers} info={sql.data} type={type} />;
  } else {
    return <Loading />;
  }
}
export default TableWrapper;
