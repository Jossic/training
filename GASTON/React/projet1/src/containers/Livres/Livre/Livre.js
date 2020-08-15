import React from 'react';
import Button from '../../../components/Buttons/Button';

const Livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages}</td>
        <td><Button type="btn-info" clic={props.modification}>Modifier</Button></td>
        <td><Button type="btn-warning" clic={props.suppression}>Supprimer</Button></td>
    </>
);

export default Livre;

