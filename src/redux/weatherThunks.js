import {
    fetchWeatherFromAPI,
    loadWeatherFromDb,
    submitWeatherToDb
} from "../services/weatherService.js";

import {
    FETCH_WEATHER_FAILURE,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    GET_WEATHER_FROM_DB_FAILURE,
    GET_WEATHER_FROM_DB_REQUEST,
    GET_WEATHER_FROM_DB_SUCCESS,
    SUBMIT_WEATHER_FAILURE,
    SUBMIT_WEATHER_REQUEST,
    SUBMIT_WEATHER_SUCCESS
} from "./weatherActions.js";

const handleAsyncRequest = async (dispatch, actionTypes, asyncFn, payload = null) => {
    const [REQUEST, SUCCESS, FAILURE] = actionTypes;
    dispatch({ type: REQUEST });

    try {
        const data = payload ? await asyncFn(payload) : await asyncFn();

        if (data.error) {
            dispatch({ type: FAILURE, payload: data.error.message || data.error });
        } else {
            dispatch({ type: SUCCESS, payload: data });
        }
    } catch (error) {
        console.error(`Error in ${REQUEST}:`, error);
        dispatch({ type: FAILURE, payload: error.message });
    }
};


export const fetchWeather = (city) => (dispatch) =>
    handleAsyncRequest(dispatch, [FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE], fetchWeatherFromAPI, city);


export const submitWeather = (data) => (dispatch) =>
    handleAsyncRequest(dispatch, [SUBMIT_WEATHER_REQUEST, SUBMIT_WEATHER_SUCCESS, SUBMIT_WEATHER_FAILURE], submitWeatherToDb, data);


export const getWeatherFromDb = (city) => (dispatch) =>
    handleAsyncRequest(dispatch, [GET_WEATHER_FROM_DB_REQUEST, GET_WEATHER_FROM_DB_SUCCESS, GET_WEATHER_FROM_DB_FAILURE], loadWeatherFromDb, city);
