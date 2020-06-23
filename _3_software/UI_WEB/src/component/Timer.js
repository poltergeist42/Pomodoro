import React, { Component } from 'react'

import {fetchingJson} from '../Common/fetchingJson'
import ActionButton from '../component/ActionButton'

//Toolbox
// import { devLog } from '../Common/toolBox'


export default class Timer extends Component {
    state = {   pomodoroCFG: {},
                showModal: false}

    componentDidMount() {
        let fetchJson = fetchingJson()
        fetchJson.then(data => this.setState({ pomodoroCFG: data.pomodoro }))
    }

    callback_clickParams = (e) => {
        this.props.cb_showModal()
        // this.setState({showModal: !this.state.showModal})
        // devLog("Timer.callback_clickParams", "click Params")
    }

    render() {
        return (
            <div className={`container border border-success rounded my-3`} >
                <div className="row">
                    <ActionButton
                        name="params"
                        icon={<i className="fas fa-cogs"></i>}
                        cbClick={this.callback_clickParams} 
                        dataToggle="modal"
                        />
                </div>
                <div className="row d-flex justify-content-center">
                    <h4>Timer Row 2</h4>
                </div>
                <div className="row">
                    <h4>Timer Row 3</h4>
                </div>
            </div>
        )
    }
}
