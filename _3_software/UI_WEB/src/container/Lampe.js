import React, { Component } from 'react'

import FromLampe from './FormLampe'

export default class Lampe extends Component {

    componentDidMount() {
        this.props.activePage("lampe")
    }

    render() {
        return (
            <div>
                <h1 className="m-3">Mode Lampe</h1>
                <br/>
                <FromLampe />
            </div>
        )
    }
}
