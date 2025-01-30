import {
    SET_CITY,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    SUBMIT_WEATHER_REQUEST, SUBMIT_WEATHER_SUCCESS, SUBMIT_WEATHER_FAILURE
} from '../actions/weatherActions';

const initialState = {
    city: '',
    data: null,
    loading: false,
    requestMessage: null,
    error: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.payload };
        case FETCH_WEATHER_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_WEATHER_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_WEATHER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SUBMIT_WEATHER_REQUEST:
            return { ...state, loading: true, error: null };
        case SUBMIT_WEATHER_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SUBMIT_WEATHER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default weatherReducer;
