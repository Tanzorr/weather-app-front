import {fetchWeatherFromAPI, submitWeatherToAPI} from '../services/weatherService';

export const SET_CITY = 'SET_CITY';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const SUBMIT_WEATHER_REQUEST = 'SUBMIT_WEATHER_REQUEST';

export const SUBMIT_WEATHER_SUCCESS = 'SUBMIT_WEATHER_SUCCESS';

export const SUBMIT_WEATHER_FAILURE = 'SUBMIT_WEATHER_FAILURE';

export const setCity = (city) => ({
    type: SET_CITY,
    payload: city
});

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_WEATHER_REQUEST });
        try {
            const data = await fetchWeatherFromAPI(city);
            console.log('data', data.response);
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
        }
    };
};

export const submitWeather = (data) => {
    return async (dispatch) => {
        dispatch({ type: SUBMIT_WEATHER_REQUEST });
        try {
            const response = await submitWeatherToAPI(data);
            dispatch({ type: SUBMIT_WEATHER_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: SUBMIT_WEATHER_FAILURE, payload: error.message });
        }
    };
}
