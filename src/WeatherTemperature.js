import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-app-temperature-container">
      <span className="weather-app-temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="weather-app-unit">°C </span>
    </div>
  );
}
