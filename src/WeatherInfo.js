import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="container WeatherInfo">
      <h1 className="weather-app-city">{props.data.city}</h1>
      <li className="weather-app-details d-flex">
        <FormattedDate date={props.data.date} />, {props.data.description}
      </li>
      <li className="weather-app-details d-flex">
        <li>
          Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
          <strong>{props.data.wind} km/h</strong>
        </li>
      </li>

      <div className="weather-app-temperature-container">
        <span className="weather-app-icon">
          <WeatherIcon code={props.data.icon} />
        </span>
        <span class="weather-app-temperature">
          <WeatherTemperature celsius={Math.round(props.data.temperature)} />
        </span>
      </div>
    </div>
  );
}
