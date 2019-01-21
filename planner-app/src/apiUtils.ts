import axios from "axios";
import handleError from "./handleError";
/** 
const SERVER_DOMAIN = "http://localhost:5000/";
const getHeaders = () => {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
};
// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${SERVER_DOMAIN}${path}`, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP PATCH Request - Returns Resolved or Rejected Promise
export const patch = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${SERVER_DOMAIN}${path}`, data, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${SERVER_DOMAIN}${path}`, data, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP DELETE Request - Returns Resolved or Rejected Promise
export const del = (path: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${SERVER_DOMAIN}${path}`, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};


const origin = "http://localhost:5000/";
export const get = (path: string) => {
  let url = origin + path;
  fetch(url)
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
};
*/
