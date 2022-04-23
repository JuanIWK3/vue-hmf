import axios from 'axios';

export const baseURL = "https://homemoviefestival.herokuapp.com";

export default axios.create({ baseURL: baseURL });


