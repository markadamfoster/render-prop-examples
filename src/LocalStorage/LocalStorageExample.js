import React, { useState } from "react";
import UseLocalStorage from "./UseLocalStorage";

export default function LocalStorageExample() {
  const [inputValue, setInputValue] = useState("");
  const [savedValue, setSavedValue] = useState("");

  return (
    <UseLocalStorage>
      {({ setItem, getItem }) => (
        <div>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button onClick={() => setItem("inputValue", inputValue)}>
            Save Value
          </button>

          <div>The saved value is: {savedValue}</div>
          <button onClick={() => getItem("inputValue", setSavedValue)}>
            Get Value
          </button>
        </div>
      )}
    </UseLocalStorage>
  );
}
