import React, { Component } from 'react';

import Livre from './Livre/Livre';


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
        ]
    }

    render() {
        return (
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
                        return (
                            <tr key={livre.id} >
                                <Livre
                                    titre={livre.titre}
                                    auteur={livre.auteur}
                                    nbPages={livre.nbPages}
                                />
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
