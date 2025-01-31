import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const fetchWeatherFromAPI = async (city) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/weather/${city}`);

    return data;
  } catch (error) {
    return serverErrorHandling(error);
  }
};

export const submitWeatherToDb = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/weather`, data);

    return response.data;
  } catch (error) {
    return serverErrorHandling(error);
  }
};

export const loadWeatherFromDb = async (city) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/weather-load/${city}`);

    return data;
  } catch (error) {
    return serverErrorHandling(error);
  }
};

function serverErrorHandling(error) {
  if (error.response) {
    console.error('❌ Server Error:', error.response.data);
    return { error: error.response.data };
  } else if (error.request) {
    console.error('❌ No Response from Server:', error.request);
    return { error: 'No response from server. Please try again later.' };
  } else {
    console.error('❌ Request Error:', error.message);
    return { error: error.message };
  }
}
