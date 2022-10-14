import React from "react";
import Search from "./components/search";
import Weather from "./components/Weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
import Forecast from "./components/Forecast";

export default function App() {
  const [currentWeather, setCurrentWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
    });
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <main className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </main>
  );
}
