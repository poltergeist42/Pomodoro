// Import des bibliotheques React
import React, { Component, Fragment } from 'react'

// Import des fichiers JSON
// import fetchingJson from '../Common/fetchingJson'

// Import des composents du projet
import Radio from '../component/Radio'
import Range from '../component/Range'
import SubmitBtn from '../component/SubmitBtn'

// import toolbox
import { devLog } from '../Common/toolBox'

export default class FormLampe extends Component {
    state = {
        items: [],
        lampe: {}
    }

    componentDidMount() {
        fetch('http://localhost:3000/localCFG.json').then(resp => resp.json()).then(data => this.setState({ lampe: data.lampe }))
        // devLog("formLampe - componentDidMount - state.lampe", this.state.lampe)
    }

    componentDidUpdate() {
        this.handelDefaultChecked()
    }

    handleSbmit = (event) => {
        // event.preventDefault()
        // devLog("handleSubmit - event", event)
    }

    /* ********
    Cette méthode est appelée lors du chargement des composants "Radio". Elle permet de cocher les
    bouton radio en fonction de ce qui est renseigné dans le fichier : "localCFG.json"
    ********** */
    handelDefaultChecked = () => {
        const { items, lampe } = this.state
        items.map((item) => {
            if (item.currentItemValue === lampe.rdLampe) {
                return document.getElementById(item.currentItemID).checked = true
            } else {
                return document.getElementById(item.currentItemID).checked = false
            }
        })
    }

    callback_getCurrentItemValue = (itemID, itemValue) => {
        let itemProps = {
                    currentItemID: itemID,
                    currentItemValue: itemValue
                }
        let items = [ ...this.state.items, itemProps ]
        // devLog("items", items)
        this.setState({ items })

    }

    render() {
        const {lampe} = this.state
        // devLog("lampe", lampe)
        // devLog("type of lampe", typeof lampe.speed)
        return (
            <Fragment>
                <h3 className="ml-5">Selection du mode d'éclairage</h3>
                <form className="form-group" onSubmit={this.handleSbmit}>
                    <div className="container mt-4 pl-5">
                        <Radio
                            name="rdLampe"
                            label="Rainbow"
                            getCurrentItemValue={this.callback_getCurrentItemValue}
                            value="rainbow" />

                        <Radio
                            name="rdLampe"
                            label="Fade IN, Fade OUT"
                            getCurrentItemValue={this.callback_getCurrentItemValue}
                            value="fade" />

                        <Range
                            name="rgeIntensity"
                            label="Intensité"
                            minVal="0"
                            maxVal="100"
                            initValue={lampe.intesity} />

                        <Range
                            name="rgeSpeed"
                            label="Vitesse"
                            minVal="0"
                            maxVal="100"
                            initValue={lampe.speed} />

                        <br/>

                        <SubmitBtn label="Envoyer" />
                    </div>
                </form>
            </Fragment>
        )
    }
}
