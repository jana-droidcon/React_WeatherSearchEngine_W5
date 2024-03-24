import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
  if (unit === "Celsius") {
    return (
      <div className="weather-app-temperature-container">
        <span className="weather-app-temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="weather-app-unit">
          °C ℃|{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  }
}
