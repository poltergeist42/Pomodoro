import React, { Component } from 'react'

export default class SubmitBtn extends Component {
    handleSubmit = (e) =>{
        e.preventDefault()
    }

    render() {
        return (
            <div className="form-row">
                <button
                    className="btn btn-primary mx-auto"
                    type="submit"
                    // onClick={this.handleSubmit}
                    onSubmit={() => {return true}}
                    >
                        {this.props.label}
                </button>
            </div>
        )
    }
}
