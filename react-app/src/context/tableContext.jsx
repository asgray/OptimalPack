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
    inputFeilds: [
      {
        name: "name",
        optional: false,
        type: "text",
        hint: "Mac and Cheese",
      },
      { name: "brand", optional: true, type: "text", hint: "Kraft" },
      {
        name: "weight",
        optional: false,
        type: "number",
        hint: "Weight (g) per serving",
      },
      {
        name: "calories",
        optional: false,
        type: "number",
        hint: "Calories per serving",
      },
      {
        name: "protein",
        optional: false,
        type: "number",
        hint: "Protein (g) per serving",
      },
      {
        name: "servings",
        optional: false,
        type: "number",
        hint: "Servings per container",
      },
      { name: "cooked", optional: true, type: "checkbox", hint: false },
    ],
  },
};

const TableContext = createContext({ tableSpecs });

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
