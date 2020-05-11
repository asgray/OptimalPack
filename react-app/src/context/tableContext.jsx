import React, { createContext } from "react";
import CookedImg from "../assets/cookedImg";
import UnCookedImg from "../assets/uncookedImg";
import EditImg from "../assets/editrowbutton";
import DeleteImg from "../assets/deleterowbutton";

const tableSpecs = {
  //
  food: {
    title: "Food",
    url: `/food`,
    hiddenCols: [],
    replace: { cooked: { 1: <CookedImg />, 0: <UnCookedImg /> } },
    newCols: { edit: <EditImg />, delete: <DeleteImg /> },
  },
  add: {
    title: "Add Rows",
    hiddenCols: [],
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
