import axios from "axios";

// const apiKey = "94bda852-bef2-45c8-bf7f-fc692c3a6c72";
const appUrl = "http://localhost:7811/";

const axiosInstance = axios.create({
  baseURL: appUrl,
  // params: {
  //   api_key: apiKey,
  // },
});

export { axiosInstance };
