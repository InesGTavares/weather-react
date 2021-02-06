import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [text, setText] = useState(" ");

  function showText(response) {
    setText(
      <div>
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)} ºC </li>
          <li>Description: {response.data.weather[0].main}</li>
          <li>Humidity: {response.data.main.humidity} %</li>
          <li>Wind: {response.data.wind.speed} km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/w/${response.data.weather[0].icon}.png`}
              alt="weather icon"
            />
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4d96685ad0055b470dd85d4445d4e3c9";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(showText);
  }

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city"
            onChange={getCity}
          />
          <input type="submit" value="Search" />
        </form>
        <div> {text} </div>
      </div>
    </div>
  );
}
