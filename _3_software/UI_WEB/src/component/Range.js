import React, { Component } from 'react'
import uniqid from 'uniqid'

// import toolbox
import { devLog } from '../Common/toolBox'

export default class Range extends Component {
    state = {
        itemID: uniqid('range-'),
        rangeValue: ""
    }

    componentDidMount() {
        const thisComponent = document.getElementById(this.state.itemID)
        // thisComponent.value = "12"
        devLog("initValue", typeof this.props.initValue)
        thisComponent.value = this.props.initValue
        devLog("thisComponent", thisComponent.value)
        // this.setState({ rangeValue: thisComponent.value })
        // this.setState({ rangeValue: this.props.initValue})
    }


    handleChangeRange = (event) => {
        let rangeValue = event.target.value
        // devLog("type of rangeValue", typeof rangeValue)
        this.setState({ rangeValue })
    }


    render() {
        return (
            <div className="mt-5 mb-3 container">
                <div className="row">
                    <label htmlFor={this.state.itemID}>{this.props.label}</label>
                    <input
                        name={this.props.name}
                        type="range"
                        className="custom-range"
                        onChange={this.handleChangeRange}
                        min={this.props.minVal}
                        max={this.props.maxVal}
                        id={this.state.itemID}>
                    </input>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        {this.props.minVal}
                    </div>
                    <div className="col d-flex justify-content-center">
                        {this.state.rangeValue}
                    </div>
                    <div className="col d-flex justify-content-end">
                        {this.props.maxVal}
                    </div>
                </div>
            </div>
        )
    }
}
