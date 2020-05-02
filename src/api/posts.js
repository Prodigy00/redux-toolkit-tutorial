import axios from "axios";

const API = process.env.REACT_APP_DATA;

const posts = axios.create({
  baseURL: API,
});

export default posts;
