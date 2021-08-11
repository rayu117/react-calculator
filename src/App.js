import React, { Component } from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  buttonPress = (calcButton) => {
    if (this.state.userInput.length < 2) {
      this.setState({ userInput: this.state.userInput + calcButton });
    }
    if (calcButton === "=" && this.state.userInput.length > 1) {
      this.doMath();
    } else if (calcButton === "C") {
      this.calculatorReset();
    } else if (calcButton === "+/-") {
      this.handleNegative();
    } else {
      this.setState({
        userInput: this.state.userInput + calcButton,
      });
    }
  };
  handleNegative = () => {
    this.setState({ userInput: this.state.userInput * -1 });
  };

  calculatorReset = () => {
    this.setState({
      userInput: "0",
    });
  };

  doMath = () => {
    try {
      this.setState({
        userInput: Math.floor(eval(this.state.userInput)),
      });
    } catch (e) {
      this.setState({
        userInput: "Error...",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="keypad">
          <Display userInput={this.state.userInput} />
          <Keypad buttonPress={this.buttonPress} />
        </div>
      </div>
    );
  }
}
