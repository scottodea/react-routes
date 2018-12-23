import React, { Component } from "react";

class Title extends Component {
  TitleChange = event => {
    const { TitleSelectorChange } = this.props;
    TitleSelectorChange(event.target.value);
  };

  render() {
    const { title } = this.props;
    return <input type="text" value={title} onChange={this.TitleChange} />;
  }
}

export default Title;
