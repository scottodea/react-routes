import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Clock from "./components/Clock";
import Canvas from "./components/Canvas";
import Weather from "./components/Weather";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, example: "merging", value: 1, error: null };
  }
  componentDidMount() {
    console.log("MOUNTED");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        this.setState({ error: error.message });
      }
    );
  }

  isItSummer() {
    const { latitude } = this.state;
    console.log(latitude);
    if (latitude) {
      const month = new Date().getMonth();
      if (
        (month >= 4 && month <= 9 && latitude > 0) ||
        ((month >= 9 || month <= 4) && latitude < 0) ||
        latitude === 0
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/clock"
              render={props => (
                <Clock
                  {...props}
                  icon={
                    this.isItSummer() ? "./../sun.svg" : "./../snowflake.svg"
                  }
                  timezone={"Sydney/Australia"}
                  date={new Date()}
                />
              )}
            />
            <Route path="/canvas" component={Canvas} />
            <Route
              path="/weather"
              render={props => (
                <Weather {...props} city="Sydney" country="Australia" />
              )}
            />
            <Route component={Error} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
