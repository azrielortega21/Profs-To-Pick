import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  req.withCredentials = true;
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// user login api methods
export const loginUser = (user) => API.post('/login', user);

// professor api methods
export const addProf = (profData) => API.post('/professor/addProf', profData);
export const addProfsCsv = (profData) =>
  API.post('/professor/addProfsCsv', profData);
export const getAllProfs = () => API.get('/professor/getAllProfs');
export const addRating = (rating) => API.post('/professor/addRating', rating);
