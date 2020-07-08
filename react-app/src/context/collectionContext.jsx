import React, { createContext, useContext } from "react";
import CookedImg from "../assets/cookedImg";
import UnCookedImg from "../assets/uncookedImg";
import detailSpecs from "./detailspecs";
import CollectionDetail from "../components/collectiondetail";

const tableSpecs = {
  meal: {
    title: "Meals",
    url: "/meal",
    columns: [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👇" : "👉"}
          </span>
        ),
      },
      {
        Header: "Meal",
        accessor: "meal_name",
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
        Header: "Cooked",
        accessor: "cooked",

        Cell: ({ cell: { value } }) =>
          value > 0 ? <CookedImg /> : <UnCookedImg />,
      },
    ],
    dummyrow: {
      name: "",
      food_idfood: "",
      quantity: "",
    },
    Detail: <CollectionDetail specs={detailSpecs["meal"]} />,
  },
};

const CollectionContext = createContext(tableSpecs);

export const CollectionProvider = CollectionContext.Provider;
export default CollectionContext;
