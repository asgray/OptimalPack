import React from "react";
import CookedImg from "../assets/cookedImg";
import UnCookedImg from "../assets/uncookedImg";
import detailSpecs from "./detailspecs";
import CollectionDetail from "../components/collectiondetail";
import MealInputs from "../components/inputforms/mealinputs";

const collectionSpecs = {
  meal: {
    title: "Meals",
    url: "/meal",
    columns: [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
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
      meal_name: "",
      food_idfood: "",
      quantity: "",
    },
    Detail: <CollectionDetail specs={detailSpecs["meal"]} />,
    Inputs: <MealInputs />,
  },
};

export default collectionSpecs;
