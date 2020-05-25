import axios from "axios";

export const sendRow = async (row, url) => {
  var outdata = JSON.stringify(row);
  console.log("Saving Rows");
  console.log(outdata);
  const res = await axios.post(url, outdata, {
    headers: { "content-type": "application/json" },
  });
  console.log(res.data);
};
