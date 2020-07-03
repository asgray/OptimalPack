import axios from "axios";
import { useState, useEffect } from "react";

export const useGET = (url) => {
  const [isLoaded, setLoaded] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    console.log("Made HTTP request to " + url);
    axios.get(url).then((res) => {
      setFetchedData(res);
      setLoaded(true);
      console.log(`${url} fetched`);
    });
  }, [url]);
  return [isLoaded, fetchedData];
};
