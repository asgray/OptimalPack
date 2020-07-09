import React from "react";
import CookedImg from "../assets/cookedImg";
import UnCookedImg from "../assets/uncookedImg";
import FoodInputs from "../components/inputforms/foodinputs";
import GearInputs from "../components/inputforms/gearinputs";
import GearTypeInputs from "../components/inputforms/geartypeinputs";

const CRUDSpecs = {
  food: {
    title: "Food",
    url: "/food",
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
      name: "",
      brand: "",
      weight: "",
      calories: "",
      protein: "",
      servings: "",
      cooked: 1,
    },
    Inputs: <FoodInputs />,
  },

  gear: {
    title: "Gear",
    url: "/gear",
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
        Header: "Type",
        accessor: "gear_type_type",
      },
    ],
    dummyrow: {
      name: "",
      brand: "",
      weight: "",
      gear_type_type: "",
    },
    Inputs: <GearInputs />,
  },

  gear_type: {
    title: "Gear Type",
    url: "/gear_type",
    columns: [
      {
        Header: "Gear Type",
        accessor: "type",
      },
      {
        Header: "Description",
        accessor: "notes",
      },
    ],
    dummyrow: {
      type: "",
      notes: "",
    },
    Inputs: <GearTypeInputs />,
  },
};

export default CRUDSpecs;
