import React, { Component } from 'react'

export default class Pomodoro extends Component {
    componentDidMount() {
        this.props.activePage("pomodoro")
    }

    render() {
        return (
            <div className="container">
                <h1>Pomodoro</h1>
            </div>
        )
    }
}
