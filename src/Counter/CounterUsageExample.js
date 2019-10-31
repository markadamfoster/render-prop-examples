import React from "react";
import Counter from "./Counter";

export default class CounterUsageExample extends React.Component {
  render() {
    return (
      <Counter>
        {({ count, increment, decrement }) => (
          <>
            <h2>Current Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </>
        )}
      </Counter>
    );
  }
}
