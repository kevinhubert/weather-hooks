import React from "react";

const Weather = props => {
  return (
    <div>
      <h1>City: {props.city}</h1>
      <p>Temperature: {props.temperature}</p>
      <p>Description: {props.description}</p>
    </div>
  );
};

export default Weather;
