import React, { createContext } from "react";
import CookedImg from "../components/cookedImg";
import UnCookedImg from "../components/uncookedImg";

const tableSpecs = {
  //
  food: {
    title: "Food",
    url: `/food`,
    hiddenCols: ["idfood"],
    replace: { cooked: { 1: <CookedImg />, 0: <UnCookedImg /> } },
  },
  //
  meallist: {
    title: "Meal Lists",
    url: `/meallist`,
    hiddenCols: [],
    replace: {},
  },
};

const TableContext = createContext({ tableSpecs });

export const TableProvider = TableContext.Provider;
export default TableContext;
