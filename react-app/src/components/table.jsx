import React, { useMemo } from "react";
import { useTable } from "react-table";

function Table({ headers, info }) {
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
  // calling table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  //   boilerplate React-Table Render
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
