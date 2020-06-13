import React, { Component } from 'react'

export default class Modal extends Component {
    handleClose = (event)=>{
        event.preventDefault()
        // window.close()
        console.log('close', "close")
    }
    render() {
        return (
            <div className={`${this.props.show ? 'd-bloc' : 'd-none'} bg-light rounded`}>
                <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable `}>
                    <div className="modal-header">
                        <h5 className="modal-title">modal</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
