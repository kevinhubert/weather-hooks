import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input name="city" placeholder="city" type="text"></input>
      <input name="country" placeholder="country" type="text"></input>
      <button>Submit</button>
    </form>
  );
};

export default Form;
