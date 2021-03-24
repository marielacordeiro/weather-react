import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-12 text-center">
          <form
            className="searchCity d-flex justify-content-center"
            id="search-form"
          >
            <input
              className="form-control"
              type="text"
              placeholder="Search city here"
              id="search-text-input"
              autocomplete="off"
            />
            <button
              type="submit"
              className="btn btn-outline-light ml-2"
              id="buttonClick"
            >
              <i className="fas fa-search"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-light"
              id="currentCityButton"
            >
              Current city
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}