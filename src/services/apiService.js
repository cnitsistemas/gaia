import axios from "axios";
import { API_URL } from '../../config';

// axios instance
const api = axios.create({
    responseType: 'json',
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
});

export default api;