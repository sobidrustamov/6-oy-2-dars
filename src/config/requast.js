import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://nt-shopping-list.onrender.com/api",
});

// customAxios.interceptors.request.use(
//   (config) => {
//     config.headers = {
//       ...config.headers,
//       token: localStorage.getItem("token"),
//     };

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// customAxios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default customAxios;
