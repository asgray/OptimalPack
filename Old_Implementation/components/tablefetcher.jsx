import React, { useContext } from "react";
import TableProvider from "../../react-app/src/context/tableContext";
import Table from "../../react-app/src/components/table";
import { useGET } from "../../react-app/src/hooks/useGet";
import Loading from "../../react-app/src/components/loading";

// Component fetches and formats data from an API,
// Then passes formatted data to Table component for display
function TableFetcher({ type }) {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { url, title, columns } = context[type];
  // collect data from the API
  const [isLoaded, res] = useGET(url);
  var sql = {};
  var data;
  var headers = columns;

  // Process Data after it is fetched
  if (isLoaded) {
    data = res.data.data;
    // extract relevant data
    sql = { headers, data };
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
