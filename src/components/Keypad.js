import React, { Component } from 'react'

export default class Keypad extends Component {
    buttonPress = (e) => {
        this.props.buttonPress(e.target.name)
    }
    render() {
        return (
            <div className="buttons">
                <button name="1" onClick={this.buttonPress}>1</button>
                <button name="2" onClick={this.buttonPress}>2</button>
                <button name="3" onClick={this.buttonPress}>3</button>
                <button name="C" onClick={this.buttonPress}>C</button>
                <button name="4" onClick={this.buttonPress}>4</button>
                <button name="5" onClick={this.buttonPress}>5</button>
                <button name="6" onClick={this.buttonPress}>6</button>
                <button name="-" onClick={this.buttonPress}>-</button>
                <button name="7" onClick={this.buttonPress}>7</button>
                <button name="8" onClick={this.buttonPress}>8</button>
                <button name="9" onClick={this.buttonPress}>9</button>
                <button name="+" onClick={this.buttonPress}>+</button>
                <button name="=" onClick={this.buttonPress}>=</button>
                <button name="0" onClick={this.buttonPress}>0</button>
                <button name="/" onClick={this.buttonPress}>/</button>
                <button name="*" onClick={this.buttonPress}>*</button>
                
                
            </div>
        )
    }
}
