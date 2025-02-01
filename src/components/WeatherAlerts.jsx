// eslint-disable-next-line react/prop-types
const WeatherAlerts = ({ error, loading, serverMessage }) => (
  <>
    {error && <div className="alert alert-danger">{error}</div>}
    {loading && <div className="alert alert-info">Loading...</div>}
    {serverMessage && (
      // eslint-disable-next-line react/prop-types
      <div className="alert alert-success">{serverMessage.message}</div>
    )}
  </>
);

export default WeatherAlerts;
