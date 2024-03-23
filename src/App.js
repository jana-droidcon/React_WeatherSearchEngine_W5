import React from "react";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";
import "./App.css";
import "./Footer.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="Weather App">
      <WeatherSearch />
      <Footer />
    </div>
  );
}
