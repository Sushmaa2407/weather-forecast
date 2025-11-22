import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastChart from "./components/ForecastChart";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();

      if (data.cod === "404") {
        alert("City not found!");
        return;
      }

      setWeather(data);

      const res2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastData = await res2.json();
      setForecast(forecastData);
    } catch (err) {
      console.log("Weather fetch error:", err);
    }
  };

  // Fetch both current weather + forecast for geolocation
  const fetchByLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const weatherData = await res.json();
        setWeather(weatherData);

        const res2 = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const forecastData = await res2.json();
        setForecast(forecastData);
      } catch (err) {
        console.log("Location fetch error:", err);
      }
    });
  };

  useEffect(() => {
    fetchByLocation();
  }, []);

  return (
    <div className="min-h-screen bg-[#8ecae6] pixel-bg p-8 font-pixel">
      <h1 className="text-center text-4xl font-bold text-white">Weather App</h1>

      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <WeatherCard data={weather} />
      {forecast?.list && <ForecastChart forecast={forecast} />}
    </div>
  );
}

export default App;
