import React from "react";
import dogPic from "./dog.png";

class Dog extends React.Component {
  render() {
    const { mouseLocation } = this.props;

    return (
      <img
        alt="dog"
        src={dogPic}
        style={{
          position: "absolute",
          left: mouseLocation.x,
          top: mouseLocation.y
        }}
      />
    );
  }
}

export default Dog;
