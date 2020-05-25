import React, { useMemo } from "react";
import { useTable } from "react-table";
import { sendRow } from "../utils/utils";

const DelTable = ({
  columns,
  info,
  setDeletePrompt,
  selectedRow,
  setLoaded,
}) => {
  const data = useMemo(() => info, [info]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <>
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
        <button
          onClick={() => {
            sendRow(selectedRow.original["idfood"], "/food_delete");
            setDeletePrompt(false);
            setLoaded(false);
          }}
        >
          Delete
        </button>
        <button onClick={() => setDeletePrompt(false)}>Cancel</button>
      </span>
    </>
  );
};

export default DelTable;
