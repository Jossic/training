import React, { Component } from 'react'
import AgePersonne from './AgePersonne/AgePersonne'
import classes from './Personne.module.css'

export default class Personne extends Component {


    render() {
        const monStyle = { color: 'black' };
        monStyle.fontSize = "20px";

        if (this.props.sexe) {
            monStyle.color = 'blue';
        } else {
            monStyle.color = '#d300ea';
        }

        return (
            <div className={classes.monTitre} >
                <h1>{this.props.nom}</h1>
                <AgePersonne age={this.props.age} />
                <div style={monStyle}>Sexe : {this.props.sexe ? "Homme" : "Femme"}</div>
            </div>
        )
    }
}





