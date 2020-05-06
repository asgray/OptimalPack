import React from "react";

function TableRow(props) {
  // find the element that will serve as the row key
  let key = props.info[props.id];
  return (
    // assign row key
    <tr key={key}>
      {props.colorder.map((col) => {
        // add elements to the row in column order

        let content;
        // exclude id column
        if (col !== props.id) {
          // change content if cooked or not
          if (col === "cooked") {
            if (props.info[col] === 1) {
              content = "yes";
            } else {
              content = "no";
            }
          } else {
            // otherwise render item data
            content = props.info[col];
          }
          return (
            <td key={col.toString() + props.info[col].toString()}>{content}</td>
          );
        }
      })}
    </tr>
  );
}

export default TableRow;
