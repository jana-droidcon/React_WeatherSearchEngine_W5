import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";
import "./Footer.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="Weather App">
      <div className="container">
        <WeatherSearch defaultCity="New York" />
        <Footer />
      </div>
    </div>
  );
}
