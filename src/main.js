//import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from '../store';
// {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"/> */}
// createApp(App).use(router).use(store).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '../store';
import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api'; // Remplacez par l'URL de votre API

// axios.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem('accessToken');

//   if (accessToken) {
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//   }

//   return config;
// });

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');