import React from "react";
import Toggle from "./Toggle";

export default class ToggleUsageExample extends React.Component {
  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <>
            <h1>{on ? "ON" : "off"}</h1>
            <button onClick={toggle}>Switch</button>
          </>
        )}
      </Toggle>
    );
  }
}
