import React, { Component } from "react";

class Weather extends Component {
  state = {
    city: this.props.city,
    temp: null,
    humidity: null,
    main: null,
    description: null,
    windSpeed: null,
    windDirection: null,
    sunrise: null,
    sunset: null,
    sunset1: null,
    utcDate: null
  };

  componentDidMount() {
    const getWeather = (async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${
        this.props.city
      },,%20${this.props.country}&appid=`;
      await fetch(`${url}${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(forecast =>
          this.setState({
            temp: forecast.main.temp,
            humidity: forecast.main.humidity,
            main: forecast.weather[0].main,
            description: forecast.weather[0].description,
            windSpeed: forecast.wind.speed,
            windDirection: forecast.wind.deg,
            sunset: forecast.sys.sunset,
            sunrise: forecast.sys.sunrise
          })
        )
        .catch(error => console.error(error));
    })();
  }

  render() {
    return (
      <div>
        <h1>Here's the weather for {this.state.city} today</h1>
        <h1>
          Forecast: {this.state.main} <br /> Description:
          {this.state.description}
        </h1>
        <h2>Temperature {this.state.temp}℃</h2>
        <h2>Humidity {this.state.humidity}%</h2>
        <h2>
          Wind Speed: {this.state.windSpeed} <br />
          Wind Direction:
          {this.state.windDirection}
        </h2>
        <h2>Sunrise at: {this.state.sunrise}</h2>
        <h2>Sunset at: {this.state.sunset}</h2>
      </div>
    );
  }
}

export default Weather;
