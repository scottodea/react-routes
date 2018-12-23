import React, { Component } from "react";

class ColourSelector extends Component {
  onInputChange = event => {
    const { onColourSelectorChange } = this.props;
    onColourSelectorChange(event.target.value);
  };

  render() {
    const { hex } = this.props;
    return <input type="color" value={hex} onChange={this.onInputChange} />;
  }
}

ColourSelector.defaultProps = {
  hex: "#0000ff"
};

export default ColourSelector;
