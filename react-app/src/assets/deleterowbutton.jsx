import React from "react";
import del from "./delete.jpg";
import { sendRow } from "../utils/utils";

const DeleteImg = ({ id }) => {
  return (
    <>
      <input
        type="image"
        src={del}
        alt=""
        onClick={() => sendRow(id, "/food_delete")}
      />
    </>
  );
};

export default DeleteImg;
