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

    dummyrow: {
      name: undefined,
      brand: undefined,
      weight: undefined,
      calories: undefined,
      protein: undefined,
      servings: undefined,
      cooked: undefined,
    },
  },
};

const TableContext = createContext(tableSpecs);

export const TableProvider = TableContext.Provider;
export default TableContext;
