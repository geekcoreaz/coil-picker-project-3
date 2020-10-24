/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Coil Picker</h2>
        </div>
        <p className="App-intro">
          To get started, enter the name of a coil or tank and see the pairing
          options.
        </p>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-primary" type="button">
              Coil Name:
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          ></input>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button type="button" className="btn btn-primary">
              Tank Name:
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          ></input>
        </div>
      </div>
    );
  }
}

export default App;
