import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);
  const apiKey = "42b6c71393f995c013da06c7d114912a";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat; 
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
			<div className="Forecast-day">Thu</div>
			<WeatherIcon code="01d" size={52} />
			<div className="Forecast-temperature">
				<span className="Forecast-temp-max">10º</span>
				<span className="Forecast-temp-min">15º</span>
		    </div>
        </div>
      </div>
    </div>
  );
}