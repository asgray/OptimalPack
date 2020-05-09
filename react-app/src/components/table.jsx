import React, { useMemo, useContext } from "react";
import { useTable } from "react-table";
import TableProvider from "../context/tableContext";

function Table({ info, headers, type }) {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { title, hiddenCols } = context.tableSpecs[type];

  // React-Table requires memoized data for inputs
  var data = useMemo(() => info, [info]);
  var columns = useMemo(
    () =>
      headers.map((col) => ({
        Header: col.charAt(0).toUpperCase() + col.slice(1),
        accessor: col,
      })),
    [headers]
  );
  var initialState = useMemo(
    () => ({
      hiddenColumns: hiddenCols,
    }),
    [hiddenCols]
  );

  // calling table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, initialState });

  // boilerplate React-Table Render
  return (
    <>
      <h1>{title}</h1>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
