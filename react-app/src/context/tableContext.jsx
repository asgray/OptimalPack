import React, { createContext } from "react";
import CookedImg from "../assets/cookedImg";
import UnCookedImg from "../assets/uncookedImg";

const tableSpecs = {
  //
  food: {
    title: "Food",
    url: `/food`,
    keyval: "idfood",
    columns: [
      // {
      //   Header: "ID",
      //   accessor: "idfood",
      // },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Brand",
        accessor: "brand",
      },
      {
        Header: "Weight",
        accessor: "weight",
      },
      {
        Header: "Calories",
        accessor: "calories",
      },
      {
        Header: "Protein",
        accessor: "protein",
      },
      {
        Header: "Servings",
        accessor: "servings",
      },
      {
        Header: "Cooked",
        accessor: "cooked",
        Cell: ({ cell: { value } }) =>
          value === 0 ? <UnCookedImg /> : <CookedImg />,
      },
    ],
    hiddenCols: ["idfood"],
    replace: { cooked: { 1: <CookedImg />, 0: <UnCookedImg /> } },
  },
};

const TableContext = createContext(tableSpecs);

export const TableProvider = TableContext.Provider;
export default TableContext;

// Pattern
// key: {
//   title: false,
//   url: `/`,
//   hiddenCols: [],
//   replace: { targetcol: { key: replace, key: replace } },
//   newCols: { colname: hinthint },
// requiredCols: ["name"],
// },
