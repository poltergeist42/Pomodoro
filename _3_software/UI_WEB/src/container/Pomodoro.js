import React, { Component } from 'react'

import Timer from '../component/Timer'
import ParamsModal from './ParamsModal'
import TodoList from '../component/TodoList'
// import FormParamsModal from './FormParamsModal'

// import { devLog } from '../Common/toolBox'

export default class Pomodoro extends Component {
    state = { showComponent: false }

    componentDidMount() {
        this.props.activePage("pomodoro")
    }

    callback_showModal = () => {
        this.setState({ showComponent: !this.state.showComponent })
        // devLog("Pomodoro.cb_showModal.state.showComponent", this.state.showComponent)
    }

    render() {
        return (
            <div className="container-flex">
                {/* <getItemID show={this.state.showComponent} isclose={this.callback_showModal}/> */}
                <Timer
                    cb_showModal={this.callback_showModal}
                // show={this.state.showComponent}

                />
                {/* <FormParamsModal /> */}
                <ParamsModal isclose={this.state.showComponent} cb_showModal={this.callback_showModal}/>
                <TodoList
                // show={this.state.showComponent}

                />
            </div>
        )
    }
}
