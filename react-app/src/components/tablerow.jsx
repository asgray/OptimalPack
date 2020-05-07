import React from "react";

function TableRow(props) {
  // data contains the data for each row as a dictionary, id is the table index column
  // colorder is a list of column headers in table order
  const { data, id, colorder } = props;
  // find the element that will serve as the row key
  let key = data[id];
  return (
    // assign row key
    <tr key={key}>
      {colorder.map((col) => {
        // add elements to the row in column order
        // exclude id column
        if (col !== id) {
          let content;
          // change content if cooked or not
          if (col === "cooked") {
            if (data[col] === 1) {
              content = "yes";
            } else {
              content = "no";
            }
          } else {
            // otherwise render item data
            content = data[col];
          }
          return <td key={col.toString() + data[col].toString()}>{content}</td>;
        } else {
          return null;
        }
      })}
    </tr>
  );
}

export default TableRow;
