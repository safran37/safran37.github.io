import React from "react";
import "./currentWeather.css";

const Weather = ({ data }) => {
  return (
    <div className="weather-container">
      <div className="top">
        <div className="info">
          <p className="city">{data.city}</p>
          <p className="weather-information">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Detaylar</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Hissedilen Sıcaklık</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)} °C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Rüzgar</span>
            <span className="parameter-value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Nem Oranı</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Basınç</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
