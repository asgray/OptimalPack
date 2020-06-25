import React from "react";

/*
component renders data from a react-table instance
all props are from react-table are are used to render the table
*/

const Table = ({
  getTableBodyProps,
  getTableProps,
  headerGroups,
  page,
  prepareRow,
  selectedRow,
  setSelectedRow,
}) => {
  return (
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
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              onClick={() => {
                selectedRow
                  ? selectedRow.id === row.id
                    ? setSelectedRow(null)
                    : setSelectedRow(row)
                  : setSelectedRow(row);
              }}
              {...row.getRowProps()}
              className={
                selectedRow ? (row.id === selectedRow.id ? "selected" : "") : ""
              }
            >
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
