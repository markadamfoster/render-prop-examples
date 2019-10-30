import React from "react";
import Toggle from "./Toggle/Toggle";
import LocalStorageExample from "./LocalStorage/LocalStorageExample";
import AnimalChaser from "./MouseTracker/AnimalChaser";

function App() {
  return (
    <div>
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <h1>{on ? "On" : "Off"}</h1>
            <button onClick={toggle}>Toggle</button>
          </div>
        )}
      </Toggle>

      <LocalStorageExample />

      <AnimalChaser />
    </div>
  );
}

export default App;
