import React, { Component } from 'react'

export default class SubmitBtn extends Component {
    handleSubmit = (e) =>{
        console.log('clickSubmit')
        let form = document.getElementById(this.props.formID)
        if (form.isValid){
            form.submit()
        }
    }

    render() {
        return (
            <div className="form-row">
                <button
                    className="btn btn-primary mx-auto"
                    type="submit"
                    onClick={this.handleSubmit}
                    >
                        {this.props.label}
                </button>
            </div>
        )
    }
}
