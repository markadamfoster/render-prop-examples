import React from "react";
import ToggleUsageExample from "./Toggle/ToggleUsageExample";
import CounterUsageExample from "./Counter/CounterUsageExample";
import LocalStorageExample from "./LocalStorage/LocalStorageExample";
import AnimalChaser from "./MouseTracker/AnimalChaser";

function App() {
  return (
    <div>
      <ToggleUsageExample />
      <CounterUsageExample />
      <LocalStorageExample />
      <AnimalChaser />
    </div>
  );
}

export default App;
