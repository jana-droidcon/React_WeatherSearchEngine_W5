import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="weather-app-city">{props.data.city}</h1>
      <ul>
        <li className="weather-app-data">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="weather-app-details">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-app-details">
            <li>
              Humidity:<strong> {props.data.humidity}%</strong>
            </li>
            <li>
              Wind:<strong> {props.data.wind} km/h </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
