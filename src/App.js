import React, { Component } from 'react'
import Keypad from "./components/Keypad"
import "./App.css";
import Display from "./components/Display"

export default class App extends Component {
  constructor() {
    super()
    this.state ={
      userInput:"",
    }
  }

  buttonPress = (calcButton) => {
    if(calcButton === '=' && this.state.userInput.length > 1) {
      this.doMath();
    } 

    // Always try to delete your commented-out code! You rarely need it, and there's always undo and git if you do.

    // else if(calcButton === '(-)') {
    //   this.setState({
    //     userInput: Math.abs(this.state.userInput) + calcButton
    //   })
    // }
    else if(calcButton === 'C') {
      this.calculatorReset()
    } else {
      this.setState({
        userInput: this.state.userInput + calcButton
      })
    
      
    }
  }

  calculatorReset = () => {
    this.setState({
      userInput: ""})
  }

  doMath = () =>  {
    try {
    this.setState({
      userInput: eval(this.state.userInput)
    })
  } catch (e) {
    this.setState({
      userInput: "Error..."
    })
  }
  }

  render() {
  
    return (
      
        <div className="App">
          <div className="keypad">
          <Display userInput={this.state.userInput}/>
          <Keypad buttonPress={this.buttonPress} />
          </div>
        </div>
        
        
  
    )
  }
}


// Always try to delete your commented-out code! You rarely need it, and there's always undo and git if you do.

// import Numbers from './components/Numbers'
// import './App.css';

// import Operators from './components/Operators';

// function App() {
//   return (
//     <>
//       
    
//     </>
//   );
// }

// export default App;
