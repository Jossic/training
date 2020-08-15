import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';

export default class FormulaireAjout extends Component {
    state = {
        monTitre: "",
        monAuteur: "",
        mesPages: ""
    }

    handleValidationForm = (e) => {
        e.preventDefault();
        this.props.validation(this.state.monTitre, this.state.monAuteur, this.state.mesPages);
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Lemonada' }}>htmlFormulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du livre</label>
                        <input type="text" value={this.state.monTitre} className="form-control" id="titre" placeholder="Titre du livre" onChange={e => this.setState({ monTitre: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur du livre</label>
                        <input type="text" value={this.state.monAuteur} className="form-control" id="auteur" placeholder="Auteur du livre" onChange={e => this.setState({ monAuteur: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages du livre</label>
                        <input type="text" value={this.state.mesPages} className="form-control" id="nbPages" placeholder="Nombre de pages du livre" onChange={e => this.setState({ mesPages: e.target.value })} />
                    </div >
                    <Button type="btn-primary" clic={this.handleValidationForm}>Envoyer</Button>
                </form >
            </>
        )
    }
}
