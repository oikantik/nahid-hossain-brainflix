import axios from "axios";

const apiKey = "94bda852-bef2-45c8-bf7f-fc692c3a6c72";
const appUrl = "https://project-2-api.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: appUrl,
  params: {
    api_key: apiKey,
  },
});

export { axiosInstance, apiKey };
