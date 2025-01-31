import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherCard from "./components/WeatherCard.jsx";
import WeatherTable from "./components/WeatherTable.jsx";
import { useWeather } from "./hooks/useWeather.js";

function App() {
  const {
    inputValue, setInputValue,
    weatherData, loading, error, serverMessage,
    fetchApiCityWeather, fetchDbCityWeather, submitCityWeatherData
  } = useWeather();

  return (
      <div className="container">
        <h1 className="text-center">Weather forecast</h1>
        <div className="d-flex justify-content-between gap-3 mb-3">
          <input type="search"
                 className="form-control w-50"
                 placeholder="Enter city name"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn btn-primary" onClick={fetchApiCityWeather} disabled={loading}>
            Get weather from API
          </button>
          <button className="btn btn-success" onClick={fetchDbCityWeather}>
            Get weather from DB
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {loading && <div className="alert alert-info">Loading...</div>}
        {serverMessage && <div className="alert alert-success">{serverMessage.message}</div>}

        {weatherData?.list?.length ? (
            <div className="content">
              <WeatherCard weatherData={weatherData} submitCityWeatherData={submitCityWeatherData} />
              <WeatherTable weatherList={weatherData.list} />
            </div>
        ) : (
            !loading && <div className="alert alert-danger">No data found!</div>
        )}
      </div>
  );
}

export default App;
