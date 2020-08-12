import React, { Component } from 'react';

const Button = (props) => {
    let monTypeDeBtn = '';
    if (props.type === 'Ajouter') {
        monTypeDeBtn = "btn btn-success";
    } else if (props.type === 'Modifier') {
        monTypeDeBtn = "btn btn-info";
    } else if (props.type === 'Supprimer') {
        monTypeDeBtn = "btn btn-warning";
    }
    return (
        <button className={monTypeDeBtn} onClick={props.clic}>{props.type}</button>
    );

}

export default Button;
