import React, { Component } from 'react';

import Livre from './Livre/Livre';
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';
import FormulaireModification from './FormulaireModification/FormulaireModification';


export default class Livres extends Component {
    state = {
        livres: [
            {
                id: 1,
                titre: "Il suffit d'une rencontre pour changer de vie",
                auteur: "Anto Nevo",
                nbPages: 150
            },
            {
                id: 2,
                titre: "L'autoroute du millionnaire",
                auteur: "Machin",
                nbPages: 250
            },
            {
                id: 3,
                titre: "Javascript de A à Z",
                auteur: "Bidule",
                nbPages: 300
            },
            {
                id: 4,
                titre: "Il suffit d'une rencontre pour changer de vie 2",
                auteur: "Anto Nevo",
                nbPages: 200
            },
        ],
        lastIdLivre: 4,
        idLivreAModifier: 0,
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex((l) => {
            return l.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab, 1);

        this.setState({ livres: newLivres });
    }

    handleAjoutLivre = (titre, auteur, nbPages) => {
        const newLivre = {
            id: this.state.lastIdLivre + 1,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages
        };
        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);

        this.setState((oldState) => {
            return {
                livres: newListeLivres,
                lastIdLivre: oldState.lastIdLivre + 1,
            }
        })
        this.props.fermerForm();
    }

    handleModificationLivre = (id, titre, auteur, nbPages) => {
        const caseLivre = this.state.livres.findIndex(l => {
            return l.id === id;
        });

        const newLivre = { id, titre, auteur, nbPages };

        const newListe = [...this.state.livres];
        newListe[caseLivre] = newLivre;

        this.setState({
            livres: newListe,
            idLivreAModifier: 0
        })
    }

    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <td>Titre</td>
                            <td>Auteur</td>
                            <td>Nombre de pages</td>
                            <td colSpan="2">Actions</td>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {this.state.livres.map((livre) => {
                            if (livre.id !== this.state.idLivreAModifier) {
                                return (
                                    <tr key={livre.id} >
                                        <Livre
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nbPages={livre.nbPages}
                                            suppression={() => this.handleSuppressionLivre(livre.id)}
                                            modification={() => this.setState({ idLivreAModifier: livre.id })}
                                        />
                                    </tr>
                                )
                            } else {
                                return (<tr key={livre.id} ><FormulaireModification
                                    id={livre.id}
                                    titre={livre.titre}
                                    auteur={livre.auteur}
                                    nbPages={livre.nbPages}
                                    validationModification={this.handleModificationLivre}
                                /></tr>);
                            }
                        })}
                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout validation={this.handleAjoutLivre} />}
            </>
        )
    }
}
