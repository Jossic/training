import React, { Component } from 'react';

const Button = (props) => {
    // let monTypeDeBtn = '';
    // if (props.type === 'Ajouter') {
    //     monTypeDeBtn = "btn btn-success w-100";
    // } else if (props.type === 'Modifier') {
    //     monTypeDeBtn = "btn btn-info";
    // } else if (props.type === 'Supprimer') {
    //     monTypeDeBtn = "btn btn-warning";
    // }
    const monTypeDeBtn = `btn ${props.type} ${props.css}`;
    return (
        <button className={monTypeDeBtn} onClick={props.clic}>{props.children}</button>
    );

}

export default Button;
