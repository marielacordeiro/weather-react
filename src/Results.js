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

      <div className="row">
        <div className="col">
          <div>
              <h2><FormattedDate date={props.data.date} /></h2>
              <p><strong>{props.data.description}</strong></p>
              <ul>
                <li>humidity| {props.data.humidity}%</li>
                <li>wind speed| {props.data.wind}km/h</li>
              </ul>
          </div>
        </div>
        <div className="col">
            <span className="icon">
              <WeatherIcon code={props.data.icon} size={75} />
            </span>
            <span>
             <WeatherTemperature celsius={props.data.temperature} />
            </span>
        </div>
      </div>
    </div>
  );
}