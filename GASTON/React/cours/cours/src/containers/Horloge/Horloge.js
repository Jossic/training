import React, { Component } from 'react'

export default class Horloge extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    // Ou
    state = {
        date: new Date(),
        compteur: 1
    }

    tick = () => {
        this.setState((oldState, props) => {
            return {
                date: new Date(),
                compteur: oldState.compteur + 1
            }
        }
        );
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <>
                <h2>Heure : {this.state.date.toLocaleTimeString()}</h2>
                <div>Compteur : {this.state.compteur}</div>
            </>
        )
    }
}
