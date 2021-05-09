import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
  return (
    <div className="Forecast">
      <div className="row">
        {forecast.map(function(dailyForecast, index){
          if (index < 5) {
            return (
              <div className="col" key={index}>
			        <ForecastDay data={dailyForecast}/>
              </div>
            )
          }
          return null;
        })}
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