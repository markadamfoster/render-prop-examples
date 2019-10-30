import React from "react";

/*
Another (somewhat contrived) example... this is a Render Props component
that exposes two functions for setting & getting an item from localstorage.
*/

export default class UseLocalStorage extends React.Component {
  setItem = (itemKey, itemValue) => {
    localStorage.setItem([itemKey], itemValue);
  };

  getItem = (itemKey, callback) => {
    const value = localStorage.getItem(itemKey);
    callback(value);
  };

  render() {
    return this.props.children({
      setItem: this.setItem,
      getItem: this.getItem
    });
  }
}
