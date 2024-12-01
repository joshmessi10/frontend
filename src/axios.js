import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/http://localhost:3000', // This will route requests through the proxy
  withCredentials: true, // Ensure cookies are included in the request
});

export default axiosInstance;