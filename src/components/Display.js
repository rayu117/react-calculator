import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div className="show">
                <p>{this.props.userInput}</p>
            </div>
        )
    }
}
