import React, { useState, useEffect, useMemo, cloneElement } from "react";
import { useTable, useExpanded, useSortBy, usePagination } from "react-table";
import TableHeader from "./tableheader";
import Loading from "./loading";
import CollectionTable from "./collectiontable";
import axios from "axios";
import InputForm from "./inputform";
import { sendRow } from "../utils/utils";

/*

*/

const CollectionPanel = ({ specs }) => {
  const { url, columns, title, Detail, Inputs, dummyrow } = specs;

  const renderRowSubComponent = React.useCallback(
    ({ row }) => cloneElement(Detail, { row: row.original }),
    [Detail]
  );
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

  // memoize API data for table
  const data = useMemo(() => rows, [rows]);
  // initialize all table variables
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    visibleColumns,
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
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useSortBy,
    useExpanded,
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

  // modal inputs
  const [display, setDisplay] = useState("none"); // string determines what, if any modal panels are rendered
  // method rests modal panels and selections
  const cancelDisplay = () => {
    setDisplay("none");
  };

  const handleSubmit = (e, newRow, url) => {
    e.preventDefault();
    sendRow(newRow, url);
    setLoaded(false);
    cancelDisplay();
  };

  return (
    <div className="CollectionPanel">
      <h1>{title}</h1>
      {/* data table with header and footer */}
      {/* rendered when API call completes */}
      <TableHeader {...headerProps} />
      {loaded ? (
        <CollectionTable
          getTableBodyProps={getTableBodyProps}
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          page={page}
          prepareRow={prepareRow}
          visibleColumns={visibleColumns}
          renderRowSubComponent={renderRowSubComponent}
        />
      ) : (
        <Loading />
      )}
      <TableHeader {...headerProps} />
      {display === "ADD" ? (
        <div className="modalpanel">
          <InputForm
            baseRow={dummyrow}
            url={`${url}_insert`}
            children={Inputs}
            handleSubmit={handleSubmit}
          />
          <button onClick={cancelDisplay}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setDisplay("ADD")}>Add New Meal</button>
      )}
    </div>
  );
};

export default CollectionPanel;
