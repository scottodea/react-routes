import React, { Component } from "react";
import ColourSelector from "./ColourSelector";
import SizeSelector from "./SizeSelector";
import Title from "./Title";
class Pad extends Component {
  state = {
    hex: "#0000ff",
    width: 400,
    height: 400,
    coords: null,
    size: 20,
    title: "Your Drawing Name"
  };

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.context = null;
  }

  componentDidUpdate() {
    this.setContext();
    console.log();
  }

  setContext() {
    this.context = this.canvasRef.current.getContext("2d");
    this.context.strokeStyle = this.state.hex;
    this.context.lineJoin = "miter";
    this.context.lineWidth = this.state.size;
  }

  onColourSelectorChange = hex => {
    this.setState({ hex });
  };

  onSizeSelectorChange = size => {
    this.setState({ size });
  };

  TitleSelectorChange = title => {
    this.setState({ title });
  };

  onCanvasMouseDown = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    this.setState({ coords: [x, y] });
  };
  onCanvasMouseUp = event => {
    this.setState({ coords: null });
  };

  clearCanvas = () => {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  };

  choosePencilSize = () => {};

  onCanvasMouseMove = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const { coords, height, width } = this.state;

    if (x > 0 && y > 0 && x < width && y < height) {
      if (coords) {
        this.context.beginPath();
        this.context.moveTo(coords[0], coords[1]);
        this.context.lineTo(x, y);
        this.context.closePath();
        this.context.stroke();
        this.setState({ coords: [x, y] });
      }
    } else {
      this.setState({ coords: null });
    }
  };

  render() {
    const { hex, width, height, size, title } = this.state;
    return (
      <div>
        <div>
          <Title title={title} TitleSelectorChange={this.TitleSelectorChange} />
          <h1>{title}</h1>
          <ColourSelector
            hex={hex}
            onColourSelectorChange={this.onColourSelectorChange}
          />
          <SizeSelector
            size={size}
            onSizeSelectorChange={this.onSizeSelectorChange}
          />
          <button>Save Canvas</button>
        </div>

        <canvas
          ref={this.canvasRef}
          width={width}
          height={height}
          style={{ border: "6px solid black" }}
          onMouseMove={this.onCanvasMouseMove}
          onMouseDown={this.onCanvasMouseDown}
          onMouseUp={this.onCanvasMouseUp}
        />
        <button onClick={this.clearCanvas}>Reset Canvas</button>
      </div>
    );
  }
}

export default Pad;
