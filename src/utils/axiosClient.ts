import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/', 
});

export default axiosClient;