import React, { Component } from 'react'
import uniqid from 'uniqid'

class InputField extends Component {
    state = {
        itemID: { [this.props.name]: uniqid("field-") }
     }

    componentDidMount() {
        let {min, max} = this.toggleMinAndLength()
        this.props.get_item_id(this.state.itemID)
        let thisItem = document.getElementById(this.state.itemID[this.props.name])
        thisItem[min] = this.props.min
        thisItem[max] = this.props.max
    }

    // handleChange = (e) => {
    //     // console.log('e.target.value', e.target.value)
    //     // this.setState({itemValue: e.target.value})

    // }

    toggleMinAndLength = () => {
        switch (this.props.type) {
            case "number":
                return { min: "min", max: "max" }
            case "texte":
                return { min: "minlength", max: "maxlength" }
        }
    }


    render() {
        return (
            <input
                className="mw-100"
                type={this.props.type}
                id={this.state.itemID[this.props.name]}
                name={this.props.name}
            // onChange={this.handleChange}
            // value={this.state.itemValue}
            // min={this.props.min}
            // max={this.props.max}
            />
        )
    }
}

class InputLabel extends Component {
    render() {
        return (
            <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
        )
    }
}

export { InputField, InputLabel }
