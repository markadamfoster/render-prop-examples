import React from "react";
import PropTypes from "prop-types";

class MouseTracker extends React.Component {
  static propTypes = {
    // a prop called "render" is required (of type function)
    render: PropTypes.func.isRequired
  };

  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div
        style={{ height: "300px", border: "1px solid hotpink" }}
        onMouseMove={this.handleMouseMove}
      >
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MouseTracker;
