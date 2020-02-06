import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import "./App.scss";

const APIKEY = "7eb8d517777db06f5e7afdbc739a28c3";

export function App() {
  const [weather, setWeather] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&?id=524901&APPID=${APIKEY}`
    )
      .then(res => res.json())
      .then(data => data);

    setWeather({
      data: apiData,
      city: apiData.name,
      country: apiData.sys.country,
      temperature: apiData.main.temp,
      description: apiData.weather[0].description,
      error: ""
    });
  }

  return (
    <div>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        description={weather.description}
      />
      {console.log(weather.data)}
    </div>
  );
}
