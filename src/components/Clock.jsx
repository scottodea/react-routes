import React, { Component } from "react";
import ".././Clock.css";

class Clock extends Component {
  state = {
    date: this.props.date,
    timezone: this.props.timezone
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((state, props) => {
        return { date: new Date() };
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="container">
        <h3 className="label">{this.state.timezone}</h3>
        <div
          className="clock-face"
          style={{ backgroundImage: `url(/${this.props.icon})` }}
        >
          <div className="clock">
            <div className="hours-container">
              <div
                className="hours"
                style={{
                  transform: `rotateZ(${this.state.date.getHours() * 30 +
                    this.state.date.getMinutes() / 2}deg)`
                }}
              />
            </div>
            <div className="minutes-container">
              <div
                className="minutes"
                style={{
                  transform: `rotateZ(${this.state.date.getMinutes() * 6}deg)`
                }}
              />
            </div>
            <div className="seconds-container">
              <div
                className="seconds"
                style={{
                  transform: `rotateZ(${this.state.date.getSeconds() * 6}deg)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
