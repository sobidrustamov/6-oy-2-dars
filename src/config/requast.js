import axios from "axios";
import { loadState } from "../lib/storage";

const customAxios = axios.create({ baseURL: import.meta.env.VITE_MAIN_URL });

customAxios.interceptors.request.use(
  (config) => {
    const token = loadState("user");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.accessToken}`,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
