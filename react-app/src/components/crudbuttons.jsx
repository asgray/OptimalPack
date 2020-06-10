import React from "react";

const CRUDButtons = ({ selectedRow, setDisplay }) => {
  return (
    <div className="CRUDButtons">
      <button
        disabled={selectedRow ? "" : "disabled"}
        onClick={() => setDisplay("DELETE")}
      >
        Delete
      </button>
      <button
        disabled={selectedRow ? "" : "disabled"}
        onClick={() => setDisplay("EDIT")}
      >
        Edit
      </button>
      <button
        disabled={selectedRow ? "disabled" : ""}
        onClick={() => setDisplay("ADD")}
      >
        Add New Row
      </button>
    </div>
  );
};
export default CRUDButtons;
