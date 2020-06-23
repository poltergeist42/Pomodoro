import React, { Component } from 'react'
import uniqid from 'uniqid'

class InputField extends Component {
        state={
                itemID:{[this.props.name]:uniqid("field-")},
                itemValue:''}

        componentDidMount(){
            this.props.get_item_id(this.state.itemID)
        }

        handleChange = (e)=>{
            // console.log('e.target.value', e.target.value)
            // this.setState({itemValue: e.target.value})

        }

        render() {
        return (
            <input
                type={this.props.type}
                id={this.state.itemID[this.props.name]}
                name={this.props.name}
                // onChange={this.handleChange}
                // value={this.state.itemValue}
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

export {InputField, InputLabel}
