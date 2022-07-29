import axios from 'axios';

const SERVER_URL = 'http://localhost:3030';
export const instance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config = config.headers = {
    Authorization: window.localStorage.getItem('token'),
  };
  return config;
});

export const apis = {
  login: (id, password) =>
    instance.post('/api/users', {
      id,
      password,
    }),
};
