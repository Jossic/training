import React, { Component } from 'react'

export default class FormulaireAjout extends Component {
    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Lemonada' }}>Formulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label for="titre">Titre du livre</label>
                        <input type="text" className="form-control" id="titre" placeholder="Titre du livre" />
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </>
        )
    }
}
