import React, { useMemo, useContext } from "react";
import { useTable } from "react-table";
import TableProvider from "../context/tableContext";
import EditImg from "../assets/editrowbutton";
import DeleteImg from "../assets/deleterowbutton";

function Table({ info, headers, type }) {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { hiddenCols, replace, keyval } = context[type];
  // add new columns to list
  headers.push("edit");
  headers.push("delete");

  // make any data replacements per specification
  var finalrows = info.map((row) => {
    // check each fiild to be edited
    for (let col in replace) {
      // extract replacement mapping for field
      let options = replace[col];
      // perform reassignment
      row[col] = options[row[col]];
    }
    row["edit"] = <EditImg />;
    row["delete"] = <DeleteImg id={row[keyval]} />;
    return row;
  });

  // TABLE PREP
  // React-Table requires memoized data for inputs
  var data = useMemo(() => finalrows, []);

  var columns = useMemo(
    () =>
      headers.map((col) => ({
        Header: col.charAt(0).toUpperCase() + col.slice(1),
        accessor: col,
      })),
    []
  );

  var initialState = useMemo(
    () => ({
      hiddenColumns: hiddenCols,
    }),
    []
  );

  // calling table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, initialState });
  // END TABLE PREP

  // boilerplate React-Table Render
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
