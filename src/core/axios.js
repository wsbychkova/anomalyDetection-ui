import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 30000,
    headers: {Authorization: localStorage.getItem("usertoken")}
})

