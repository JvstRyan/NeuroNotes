import axios from "axios";

export const api = axios.create({
    baseURL: 'https://neuronotes.onrender.com/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const setAuthToken = (token: string | null) => {
    if(token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization']
    }
}