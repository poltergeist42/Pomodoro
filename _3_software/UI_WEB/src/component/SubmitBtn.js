import React, { Component } from 'react'

export default class SubmitBtn extends Component {
    render() {
        return (
            <div className="form-row">
                <button className="btn btn-primary mx-auto" type="submit">{this.props.label}</button>
            </div>
        )
    }
}
