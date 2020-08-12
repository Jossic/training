import React, { Component } from 'react'
import AgePersonne from './AgePersonne/AgePersonne'

export default class Personne extends Component {
    render() {
        return (
            <>
                <h1>{this.props.nom}</h1>
                <AgePersonne age={this.props.age} />
                <div>Sexe : {this.props.sexe}</div>
            </>
        )
    }
}





