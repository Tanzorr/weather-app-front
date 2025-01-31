import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000';

export const fetchWeatherFromAPI = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather/${city}`);
        console.log('✅ Response:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Серверна помилка (4xx, 5xx)
            console.log('❌ Server Error:', error.response.data);
            return { error: error.response.data };
        } else if (error.request) {
            // Запит відправлено, але відповіді немає
            console.log('❌ No Response from Server:', error.request);
            return { error: 'No response from server. Please try again later.' };
        } else {
            // Інші помилки (мережеві, неправильний запит тощо)
            console.log('❌ Request Error:', error.message);
            return { error: error.message };
        }
    }
};

export const submitWeatherToDb = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/weather`, data);
        console.log('✅ Response:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Серверна помилка (4xx, 5xx)
            console.error('❌ Server Error:', error.response.data);
            return { error: error.response.data };
        } else if (error.request) {
            // Запит був відправлений, але відповіді немає
            console.error('❌ No Response from Server:', error.request);
            return { error: 'No response from server. Please try again later.' };
        } else {
            // Інші помилки (мережеві, неправильний запит тощо)
            console.error('❌ Request Error:', error.message);
            return { error: error.message };
        }
    }
};

export const loadWeatherFromDb = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather-load/${city}`);
        console.log('✅ Response:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Серверна помилка (4xx, 5xx)
            console.error('❌ Server Error:', error.response.data);
            return { error: error.response.data };
        } else if (error.request) {
            // Запит був відправлений, але відповіді немає
            console.error('❌ No Response from Server:', error.request);
            return { error: 'No response from server. Please try again later.' };
        } else {
            // Інші помилки (на рівні налаштувань або мережі)
            console.error('❌ Request Error:', error.message);
            return { error: error.message };
        }
    }
};
