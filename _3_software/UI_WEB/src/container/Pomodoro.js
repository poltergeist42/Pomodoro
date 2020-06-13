import React, { Component } from 'react'

import Timer from '../component/Timer'
import TodoList from '../component/TodoList'
import Modal from './Modal'

import {devLog} from '../Common/toolBox'

export default class Pomodoro extends Component {
    state = {showComponent: false}

    componentDidMount() {
        this.props.activePage("pomodoro")
    }

    callback_showModal = () => {
        this.setState({showComponent: !this.state.showComponent})
        devLog("Pomodoro.cb_showModal", "click")
    }

    render() {
        return (
            <div className="container">
                <Modal show={this.state.showComponent} />
                <Timer cb_showModal={this.callback_showModal} show={this.state.showComponent}/>
                <TodoList show={this.state.showComponent}/>
            </div>
        )
    }
}
