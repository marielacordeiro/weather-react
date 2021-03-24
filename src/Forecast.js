import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row text-center weather-forecast" id="forecast">
        <div className="col">
          <h3></h3>
          <div className="weather-forecast-temperature">
            <span className="min"></span>/<span className="max"></span>
          </div>
        </div>
        <div className="col">
          <h3></h3>
          <ReactAnimatedWeather
						icon="CLEAR_NIGHT"
						color="black"
						size={45}
						animate={true}
					/>
          <div className="weather-forecast-temperature">
            <span className="min"></span>/<span className="max"></span>
          </div>
        </div>
        <div className="col">
          <h3></h3>
          <ReactAnimatedWeather
						icon="FOG"
						color="black"
						size={45}
						animate={true}
					/>
          <div className="weather-forecast-temperature">
            <span className="min"></span>/<span className="max"></span>
          </div>
        </div>
        <div className="col">
          <h3></h3>
          <ReactAnimatedWeather
						icon="SNOW"
						color="black"
						size={45}
						animate={true}
					/>
          <div className="weather-forecast-temperature">
            <span className="min"></span>/<span className="max"></span>
          </div>
        </div>
        <div className="col">
          <h3></h3>
          <ReactAnimatedWeather
						icon="RAIN"
						color="black"
						size={45}
						animate={true}
					/>
          <div className="weather-forecast-temperature">
            <span className="min"></span>/<span className="max"></span>
          </div>
        </div>
        <div className="col">
          <h3></h3>
          <ReactAnimatedWeather
						icon="SLEET"
						color="black"
						size={45}
						animate={true}
					/>
          <div className="weather-forecast-temperature">
            <span className="min"></span>/<span className="max"></span>
          </div>
        </div>
      </div>
    </div>
  );
}