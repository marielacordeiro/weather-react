import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Bottom from "./Bottom";
import React from "react";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search  defaultCity="Barcelona"/>
        <Forecast />
        <Bottom />
      </div>
    </div>
  );
}
