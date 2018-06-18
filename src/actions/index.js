import axios from 'axios';

const API_KEY ='549404af4ae2612850ca9a17bab8d097';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fatchWeather(city) {
    const url = ROOT_URL+'q='+city+',th&appid='+API_KEY;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}