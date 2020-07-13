import React, { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import Loading from "./loading";
import axios from "axios";
import InputForm from "./inputform";
import { sendRow } from "../utils/utils";
/*

*/

const CollectionDetail = ({ specs, row }) => {
  const { url, columns, target, Inputs, dummyrow } = specs;

  // DATA STUFF
  const [fetchedRows, setFetchedRows] = useState([]); // rows holds info from API call
  const [loaded, setLoaded] = useState(false); // boolean shows if API call has completed
  useEffect(() => {
    // API call
    (async () => {
      const result = await axios.post(`${url}_${row[target]}`);
      setFetchedRows(result.data);
      setLoaded(true);
    })();
  }, [url, loaded, row, target]);

  // memoize API data for table
  const data = useMemo(() => fetchedRows, [fetchedRows]);
  // initialize all table variables
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // modal inputs
  const [display, setDisplay] = useState("none"); // string determines what, if any modal panels are rendered
  // method rests modal panels and selections
  const cancelDisplay = () => {
    setDisplay("none");
  };

  const handleSubmit = (e, newRow, url) => {
    e.preventDefault();
    sendRow(newRow, url);
    setLoaded(false);
    cancelDisplay();
  };

  return (
    <div className="Collection">
      {loaded ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "sort-desc"
                          : "sort-asc"
                        : ""
                    }
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}

      {display === "ADD" ? (
        <div className="modalpanel">
          <InputForm
            baseRow={{ ...dummyrow, [target]: row[target] }}
            // url={`${url}_insert`}
            url={"/meal_insert"}
            children={Inputs}
            handleSubmit={handleSubmit}
          />
          <button onClick={cancelDisplay}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setDisplay("ADD")}>Add Additional Food</button>
      )}
    </div>
  );
};

export default CollectionDetail;
