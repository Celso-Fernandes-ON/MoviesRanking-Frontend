import axios from "axios";

export const api = axios.create({
    baseURL: 'https://moviesranking-backend.onrender.com'
})