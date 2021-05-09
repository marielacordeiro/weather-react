import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    function maxTemp () {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}º`;
    }
    function minTemp () {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}º`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
        <div className="Forecast-day">{day()}</div>
			<WeatherIcon code={props.data.weather[0].icon} size={52} />
			<div className="Forecast-temperature">
      <span className="Forecast-temp-max">{maxTemp()}</span>
      <span className="Forecast-temp-min">{minTemp()}</span>
		    </div>
        </div>
    );
}