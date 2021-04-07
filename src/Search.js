import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  

  function handleResponse(response) {
		setWeatherData({
			ready: true,
			city: response.data.name,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000),
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      temperatureMax : Math.round(response.data.main.temp_max),
      temperatureMin : Math.round(response.data.main.temp_min),
		});
  }
  
  //function displayForecast(response) {}

  function search() {
		const apiKey = "42b6c71393f995c013da06c7d114912a";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {

  return (
    <div className="Search">
      <div className="row">
        <div className="col-12 text-center">
          <form onSubmit={handleSubmit}
            className="searchCity d-flex justify-content-center"
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search city here"
              onChange={handleCityChange}
            />
            <button
              type="submit"
              className="btn btn-outline-light ml-2"
            >
              <i className="fas fa-search"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-light"
            >
              Current city
            </button>
          </form>
          	<Results data={weatherData} />
        </div>
      </div>
    </div>
  );
  } else {
		search();
		return "Loading...";
	}
}