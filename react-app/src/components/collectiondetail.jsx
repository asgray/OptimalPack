import React, { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import Loading from "./loading";
import CollectionTable from "./collectiontable";
import axios from "axios";

/*

*/

const CollectionDetail = ({ specs }) => {
  const { url, columns } = specs;

  // DATA STUFF
  const [fetchedRows, setFetchedRows] = useState([]); // rows holds info from API call
  const [loaded, setLoaded] = useState(false); // boolean shows if API call has completed
  useEffect(() => {
    // API call
    (async () => {
      const result = await axios.get(url);
      setFetchedRows(result.data);
      setLoaded(true);
    })();
  }, [url, loaded]);

  // memoize API data for table
  const data = useMemo(() => fetchedRows, [fetchedRows]);
  // initialize all table variables
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <div className="Collection">
      CHORF
      {/* {loaded ? (
        <CollectionTable
          getTableBodyProps={getTableBodyProps}
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          rows={rows}
          prepareRow={prepareRow}
        />
      ) : (
        <Loading />
      )} */}
    </div>
  );
};

export default CollectionDetail;
