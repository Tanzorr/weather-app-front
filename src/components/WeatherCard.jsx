// eslint-disable-next-line react/prop-types
const WeatherCard = ({ weatherData, submitCityWeatherData }) => {
    const canDisplayFromDb = weatherData?.city?.updated_at;
    const canDisplayFromApi = !weatherData?.city?.updated_at;

    return (
        <div className="card p-3">
            {/* eslint-disable-next-line react/prop-types */}
            <h3>{weatherData?.city?.name}</h3>

            {canDisplayFromDb && (
                <div className="db-data">
                    updated at: {weatherData?.city?.updated_at}
                </div>
            )}

            {canDisplayFromApi && (
                <div className="fetch-data-from-api">
                    <b>period</b>
                    <div>Start at: {weatherData?.list[0]?.dt_txt}</div>
                    <div>Ends at: {weatherData?.list[weatherData?.list.length - 1]?.dt_txt}</div>
                    <div className="mt-3">
                        <button className="btn btn-success" onClick={submitCityWeatherData}>
                            Save forecast
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;
