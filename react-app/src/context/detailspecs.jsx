import React, { createContext } from "react";
import CookedImg from "../assets/cookedImg";
import UnCookedImg from "../assets/uncookedImg";

const detailSpecs = {
  meal: {
    url: "/meal_detail",
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
  },
};

// const DetailContext = createContext(tableSpecs);

// export const DetailProvider = DetailContext.Provider;
export default detailSpecs;
// export const tableSpecs
