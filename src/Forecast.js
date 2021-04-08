import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row text-center weather-forecast">
        <div className="col">
         <ReactAnimatedWeather
						icon="CLEAR_DAY"
						color="black"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
        <ReactAnimatedWeather
						icon="WIND"
						color="black"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
        <ReactAnimatedWeather
						icon="FOG"
						color="black"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
        <ReactAnimatedWeather
						icon="CLEAR_NIGHT"
						color="black"
						size={45}
						animate={true}
					/>
          </div>
        <div className="col">
          <ReactAnimatedWeather
						icon="RAIN"
						color="black"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
          <ReactAnimatedWeather
						icon="SNOW"
						color="black"
						size={45}
						animate={true}
					/>
        </div>
      </div>
    </div>
  );
}