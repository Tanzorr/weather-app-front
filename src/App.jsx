import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import { selectLoading, selectWeatherData, selectError } from "./selectors/weatherSelectors.js";
import {fetchWeather, getWeatherFromDb, SET_ERROR, setCity, submitWeather} from "./actions/weatherActions.js";

function App() {
  const dispatch = useDispatch();

  const weatherData = useSelector(selectWeatherData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // eslint-disable-next-line no-unused-vars
  let dataSubmitted = false;
  const canDisplayFromDb = weatherData?.city?.updated_at && !loading && !weatherData?.message;
  const canDisplayFromApi= !weatherData?.city?.updated_at && !loading && !weatherData?.message;
  const canDisplayContent = weatherData?.list && weatherData?.list.length && !loading && !error;

  const validationInputCity = (city) => {
    if (city.length === 0) {
      return 'City name is required';
    }else if (city.length < 3) {
        return 'City name must be at least 3 characters';
    }else if (city.length > 50) {
        return 'City name must be less than 50 characters';
    }else if (!city.match(/^[a-zA-Z\s]*$/)) {
        return 'City name must contain only letters and spaces';
    }else if (city.match(/^\s/)) {
        return 'City name must not start with a space';
    }
    return null;
  }


  const prosedValidationInputCity = (city) => {
    console.log(city);
    const error = validationInputCity(city);
    if (error) {
      dispatch(setCity(''));
      return dispatch({ type: SET_ERROR, payload: error });
    }

    return error;
  }



  const [inputValue, setInputValue] = useState('');

  const fetchApiCityWeather = () => {
    if(prosedValidationInputCity(inputValue)) return;
    dataSubmitted = true;

    dispatch(setCity(inputValue));
    dispatch(fetchWeather(inputValue));
  };

  const submitCityWeatherData = () => {
    const data = {
      city_name: inputValue,
      min_tmp: weatherData.list[0].main.temp_min,
      max_tmp: weatherData.list[0].main.temp_max,
      wind_speed: weatherData.list[0].wind.speed,
    }
    dispatch(submitWeather(data));
  }

  const fetchDbCityWeather = () => {
    if(prosedValidationInputCity(inputValue)) return;
    dataSubmitted = true;

      dispatch(setCity(inputValue));
      dispatch(getWeatherFromDb(inputValue));
  }

console.log({weatherData, error});

  return (
      <>
        <div className="container">
          <h1 className="text-center">Weather forecast</h1>
          <div className="d-flex justify-content-between gap-3 mb-3">
            <input type="search"
                   className="form-control w-50"
                   id="search"
                   placeholder="Enter city name"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-primary" onClick={fetchApiCityWeather} disabled={loading}>Get weather form Api</button>
            <button className="btn btn-success" onClick={fetchDbCityWeather}>Get weather form Db</button>
            <hr/>
          </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading && <div className="alert alert-info">Loading...</div>}
           {weatherData && !weatherData?.list.length && <div className="alert alert-danger">No data find !!!</div>}
          { !!canDisplayContent && (
          <div className="content">
              <div className="card p-3">
                <h3>{weatherData && weatherData?.city?.name }</h3>

                {canDisplayFromDb&&(
                    <div className="db-data">
                      updated at: {weatherData && weatherData?.city?.updated_at}
                    </div>)}

                {canDisplayFromApi&&(
                    <div className="fetch-data-from-api">
                      <b>period</b>
                      <div>Start at: {weatherData && weatherData?.list[0]?.dt_txt}</div>
                      <div>Ends at: {weatherData && weatherData?.list[weatherData?.list.length - 1]?.dt_txt}</div>
                      <div className="mt-3">
                        <button className="btn btn-success" onClick={submitCityWeatherData}>Save forecast</button>
                      </div>
                    </div>)}
            </div>
            <table className="table table-striped border mt-3">
              <thead>
              <tr>
                <th>date time</th>
                <th>max temp</th>
                <th>mint temp</th>
                <th>wind speed</th>
              </tr>
              </thead>
              <tbody>
              {weatherData?.list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.dt_txt}</td>
                    <td>{item.main.temp_max}°C</td>
                    <td>{item.main.temp_min}°C</td>
                    <td>{item.wind.speed}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
         )}
        </div>
      </>
  )
}

export default App
