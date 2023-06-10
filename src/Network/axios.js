import axios from 'axios';


export const axiosClient = axios.create({
    // baseURL: 'http://51.124.185.37',
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Specify the allowed HTTP methods
      
    }
  });