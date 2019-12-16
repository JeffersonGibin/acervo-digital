import axios from 'axios';

const API_HOST = 'http://localhost:4000/v1/'

const API = axios.create({
    baseURL: API_HOST
});

const responseHandler = (err) => {
    alert("Erro ao processar dados!")
    return Promise.reject(err);
}

const success = (config) => {
    let token = sessionStorage.getItem("session")

    if (token) {
        config.headers.Authorization = token
    }

    return config
}

API.interceptors.request.use(success , responseHandler)

export default API;