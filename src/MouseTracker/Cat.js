import React from "react";
import catPic from "./cat.png";

class Cat extends React.Component {
  render() {
    const { mouseLocation } = this.props;

    return (
      <img
        alt="cat"
        src={catPic}
        style={{
          position: "absolute",
          left: mouseLocation.x,
          top: mouseLocation.y
        }}
      />
    );
  }
}

export default Cat;
