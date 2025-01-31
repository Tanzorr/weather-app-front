export const selectCity = (state) => state.weather.city;
export const selectWeatherData = (state) => state.weather.data;
export const selectLoading = (state) => state.weather.loading;
export const selectError = (state) => state.weather.error;

export const selectRequestMessage = (state) => state.weather.requestMessage;
