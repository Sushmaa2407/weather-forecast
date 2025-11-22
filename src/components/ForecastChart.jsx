const ForecastChart = ({ forecast }) => {
  if (!forecast || !forecast.list) {
    return (
      <div className="text-center text-white mt-4 text-lg">
        Loading forecast...
      </div>
    );
  }

  // Safely extract first 8 items
  const daily = Array.isArray(forecast.list)
    ? forecast.list.slice(0, 8)
    : [];

  if (daily.length === 0) {
    return (
      <div className="text-center text-white mt-4 text-lg">
        No forecast data available.
      </div>
    );
  }

  return (
    <div className="bg-white/80 border-4 border-black rounded-pixel shadow-pixel p-4 mt-6 max-w-2xl mx-auto">
  <h2 className="text-xl mb-4 text-center">FORECAST</h2>

  <div className="grid grid-cols-4 gap-6">
    {daily.map((item, i) => (
      <div key={i} className="text-center border-2 border-black p-3 rounded-pixel shadow-pixel">
        <p className="text-xs">{new Date(item.dt_txt).getHours()}:00</p>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          className="w-12 mx-auto image-render-pixel"
        />
        <p className="text-lg mt-2">{Math.round(item.main.temp)}°C</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default ForecastChart;
