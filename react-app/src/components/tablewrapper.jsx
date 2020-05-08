import React from "react";
import Table from "./table";

import { useHTTP } from "../hooks/http";
import Loading from "./loading";

// Function collects API data and passes it to React-Table in Table component
function TableWrapper({ url }) {
  // collect data from the API
  const [isLoaded, res] = useHTTP(url);
  var sql = {};
  if (isLoaded) {
    const headers = res.data.headers;
    const data = res.data.data;
    sql = { headers, data };
  }

  if (isLoaded) {
    return <Table headers={sql.headers} info={sql.data} />;
  } else {
    return <Loading />;
  }
}
export default TableWrapper;
