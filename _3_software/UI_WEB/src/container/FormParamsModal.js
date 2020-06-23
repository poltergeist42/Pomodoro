import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { InputField, InputLabel } from '../component/InputField'

// import { devLog } from '../Common/toolBox'

export default class FormParamsModal extends Component {
    state = { itemID: [] }

    // handleItemID = () => {
    //     localItemID = [...this.state.itemID, uniqid()]
    //     this.setState({ itemID: localItemID })
    // }

    callback_getCurrentItemValue = (currentItem) => {
        let tmpItemState = { ...this.state.itemID, ...currentItem }
        this.setState({ itemID: tmpItemState })
        // devLog("FormParamsModal.state.itemID", this.state.itemID)
    }

    render() {
        return (
            <form className="form-group" name="FormParamsModal">
                <Container>
                    <Row className="mb-1">
                        <Col>
                            <InputLabel htmlFor={this.state.itemID.params_work_time} label="Durée de travail :" />
                        </Col>
                        <Col>
                            <InputField
                                name="params_work_time"
                                type="number"
                                get_item_id={this.callback_getCurrentItemValue}
                                min="15"
                                max=""
                            />
                        </Col>
                    </Row>

                    <Row className="mb-1">
                        <Col>
                            <InputLabel htmlFor={this.state.itemID.paramsShortPause} label="Durée de la pause courte :" />
                        </Col>
                        <Col>
                            <InputField
                                name="paramsShortPause"
                                type="number"
                                get_item_id={this.callback_getCurrentItemValue}
                                min="2"
                                max="10"
                            />
                        </Col>
                    </Row>

                    <Row className="mb-1">
                        <Col>
                            <InputLabel htmlFor={this.state.itemID.params_work_time} label="Durée de la pause courte :" />
                        </Col>
                        <Col>
                            <InputField
                                name="paramslongPause"
                                type="number"
                                get_item_id={this.callback_getCurrentItemValue}
                                min=""
                                max=""
                            />
                        </Col>
                    </Row>

                    <Row className="mb-1">
                        <Col>
                            <InputLabel htmlFor={this.state.itemID.params_work_time} label="Nombre de période dans un cycle :" />
                        </Col>
                        <Col>
                            <InputField
                                name="paramsCycle"
                                type="number"
                                get_item_id={this.callback_getCurrentItemValue}
                                min="1"
                                max=""
                            />
                        </Col>
                    </Row>

                </Container>
            </form>
        )
    }
}
