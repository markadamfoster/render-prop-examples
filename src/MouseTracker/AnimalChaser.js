import React from "react";
import MouseTracker from "./MouseTracker";
import Cat from "./Cat";
import Dog from "./Dog";

class AnimalChaser extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>

        <MouseTracker
          render={mouseLocation => <Cat mouseLocation={mouseLocation} />}
        />

        <MouseTracker
          render={mouseLocation => <Dog mouseLocation={mouseLocation} />}
        />
      </div>
    );
  }
}

export default AnimalChaser;
