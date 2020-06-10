import { useTable, useSortBy, useRowSelect, usePagination } from "react-table";
import React, { useState, useContext, useEffect, useMemo } from "react";
import TableProvider from "../context/tableContext";
import TableHeader from "./tableheader";
import CRUDButtons from "./crudbuttons";
import InputForm from "./inputform";
import DelTable from "./deltable";
import Loading from "./loading";
import Table from "./table";
import axios from "axios";

const CRUDPanel = () => {
  // lookup specifications of table type from context
  const context = useContext(TableProvider);
  const { url, columns, title, dummyrow, keyval } = context["food"];

  // DATA STUFF
  const [rows, setRows] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      const result = await axios.get(url);
      setRows(result.data);
      setLoaded(true);
    })();
  }, [url, loaded]);

  // Booleans to display modal inputs
  const [display, setDisplay] = useState("none");
  const [selectedRow, setSelectedRow] = useState(null);
  const cancelDisplay = () => {
    setDisplay("none");
    setSelectedRow(null);
  };

  const data = useMemo(() => rows, [rows]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      autoResetSelectedRows: false,
      initialState: { selectedRow, pageIndex: 0, pageSize: 20 },
    },
    useSortBy,
    useRowSelect,
    usePagination
  );
  const headerProps = {
    gotoPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    nextPage,
    pageCount,
    pageIndex,
    pageOptions,
    pageSize,
    setPageSize,
  };
  return (
    <div className="CRUDPanel">
      <h1>{title}</h1>
      {display === "ADD" && !selectedRow ? (
        <>
          <InputForm setLoaded={setLoaded} editRow={dummyrow} />
          <input type="submit" onClick={cancelDisplay} value="Cancel" />
        </>
      ) : null}
      {display === "EDIT" && selectedRow ? (
        <>
          <InputForm setLoaded={setLoaded} editRow={selectedRow.original} />
          <input type="submit" onClick={cancelDisplay} value="Cancel" />
        </>
      ) : null}
      {display === "DELETE" && selectedRow ? (
        <>
          <DelTable
            setLoaded={setLoaded}
            columns={columns}
            info={[selectedRow.original]}
          />
          <input type="submit" onClick={cancelDisplay} value="Cancel" />
        </>
      ) : null}
      <CRUDButtons setDisplay={setDisplay} selectedRow={selectedRow} />
      <TableHeader {...headerProps} />
      {loaded ? (
        <Table
          getTableBodyProps={getTableBodyProps}
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          page={page}
          prepareRow={prepareRow}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      ) : (
        <Loading />
      )}
      <TableHeader {...headerProps} />
    </div>
  );
};

export default CRUDPanel;
