import axios from "axios";

const BASE_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
