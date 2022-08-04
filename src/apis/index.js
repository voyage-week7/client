import axios from 'axios';

const SERVER_URL = 'http://52.79.98.62:8080';

export const instance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `BEARER ${window.localStorage.getItem('token')}`,
  };
  return config;
});

export const apis = {
  checkId: (id) => instance.get(`/api/checkUser/${id}`),
  signUp: async (id, pw, username) => instance.post('/api/signup', { id, pw, username }),
  logIn: async (id, pw) => instance.post('/api/signin', { id, pw }),
  signOut: async () => instance.delete('/api/users'),
  getUser: async () => instance.get('/api/users'),
  getReservations: async () => instance.get('/api/users/reservations'),
  getReviews: async () => instance.get('/api/users/reivews'),
  patchUser: async (data) => instance.patch('/api/users', data),
  createReview: async (storeId, { title, content, image }) =>
    instance.post(`/api/review/stores/${storeId}`, { title, content, image }),
  getStoreDetail: async (id) => instance.get(`/api/stores/${id}`),
  getStoresWithFilter: async (filter = '', sort = '', word = '', minPrice = '', maxPrice = '') =>
    instance.get(`/api/stores?&filter=${filter}&sort=${sort}&word=${word}&minPrice=${minPrice}&maxPrice=${maxPrice}`),
  getStores: async () => instance.get('/api/stores'),
  reservate: async (storeId, { date, members }) =>
    instance.post(`/api/reservation/store/${storeId}`, {
      date,
      members,
    }),
  cancelReservate: async (id) => instance.delete(`/api/reservation/${id}`),
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return instance.post(`/api/upload`, formData);
  },
};
