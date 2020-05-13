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
      "idfood",
      "name",
      "brand",
      "weight",
      "calories",
      "protein",
      "servings",
      "cooked",
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
