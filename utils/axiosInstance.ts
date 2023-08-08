import axios, { AxiosInstance } from "axios";
import { isDev } from "./helpers";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 
  // isDev()
    // ? "http://localhost:5001/api"
    // :

    "http://localhost:5001/api",
});

export default axiosInstance;
