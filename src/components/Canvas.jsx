import React, { Component } from "react";
// import ColourSelector from "./components/Canvas/ColourSelector";
import Pad from "./Canvas/Pad";
class Canvas extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to your drawing pad</h1>
        <Pad />
      </div>
    );
  }
}

export default Canvas;
