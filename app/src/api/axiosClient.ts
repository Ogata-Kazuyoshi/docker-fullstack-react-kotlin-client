import axios from 'axios';

console.log('VITE_NODE_ENV : ', import.meta.env.VITE_NODE_ENV);
const BaseURL =
  import.meta.env.VITE_NODE_ENV === 'production'
    ? // ? 'https://docker-knex-postgres.onrender.com/data'
      'https://fullstack-docker-test.onrender.com/api/v1/images/all'
    : 'http://localhost:6200/api/v1/images/all';
// const BaseURL = 'https://docker-knex-postgres.onrender.com/data';
console.log('BaseURL : ', BaseURL);

const axiosClient = axios.create({
  baseURL: BaseURL,
});

export default axiosClient;
