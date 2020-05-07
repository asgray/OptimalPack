import React from "react";
import TableRow from "./tablerow";
import logo from "./logo.svg";
import { useHTTP } from "../hooks/http";

function Table(props) {
  // url is the route to fetch, id is the column to use as the table index
  const { url, id } = props;
  // collect data from the API
  const [isLoaded, res] = useHTTP(url);
  var sql = {};
  if (isLoaded) {
    const headers = res.data.headers;
    const data = res.data.data;
    sql = { headers, data };
  }

  function renderWaiting() {
    return <img src={logo} className="App-logo" alt="logo" />;
  }

  function renderTable() {
    return (
      <div>
        <h1>{url}</h1>
        <table>
          <thead>
            <tr key={url + "head"}>
              {/* Render column headers */}
              {sql.headers.map((inst) => {
                //   exclude indexing value
                if (inst !== id) {
                  return (
                    <th key={inst}>
                      {/* capitalize values in header */}
                      {inst.charAt(0).toUpperCase() + inst.slice(1)}
                    </th>
                  );
                } else {
                  return null;
                }
              })}
            </tr>
          </thead>
          <tbody>
            {
              // render each row as it's own element
              sql.data.map((inst) => {
                return (
                  <TableRow
                    key={id + inst[id]}
                    data={inst}
                    id={id}
                    colorder={sql.headers}
                  />
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }

  if (isLoaded) {
    return renderTable();
  } else {
    return renderWaiting();
  }
}
export default React.memo(Table);
