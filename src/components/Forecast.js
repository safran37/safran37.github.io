import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./Forecast.css";

const WEEK_DAYS = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

const Forecast = ({ data }) => {
  const currentDay = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, currentDay)
  );

  console.log(forecastDay);

  return (
    <>
      <label htmlFor="" className="title">
        Günlük Hava Tahminleri
      </label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label htmlFor="" className="day">
                      {forecastDay[idx]}
                    </label>
                    <label htmlFor="" className="description">
                      {item.weather[0].description}
                    </label>
                    <label htmlFor="" className="min-max">
                      {Math.round(item.main.temp_min)}°C /
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="pressure">
                    Basınç
                  </label>
                  <label htmlFor="" className="pressure">
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="pressure">
                    Nem Oranı
                  </label>
                  <label htmlFor="" className="pressure">
                    {item.main.humidity} %
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="pressure">
                    Bulutlar
                  </label>
                  <label htmlFor="" className="pressure">
                    {item.clouds.all} %
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="pressure">
                    Rüzgar Hızı
                  </label>
                  <label htmlFor="" className="pressure">
                    {item.wind.speed} m/s
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="pressure">
                    Deniz Seviyesi
                  </label>
                  <label htmlFor="" className="pressure">
                    {item.main.sea_level} m
                  </label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="" className="pressure">
                    Hissedilen Sıcaklık
                  </label>
                  <label htmlFor="" className="pressure">
                    {Math.round(item.main.feels_like)} °C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
