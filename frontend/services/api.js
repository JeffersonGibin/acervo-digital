import axios from 'axios';

const API_HOST = 'http://localhost:4000/v1/'
const API = axios.create({
    baseURL: API_HOST,
});

export default API;