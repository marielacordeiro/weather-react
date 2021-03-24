import React from "react";
import "./Results.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Results() {
  return (
    <div className="Results">
      <div class="row">
        <div class="col">
          <div>
            <h1 id="cities">Tokyo</h1>
          </div>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-6">
          <div>
            <span>
              <h2>Wednesday 16:30</h2>
            </span>
            <span>
              <ul>
                <span id="description">Clouds</span>
                <br />
                Humidity: 50<span id="humidity"></span>%
                <br />
                Wind: 5<span id="wind"></span>km/h
              </ul>
            </span>
          </div>
        </div>
        <div class="col-6 text-center">
          <p>
            <span class="currentTemperature" id="temperature">
              8
            </span>{" "}
            <ReactAnimatedWeather
						icon="WIND"
						color="black"
						size={45}
						animate={true}
					/>
            <span class="units">
              <a href="#" id="celsius-link" class="active">
                ºC
              </a>{" "}
              |{" "}
              <a href="#" id="fahrenheit-link">
                {" "}
                Fº
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}