import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherCard from './components/WeatherCard.jsx';
import WeatherTable from './components/WeatherTable.jsx';
import { useWeather } from './hooks/useWeather.js';
import SearchInput from './components/SearchInput.js.jsx';
import WeatherAlerts from './components/WeatherAlerts.jsx';
import WeatherButtons from './components/WeatherButtons.jsx';

function App() {
  const {
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
  } = useWeather();

  return (
    <div className="container p-5">
      <h1 className="text-center">Weather forecast</h1>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onClear={clearState}
        />
        <WeatherButtons
          fetchApiCityWeather={fetchApiCityWeather}
          fetchDbCityWeather={fetchDbCityWeather}
          loading={loading}
        />
      </div>

      <WeatherAlerts
        error={error}
        loading={loading}
        serverMessage={serverMessage}
      />

      {weatherData?.list?.length ? (
        <div className="content">
          <WeatherCard
            weatherData={weatherData}
            submitCityWeatherData={submitCityWeatherData}
          />
          <WeatherTable weatherList={weatherData.list} />
        </div>
      ) : (
        !loading &&
        weatherData?.list.length === 0 && (
          <div className="alert alert-danger">No data found!</div>
        )
      )}
    </div>
  );
}

export default App;
