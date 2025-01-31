import {
  SET_CITY,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SUBMIT_WEATHER_REQUEST,
  SUBMIT_WEATHER_SUCCESS,
  SUBMIT_WEATHER_FAILURE,
  GET_WEATHER_FROM_DB_REQUEST,
  GET_WEATHER_FROM_DB_SUCCESS,
  GET_WEATHER_FROM_DB_FAILURE,
  SET_ERROR,
} from './weatherActions.js';

const initialState = {
  city: '',
  data: null,
  loading: false,
  requestMessage: null,
  error: null,
};

const handleRequest = (state) => ({
  ...state,
  loading: true,
  error: null,
  requestMessage: null,
});

const handleSuccess = (state, payload, isMessage = false) => ({
  ...state,
  loading: false,
  ...(isMessage ? { requestMessage: payload } : { data: payload }),
});

const handleFailure = (state, payload) => ({
  ...state,
  loading: false,
  error: payload,
});

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload };

    case FETCH_WEATHER_REQUEST:
    case SUBMIT_WEATHER_REQUEST:
    case GET_WEATHER_FROM_DB_REQUEST:
      return handleRequest(state);

    case FETCH_WEATHER_SUCCESS:
    case GET_WEATHER_FROM_DB_SUCCESS:
      return handleSuccess(state, action.payload);

    case SUBMIT_WEATHER_SUCCESS:
      return handleSuccess(state, action.payload, true);

    case FETCH_WEATHER_FAILURE:
    case SUBMIT_WEATHER_FAILURE:
    case GET_WEATHER_FROM_DB_FAILURE:
      return handleFailure(state, action.payload);

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default weatherReducer;
