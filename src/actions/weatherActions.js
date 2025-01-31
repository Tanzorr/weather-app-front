import {fetchWeatherFromAPI, loadWeatherFromDb, submitWeatherToDb} from '../services/weatherService';

export const SET_CITY = 'SET_CITY';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const SUBMIT_WEATHER_REQUEST = 'SUBMIT_WEATHER_REQUEST';

export const SUBMIT_WEATHER_SUCCESS = 'SUBMIT_WEATHER_SUCCESS';

export const SUBMIT_WEATHER_FAILURE = 'SUBMIT_WEATHER_FAILURE';

export const GET_WEATHER_FROM_DB_REQUEST = 'GET_WEATHER_FROM_DB_REQUEST';

export const GET_WEATHER_FROM_DB_SUCCESS = 'GET_WEATHER_FROM_DB_SUCCESS';

export const GET_WEATHER_FROM_DB_FAILURE = 'GET_WEATHER_FROM_DB_FAILURE';

export const SET_ERROR = 'SET_ERROR';

export const setCity = (city) => ({
    type: SET_CITY,
    payload: city
});

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_WEATHER_REQUEST });
        try {
            const data = await fetchWeatherFromAPI(city);
            if(data.error){
                return dispatch({ type: FETCH_WEATHER_FAILURE, payload: data.error.message });
            }else {
                dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
            }
        } catch (error) {
            dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
        }
    };
};

export const submitWeather = (data) => {
    return async (dispatch) => {
        dispatch({ type: SUBMIT_WEATHER_REQUEST });
        try {
            const response = await submitWeatherToDb(data);
            console.log('data from submit', response);
            dispatch({ type: SUBMIT_WEATHER_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: SUBMIT_WEATHER_FAILURE, payload: error.message });
        }
    };
}


export const getWeatherFromDb = (city) => {
    return async (dispatch) => {
        dispatch({ type: GET_WEATHER_FROM_DB_REQUEST });
        try {
            const data = await loadWeatherFromDb(city);

            if(data.error){
                return dispatch({ type: GET_WEATHER_FROM_DB_FAILURE, payload: data.error });
            }else {
                dispatch({ type: GET_WEATHER_FROM_DB_SUCCESS, payload: data });
            }
        } catch (error) {
            console.log('error cath', error);
            dispatch({ type: GET_WEATHER_FROM_DB_FAILURE, payload: error.message });
        }
    };
}
