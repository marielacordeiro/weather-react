import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./Results.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function Results(props) {
  return (
    <div className="Results">
      <div className="row">
        <div className="col">
            <h1>{props.data.city}</h1>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-6">
          <div>
              <h2><FormattedDate date={props.data.date} /></h2>
              <ul>
                <li>{props.data.description}</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind Speed: {props.data.wind} km/h</li>
              </ul>
          </div>
        </div>
        <div class="col-6 text-center">
          <p>
            <WeatherIcon code={props.data.icon} />
            <span className="currentTemperature">
             <WeatherTemperature celsius={props.data.temperature} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}