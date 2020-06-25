import React, { useMemo } from "react";
import { useTable } from "react-table";

/*
component renders a single row react-table of the selected row
columns are the same columns in the CRUDpanel
info is the selected row object
deleteRow is the method that handles the delete action
*/

const DelTable = ({ columns, info, deleteRow }) => {
  const data = useMemo(() => info, [info]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <div className="deltable">
      <h3>Are You Sure Want To Delete This Row?</h3>
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
      <input type="submit" value="Delete" onClick={deleteRow} />
    </div>
  );
};

export default DelTable;
