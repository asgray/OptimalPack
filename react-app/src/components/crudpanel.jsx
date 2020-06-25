import { useTable, useSortBy, useRowSelect, usePagination } from "react-table";
import React, { useState, useContext, useEffect, useMemo } from "react";
import TableProvider from "../context/tableContext";
import { sendRow } from "../utils/utils";
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
  const { url, columns, title, dummyrow, keyval, Inputs } = context["food"];

  // DATA STUFF
  const [rows, setRows] = useState([]); // rows holds info from API call
  const [loaded, setLoaded] = useState(false); // boolean shows if API call has completed
  useEffect(() => {
    // API call
    (async () => {
      const result = await axios.get(url);
      setRows(result.data);
      setLoaded(true);
    })();
  }, [url, loaded]);

  // modal inputs
  const [display, setDisplay] = useState("none"); // string determines what, if any modal panels are rendered
  const [selectedRow, setSelectedRow] = useState(null); // saves selected row in state
  // method rests modal panels and selections
  const cancelDisplay = () => {
    setDisplay("none");
    setSelectedRow(null);
  };

  // memoize API data for table
  const data = useMemo(() => rows, [rows]);
  // initialize all table variables
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
  // store header props separately
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

  const deleteRow = () => {
    sendRow(selectedRow.original[keyval], "/food_delete");
    setLoaded(false);
    cancelDisplay();
  };

  const handleSubmit = (e, newRow, url) => {
    console.log(newRow, url);

    e.preventDefault();
    sendRow(newRow, url);
    setLoaded(false);
    cancelDisplay();
  };
  return (
    <div className="CRUDPanel">
      <h1>{title}</h1>

      {/* modal panels redndered conditionally */}
      {display === "ADD" && !selectedRow ? (
        <div className="modalpanel">
          <InputForm
            baseRow={dummyrow}
            handleSubmit={handleSubmit}
            url="/food_insert"
            children={Inputs}
          />
          <button onClick={cancelDisplay}>Cancel</button>
        </div>
      ) : null}
      {display === "EDIT" && selectedRow ? (
        <div className="modalpanel">
          <InputForm
            baseRow={selectedRow.original}
            url="/food_update"
            children={Inputs}
            handleSubmit={handleSubmit}
          />
          <button onClick={cancelDisplay}>Cancel</button>
        </div>
      ) : null}
      {display === "DELETE" && selectedRow ? (
        <div className="modalpanel">
          <DelTable
            columns={columns}
            info={[selectedRow.original]}
            deleteRow={deleteRow}
          />
        </div>
      ) : null}

      {/* buttons to control modal panels */}
      <CRUDButtons setDisplay={setDisplay} selectedRow={selectedRow} />

      {/* data table with header and footer */}
      {/* rendered when API call completes */}
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
