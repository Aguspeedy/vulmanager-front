import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://192.168.1.7:4000',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
