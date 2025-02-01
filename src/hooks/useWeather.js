import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  selectLoading,
  selectWeatherData,
  selectError,
  selectRequestMessage,
} from '../redux/weatherSelectors.js';
import {
  fetchWeather,
  getWeatherFromDb,
  submitWeather,
} from '../redux/weatherThunks.js';
import { clearAllState, SET_ERROR, setCity } from '../redux/weatherActions.js';
import { validateCity } from '../utils/validations.js';

export const useWeather = () => {
  const dispatch = useDispatch();

  const weatherData = useSelector(selectWeatherData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const serverMessage = useSelector(selectRequestMessage);

  const [inputValue, setInputValue] = useState('');

  const validateAndSetCity = (city) => {
    const error = validateCity(city);
    if (error) {
      dispatch(setCity(''));
      dispatch({ type: SET_ERROR, payload: error });
      return false;
    }
    return true;
  };

  const fetchApiCityWeather = () => {
    if (!validateAndSetCity(inputValue)) return;
    dispatch(setCity(inputValue));
    dispatch(fetchWeather(inputValue));
  };

  const fetchDbCityWeather = () => {
    if (!validateAndSetCity(inputValue)) return;
    dispatch(setCity(inputValue));
    dispatch(getWeatherFromDb(inputValue));
  };

  const submitCityWeatherData = () => {
    if (!weatherData?.list?.length) return;
    const data = {
      city_name: inputValue,
      timestamp_dt: weatherData.list[0].dt_txt,
      min_tmp: weatherData.list[0].main.temp_min,
      max_tmp: weatherData.list[0].main.temp_max,
      wind_speed: weatherData.list[0].wind.speed,
    };
    dispatch(submitWeather(data));
  };

  const clearState = () => {
    dispatch(clearAllState());
  };

  return {
    inputValue,
    setInputValue,
    weatherData,
    loading,
    error,
    serverMessage,
    fetchApiCityWeather,
    fetchDbCityWeather,
    submitCityWeatherData,
    clearState,
  };
};
