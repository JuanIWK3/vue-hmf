import axios from 'axios';

export const baseURL = 'https://homemoviefestival.herokuapp.com';

const api = axios.create({ baseURL });

export default api;
