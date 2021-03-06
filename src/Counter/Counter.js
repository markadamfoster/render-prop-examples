import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return this.props.children({
      count: this.state.count,
      increment: this.increment,
      decrement: this.decrement
    });
  }
}
