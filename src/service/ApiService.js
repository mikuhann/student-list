import axios from 'axios';

const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const configHeaders = (config) => {
  config.headers['Content-Type'] = 'application/json';

  return config;
};

apiService.interceptors.request.use(configHeaders, (error) => {
  Promise.reject(error);
});

export default apiService;
