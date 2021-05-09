import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
			  <ForecastDay data={forecast[0]}/>
        </div>
      </div>
    </div>
  ); 
  } else {
    const apiKey = "42b6c71393f995c013da06c7d114912a";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}