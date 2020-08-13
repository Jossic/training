import React, { Component } from 'react';
import Button from '../../components/Buttons/Button';


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
        ,

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
                            <tr key={livre.id}>
                                <td>{livre.titre}</td>
                                <td>{livre.auteur}</td>
                                <td>{livre.nbPages}</td>
                                <td><Button type="btn-info" clic={() => console.log('Modification')}>Modifier</Button></td>
                                <td><Button type="btn-warning" clic={() => console.log('Suppression')}>Supprimer</Button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        )
    }
}
