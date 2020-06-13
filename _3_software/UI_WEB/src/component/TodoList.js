import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <div className={`${!this.props.show ? 'd-bloc' : 'd-none'} container`}>
                <h1>TodoList</h1>
            </div>
        )
    }
}
