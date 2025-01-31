
const WeatherTable = ({ weatherList }) => (
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
        {/* eslint-disable-next-line react/prop-types */}
        {weatherList.map((item, index) => (
            <tr key={index}>
                <td>{item.dt_txt}</td>
                <td>{item.main.temp_max}°C</td>
                <td>{item.main.temp_min}°C</td>
                <td>{item.wind.speed}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default WeatherTable;
