import React from "react";

/* 
component adds CRUD buttons to a table header
selectedRow controlls which button(s) is(are) selectable
setDisplay controls which modal panel is shown
*/

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
