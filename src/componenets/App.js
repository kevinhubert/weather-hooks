import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";

const APIKEY = "7eb8d517777db06f5e7afdbc739a28c3";

export function App() {
  const [weather, setWeather] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    setWeather(
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=austin&?id=524901&APPID=${APIKEY}`
      )
        .then(res => res.json())
        .then(data => data)
    );
  }

  return (
    <div>
      <Form getWeather={fetchData} />
      <Weather />
      {console.log(weather)}
    </div>
  );
}
