import React, { Component } from 'react'
import {Form, Col, Button} from 'react-bootstrap'

export default class BootstrapForm extends Component {
  state = { workTimeValue: "", paramsShortPause: "", paramslongPause: "", paramsCycle: "" }


  handleChange = (e) => {
    switch (e.target.id) {
      case 'paramsWorkTime':
        this.setState({ workTimeValue: e.target.value })
        break
      case 'paramsShortPause':
        this.setState({ paramsShortPause: e.target.value })
        break
      case 'paramslongPause':
        this.setState({ paramslongPause: e.target.value })
        break
      case 'paramsCycle':
        this.setState({ paramsCycle: e.target.value })
        break
      default:
        return
    }
  }

    render() {
        return (
            <Form>
                              <Form.Group>
                <Form.Row>
                  <Form.Label column sm={6} htmlFor="paramsWorkTime">
                    Durée de travail :
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ID="paramsWorkTime"
                      size="sm"
                      type="number"
                      placeholder="Durée en minute"
                      onChange={this.handleChange} 
                      value={this.state.workTimeValue}
                      />
                  </Col>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Label column sm={6} htmlFor="paramsShortPause">
                    Durée de la pause courte :
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ID="paramsShortPause"
                      size="sm"
                      type="number"
                      placeholder="Durée en minute"
                      onChange={this.handleChange} />
                  </Col>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Label column sm={6} htmlFor="paramslongPause">
                    Durée de la pause courte :
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ID="paramslongPause"
                      size="sm"
                      type="number"
                      placeholder="Durée en minute"
                      onChange={this.handleChange} />
                  </Col>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Label column sm={6} htmlFor="paramsCycle">
                    Durée de la pause courte :
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ID="paramsCycle"
                      size="sm"
                      type="number"
                      placeholder="Durée en minute"
                      onChange={this.handleChange} />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Button type='submit'>GO</Button>
              </Form>
        )
    }
}
