function WeatherCard({ data }) {
  if (!data) {
    return (
      <div className="text-center text-white mt-10 text-xl">
        Loading weather...
      </div>
    );
  }

  return (
  <div className="mt-6 bg-white border-4 border-black rounded-pixel p-6 max-w-md mx-auto shadow-pixel">
    <h2 className="text-xl text-center mb-4">{data.name}</h2>

    <div className="flex flex-col items-center">
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        className="w-20 image-render-pixel"
        alt=""
      />
      <p className="text-3xl mt-2">{Math.round(data.main.temp)}°C</p>
      <p className="mt-2">{data.weather[0].main}</p>
    </div>
  </div>
);

}

export default WeatherCard;
