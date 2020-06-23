import React, { Component } from 'react'
import { Modal} from 'react-bootstrap'

// import BootstrapForm from './BootstrapForm'
import FormPAramsModal from './FormParamsModal'
import SubmitBtn from '../component/SubmitBtn'

export default class ParamsModal extends Component {
  // state = { workTimeValue: "", paramsShortPause: "", paramslongPause: "", paramsCycle: "" }

  // handleSubmit = (e) => {
  //   e.preventDefault()

  // }

  render() {
    // console.log('this.props.show', this.props.show)
    return (
      <Modal
        // {...this.props}
        // className="bg-dark"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        // onHide={this.props.isclose}
        show = {this.props.isclose}
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
            <FormPAramsModal/>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
            {/* <Button variant="primary" type="submit">Valider</Button> */}
            <SubmitBtn label="Valider" />
          </Modal.Footer>
        </div>
      </Modal>
    )
  }
}
