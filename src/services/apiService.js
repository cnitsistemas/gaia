import axios from 'axios';
import { API_URL } from '../../config';

const api = axios.create({
    responseType: 'json',
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;