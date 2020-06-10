import React, { useMemo } from "react";
import { useTable } from "react-table";
import { sendRow } from "../utils/utils";

const DelTable = ({ columns, info, setLoaded }) => {
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
            sendRow(info[0]["idfood"], "/food_delete");
            setLoaded(false);
          }}
        >
          Delete
        </button>
      </span>
    </>
  );
};

export default DelTable;
