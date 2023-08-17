import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.209.111.199/api/",
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
