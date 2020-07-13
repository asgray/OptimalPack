import React from "react";
import CookedImg from "../assets/cookedImg";
import UnCookedImg from "../assets/uncookedImg";
import MealInputs from "../components/inputforms/mealinputs";

const detailSpecs = {
  meal: {
    url: "/meal_detail",
    target: "meal_name",
    columns: [
      {
        Header: "Quantity",
        accessor: "quantity",
      },
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
        Header: "Cooked",
        accessor: "cooked",
        Cell: ({ cell: { value } }) =>
          value === 0 ? <UnCookedImg /> : <CookedImg />,
      },
    ],
    Inputs: <MealInputs />,
    dummyrow: {
      meal_name: "",
      food_idfood: "",
      quantity: "",
    },
  },
};

export default detailSpecs;
