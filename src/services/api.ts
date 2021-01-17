import axios from 'axios';

const api = axios.create({
  baseURL: 'https://floating-reef-30152.herokuapp.com',
});

export default api;