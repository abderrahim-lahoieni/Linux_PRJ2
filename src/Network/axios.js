import axios from 'axios';
import { mapGetters } from 'vuex';
export const axiosClient = axios.create({
  ...mapGetters(['getSharedValues']),
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8081',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
});


  // axiosClient.interceptors.request.use(
  //   config => {
  //     config.headers['Access-Control-Allow-Origin'] = 'http://localhost:8081';
  //     config.headers['Access-Control-Allow-Methods'] = 'get, POST, PUT, DELETE';
  //     config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );