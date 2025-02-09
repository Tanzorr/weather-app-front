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
export const CLEAN_STATE = 'CLEAN_STATE';

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const clearAllState = () => ({
  type: CLEAN_STATE,
});
