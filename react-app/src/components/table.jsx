import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRow from "./tablerow";

function Table(props) {
  const [sql, setSQL] = useState([]);
  // collect data from the API
  useEffect(() => {
    axios.get(props.url).then((res) => {
      console.log(res);
      const headers = res.data.headers;
      const info = res.data.data;
      const newSQL = { headers, info };
      setSQL(newSQL);
    });
  }, []);

  return (
    <div>
      <h1>{props.url}</h1>
      <table>
        <thead>
          <tr key={props.url + "head"}>
            {/* Render column headers */}
            {sql.headers ? (
              sql.headers.map((inst) => {
                //   exclude indexing value
                if (inst !== props.id) {
                  return (
                    <th key={inst}>
                      {/* capitalize values in header */}
                      {inst.charAt(0).toUpperCase() + inst.slice(1)}
                    </th>
                  );
                }
              })
            ) : (
              <th key="loading">"Loading ..."</th>
            )}
          </tr>
        </thead>
        <tbody>
          {sql.info ? (
            //    render each row as it's own element
            sql.info.map((inst) => {
              return (
                <TableRow info={inst} id={props.id} colorder={sql.headers} />
              );
            })
          ) : (
            <tr>
              <td>Loading ...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
