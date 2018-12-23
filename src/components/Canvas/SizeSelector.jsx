import React, { Component } from "react";

class SizeSelector extends Component {
  onSizeChange = event => {
    const { onSizeSelectorChange } = this.props;
    onSizeSelectorChange(event.target.value);
  };

  render() {
    const { size } = this.props;
    return <input type="number" value={size} onChange={this.onSizeChange} />;
  }
}

export default SizeSelector;
