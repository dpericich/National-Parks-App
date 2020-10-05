import axios from 'axios';

export const npsAPI = axios.create({
    baseURL : 'https://developer.nps.gov/api/v1/',
})
