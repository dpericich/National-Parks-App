import axios from 'axios';

export const npsAPI = axios.create({
    baseURL : 'https://developer.nps.gov/api/v1/',
})

export const openWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast/'
})