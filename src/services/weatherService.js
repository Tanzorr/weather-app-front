import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000';

export const fetchWeatherFromAPI = async (city) => {
    return fetch(`${BASE_URL}/weather/${city}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to fetch data');
    });
};

export const submitWeatherToAPI = async (data) => {
    return axios.post(`${BASE_URL}/weather`, data).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log('error', error);
    });
}

export const getWeatherFromDb = async (city) => {
    return fetch(`${BASE_URL}/weather-load/${city}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to fetch data');
    });
}
