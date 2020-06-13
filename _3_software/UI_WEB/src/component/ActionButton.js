import React, { Component } from 'react'
import uniqid from 'uniqid'

export default class ActionButton extends Component {
    state= { itemID: uniqid('range-') }

    handleClick = () => {
        this.props.cbClick()
    }
    render() {
        return (
            <button 
                id={this.state.itemID}
                name={this.props.className}
                className="btn"
                data-toggle={this.props.dataToggle}
                onClick={this.handleClick}>
                {this.props.icon}
            </button>
        )
    }
}
