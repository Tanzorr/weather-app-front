// eslint-disable-next-line react/prop-types
const WeatherButtons = ({
  fetchApiCityWeather,
  fetchDbCityWeather,
  loading,
}) => (
  <>
    <button
      className="btn btn-primary"
      onClick={fetchApiCityWeather}
      disabled={loading}
    >
      Get weather from API
    </button>
    <button className="btn btn-success" onClick={fetchDbCityWeather}>
      Get weather from DB
    </button>
  </>
);

export default WeatherButtons;
