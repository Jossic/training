import React, { Component } from 'react'
import Button from '../../../components/Buttons/Button'

export default class FormulaireModification extends Component {
    state = {
        monTitre: "",
        monAuteur: "",
        mesPages: ""
    }

    componentDidMount = () => {
        this.setState({
            monTitre: this.props.titre,
            monAuteur: this.props.auteur,
            mesPages: this.props.nbPages,
        })
    }

    handleValidation = () => {
        this.props.validationModification(this.props.id, this.state.monTitre, this.state.monAuteur, this.state.mesPages);
    }
    render() {
        return (
            <>
                <td><input type="text" className="form-control" value={this.state.monTitre} onChange={(e) => this.setState({ monTitre: e.target.value })} /></td>
                <td><input type="text" className="form-control" value={this.state.monAuteur} onChange={(e) => this.setState({ monAuteur: e.target.value })} /></td>
                <td><input type="text" className="form-control" value={this.state.mesPages} onChange={(e) => this.setState({ mesPages: e.target.value })} /></td>
                <td colSpan="2"><Button type="btn-success" clic={this.handleValidation}>Valider</Button></td>
            </>
        )
    }
}
