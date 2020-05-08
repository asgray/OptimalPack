import axios from "axios";
import { useState, useEffect } from "react";

export const useHTTP = (url) => {
  const [isLoaded, setLoaded] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    console.log("Made HTTP request to " + url);
    axios.get(url).then((res) => {
      setFetchedData(res);
      setLoaded(true);
    });
  }, [url]);
  return [isLoaded, fetchedData];
};
