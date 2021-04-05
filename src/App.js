import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Search from "./Search";
import WeatherTemperature from "./WeatherTemperature"
import Forecast from "./Forecast";
import Bottom from "./Bottom";
import React from "react";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search  defaultCity="Barcelona"/>
        <WeatherTemperature />
        <Forecast />
        <Bottom />
      </div>
    </div>
  );
}
