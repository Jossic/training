import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';

const Livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages}</td>
        <td><Button type="btn-info" clic={() => console.log('Modification')}>Modifier</Button></td>
        <td><Button type="btn-warning" clic={() => console.log('Suppression')}>Supprimer</Button></td>
    </>
);

export default Livre;
