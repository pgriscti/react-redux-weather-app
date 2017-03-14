import axios from 'axios';

const API_KEY = '38e186fcd4bc3b0f65c4bb0ee2bd0929'; // openweathermap api
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url); // returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
};
