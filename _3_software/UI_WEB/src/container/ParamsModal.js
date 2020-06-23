import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

// import BootstrapForm from './BootstrapForm'
import FormPAramsModal from './FormParamsModal'
import SubmitBtn from '../component/SubmitBtn'

export default class ParamsModal extends Component {
  state = {formID: ""}

  callback_getFormID = (formID) => {
    this.setState({ formID })
  }

  render() {
    // console.log('this.props.show', this.props.show)
    return (
      <Modal
        // {...this.props}
        // className="bg-dark"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        // onHide={this.props.isclose}
        show={this.props.isclose}
        onHide={this.props.cb_showModal}
        centered
      >
        <div className="bg-dark text-light rounded-lg">
          <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-vcenter">
              Paramètres
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            {/* <BootstrapForm /> */}
            <FormPAramsModal cb_getFormID={this.callback_getFormID}/>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
            {/* <Button variant="primary" type="submit">Valider</Button> */}
            <SubmitBtn formID={this.state.formID} label="Valider" />
          </Modal.Footer>
        </div>
      </Modal>
    )
  }
}
