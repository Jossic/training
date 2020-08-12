import React, { Component } from 'react';
import classes from './TitreH1.module.css'

const Titre = (props) => {
    const monCSS = `${classes.policeTitre} border border-dark p-2 m-2 text-white text-center bg-primary rounded`;
    return (
        <h1 className={monCSS}>{props.children}</h1>
    );

}

export default Titre;


