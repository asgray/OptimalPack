import React, { useMemo } from "react";
import { useTable } from "react-table";

const DelTable = ({ columns, info, deleteRow, cancelDisplay }) => {
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
      <span>
        <input type="submit" value="Delete" onClick={deleteRow} />
        <input type="submit" value="Cancel" onClick={cancelDisplay} />
      </span>
    </div>
  );
};

export default DelTable;
