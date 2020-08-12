import React, { Component } from 'react';
import Button from '../../components/Buttons/Button';


export default class Livres extends Component {
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
                <tbody>
                    <tr className="table-light">
                        <td>Titre 1</td>
                        <td>Auteur 1</td>
                        <td>X pages</td>
                        <td><Button type="btn-info" clic={() => console.log('Modification')}>Modifier</Button></td>
                        <td><Button type="btn-warning" clic={() => console.log('Suppression')}>Supprimer</Button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
