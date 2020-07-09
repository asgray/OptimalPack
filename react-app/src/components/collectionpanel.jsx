import React, { useState, useEffect, useMemo, cloneElement } from "react";
import { useTable, useExpanded, useSortBy, usePagination } from "react-table";
import TableHeader from "./tableheader";
import Loading from "./loading";
import CollectionTable from "./collectiontable";
import axios from "axios";

/*

*/

const CollectionPanel = ({ specs }) => {
  const { url, columns, title, Detail } = specs;

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
    </div>
  );
};

export default CollectionPanel;
