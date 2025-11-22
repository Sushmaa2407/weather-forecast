import React from "react";

function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
  <input
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="border-4 border-black bg-white px-4 py-3 w-64 font-pixel shadow-pixel rounded-pixel"
    placeholder="Enter city..."
  />

  <button
    onClick={fetchWeather}
    className="bg-yellow-300 border-4 border-black px-4 py-3 font-pixel shadow-pixel rounded-pixel hover:bg-yellow-400"
  >
    SEARCH
  </button>
</div>

  );
}

export default SearchBar;
