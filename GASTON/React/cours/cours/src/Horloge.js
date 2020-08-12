import React, { Component } from 'react'

export default class Horloge extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    // Ou
    state = {
        date: new Date(),
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <h1>
                Heure : {this.state.date.toLocaleTimeString()}
            </h1>
        )
    }
}
