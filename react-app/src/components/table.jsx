import React, { useMemo, useEffect, useState } from "react";
import { useTable, useSortBy, useRowSelect } from "react-table";
import DelTable from "./deltable";

// boilerplate from React-Table row slection with checkboxes
const IndeterminateRadio = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;
    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return (
      <>
        <input name="select" type="radio" ref={resolvedRef} {...rest} />
      </>
    );
  }
);
// -----

const Table = ({ info, columns }) => {
  // TABLE PREP
  // React-Table requires memoized data for inputs
  const data = useMemo(() => info, [info]);
  const [selectedRow, setSelectedRow] = useState(null);

  // calling table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    // state: { selectedRowPaths },
  } = useTable(
    {
      columns,
      data,
      autoResetSelectedRows: false,
      initialState: { selectedRow },
    },
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a radio button
          Cell: ({ row }) => (
            <div>
              <IndeterminateRadio
                onClick={() => {
                  setSelectedRow(row.original);
                }}
                {...row.getToggleRowSelectedProps()}
              />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  // END TABLE PREP

  return (
    <>
      {selectedFlatRows.length ? (
        <DelTable
          columns={columns}
          // info={selectedFlatRows.map((row) => {
          //   return row.original;
          // })}
          info={[selectedRow]}
        />
      ) : null}
      {/* <input type="submit" value="TEST" onClick={test} /> */}
      <h1>Food</h1>
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
    </>
  );
};

export default Table;
