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
						color= "#8e97f2"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
        <ReactAnimatedWeather
						icon="WIND"
						color="#8e97f2"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
        <ReactAnimatedWeather
						icon="FOG"
						color="#8e97f2"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
        <ReactAnimatedWeather
						icon="CLEAR_NIGHT"
						color="#8e97f2"
						size={45}
						animate={true}
					/>
          </div>
        <div className="col">
          <ReactAnimatedWeather
						icon="RAIN"
						color="#8e97f2"
						size={45}
						animate={true}
					/>
        </div>
        <div className="col">
          <ReactAnimatedWeather
						icon="SNOW"
						color="#8e97f2"
						size={45}
						animate={true}
					/>
        </div>
      </div>
    </div>
  );
}