import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {selectCity, selectError, selectLoading, selectWeatherData} from "./selectors/weatherSelectors.js";
import {fetchWeather, setCity,submitWeather} from "./actions/weatherActions.js";

function App() {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const weatherData = useSelector(selectWeatherData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    dispatch(setCity(inputValue));
    dispatch(fetchWeather(inputValue));
  };


  const submitCityWeatherData = () => {
    const data = {
      city_name: weatherData.city.name,
      min_tmp: weatherData.list[0].main.temp_min,
      max_tmp: weatherData.list[0].main.temp_max,
      wind_speed: weatherData.list[0].wind.speed,
    }
    dispatch(submitWeather(data));
  }

  return (
      <>
        <div className="container p-4">
          <h1 className="text-center">Weather forecast</h1>
          <div className="d-flex justify-content-center gap-3 m-3">
            <input type="search"
                   className="form-control w-50"
                   id="search"
                   placeholder="Enter city name"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>Get weather form Api</button>
            <button className="btn btn-success">Get weather form Db</button>
          </div>
          <div className="row">
            <div className="card p-3">
              <h3>{weatherData && weatherData?.city.name }</h3>
              <b>period</b>
              <div>Start at: {weatherData && weatherData.list[0].dt_txt}</div>
              <div>Ends at: time {weatherData && weatherData.list[weatherData.list.length - 1].dt_txt}</div>
              <div className="mt-3">
                <button className="btn btn-success" onClick={submitCityWeatherData}>Save forecast</button>
              </div>
            </div>
          </div>
          <table className="table table-striped border mt-3">
            <thead>
            <tr>
              <th>date time</th>
              <th>max temp</th>
              <th>mint temp</th>
              <th>wind spead</th>
            </tr>
            </thead>
            <tbody>
            {weatherData && weatherData.list.map((item, index) => (
                <tr key={index}>
                  <td>{item.dt_txt}</td>
                  <td>{item.main.temp_max}°C</td>
                  <td>{item.main.temp_min}%</td>
                  <td>{item.wind.speed}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>
  )
}

export default App
