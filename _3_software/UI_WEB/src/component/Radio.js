import React, { Component } from 'react'
import uniqid from 'uniqid'

//import toolbox
// import {devLog} from '../Common/toolBox'

export default class Radio extends Component {
    state = { itemID: uniqid('radio-') }

    componentDidMount() {
        this.props.getCurrentItemValue(this.state.itemID, this.props.value)
    }
    
    render() {
        return (
            <div className="form-group form-check form-row">
                <input
                    className="form-check-input"
                    type="radio"
                    name={this.props.name}
                    id={this.state.itemID}
                    value={this.props.value}
                    />
                <label className="form-check-label" htmlFor={this.state.itemID}>
                    {this.props.label}
                </label>
            </div>
        )
    }
}
